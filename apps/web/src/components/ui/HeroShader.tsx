'use client'

import { useEffect, useRef } from 'react'

// ── Hero background shader ────────────────────────────────────────────────────
// A slow fbm-noise aurora in brand colors, rendered with raw WebGL (no deps).
// Engineering constraints:
//   - DPR capped at 1.5, ~30fps cap — this is ambience, not a game
//   - pauses when off-screen (IntersectionObserver) or tab hidden
//   - re-reads brand colors when the html theme class flips
//   - prefers-reduced-motion → renders exactly one static frame
//   - WebGL unavailable / context lost → silently renders nothing (CSS bg shows)

const FRAG = `
precision mediump float;
uniform vec2 u_res;
uniform float u_time;
uniform vec3 u_accent;
uniform vec3 u_flag;
uniform float u_alpha;

float hash(vec2 p) {
  return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}
float noise(vec2 p) {
  vec2 i = floor(p), f = fract(p);
  vec2 u = f * f * (3.0 - 2.0 * f);
  return mix(
    mix(hash(i), hash(i + vec2(1.0, 0.0)), u.x),
    mix(hash(i + vec2(0.0, 1.0)), hash(i + vec2(1.0, 1.0)), u.x),
    u.y
  );
}
float fbm(vec2 p) {
  float v = 0.0, a = 0.5;
  for (int i = 0; i < 4; i++) {
    v += a * noise(p);
    p *= 2.03;
    a *= 0.5;
  }
  return v;
}

void main() {
  vec2 uv = gl_FragCoord.xy / u_res;
  vec2 p = uv * vec2(u_res.x / u_res.y, 1.0);
  float t = u_time * 0.028;

  // domain-warped fbm: one field advects another for the aurora drift
  float warp = fbm(p * 2.1 - t * 0.35);
  float n = fbm(p * 1.5 + vec2(t * 0.6, -t * 0.3) + warp * 0.65);

  float band = smoothstep(0.38, 0.78, n);
  float hot  = smoothstep(0.74, 0.95, n);

  // accent carries the field; a restrained amber lick at the crests
  vec3 col = u_accent * band;
  col = mix(col, u_flag, hot * 0.16);

  // vignette anchored near the headline, fading right and down
  float vign = smoothstep(1.15, 0.25, distance(uv, vec2(0.28, 0.72)));

  gl_FragColor = vec4(col, band * vign * u_alpha);
}
`

const VERT = `
attribute vec2 a_pos;
void main() { gl_Position = vec4(a_pos, 0.0, 1.0); }
`

function readRgbVar(name: string): [number, number, number] {
  const raw = getComputedStyle(document.documentElement).getPropertyValue(name).trim()
  const parts = raw.split(/\s+/).map(Number)
  if (parts.length === 3 && parts.every((n) => !Number.isNaN(n))) {
    return [parts[0] / 255, parts[1] / 255, parts[2] / 255]
  }
  return [0.36, 0.56, 0.88]
}

export function HeroShader({ className = '' }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    })
    if (!gl) return

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ── program setup ──
    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      return s
    }
    const prog = gl.createProgram()!
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, VERT))
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, FRAG))
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'a_pos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    gl.enable(gl.BLEND)
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)

    const uRes = gl.getUniformLocation(prog, 'u_res')
    const uTime = gl.getUniformLocation(prog, 'u_time')
    const uAccent = gl.getUniformLocation(prog, 'u_accent')
    const uFlag = gl.getUniformLocation(prog, 'u_flag')
    const uAlpha = gl.getUniformLocation(prog, 'u_alpha')

    function syncTheme() {
      const dark = document.documentElement.classList.contains('dark')
      const [ar, ag, ab] = readRgbVar('--color-accent')
      const [fr, fg, fb] = readRgbVar('--color-flag')
      gl!.uniform3f(uAccent, ar, ag, ab)
      gl!.uniform3f(uFlag, fr, fg, fb)
      // light surfaces need a much quieter field
      gl!.uniform1f(uAlpha, dark ? 0.34 : 0.16)
    }

    function resize() {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5)
      const w = Math.round(canvas!.clientWidth * dpr)
      const h = Math.round(canvas!.clientHeight * dpr)
      if (canvas!.width !== w || canvas!.height !== h) {
        canvas!.width = w
        canvas!.height = h
        gl!.viewport(0, 0, w, h)
      }
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
    }

    // ── render loop: ~30fps, only while visible ──
    let raf = 0
    let running = false
    let last = 0
    let elapsed = Math.random() * 100 // desync tabs; not in render path
    const FRAME_MS = 1000 / 30

    function frame(now: number) {
      if (!running) return
      raf = requestAnimationFrame(frame)
      if (now - last < FRAME_MS) return
      elapsed += Math.min(now - last, 100) / 1000
      last = now
      gl!.uniform1f(uTime, elapsed)
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
    }

    function renderOnce() {
      resize()
      syncTheme()
      gl!.uniform1f(uTime, elapsed)
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
    }

    function start() {
      if (running || reduceMotion) return
      running = true
      last = performance.now()
      raf = requestAnimationFrame(frame)
    }
    function stop() {
      running = false
      cancelAnimationFrame(raf)
    }

    renderOnce()
    const io = new IntersectionObserver(
      ([e]) => (e.isIntersecting && !document.hidden ? start() : stop()),
      { threshold: 0.01 }
    )
    io.observe(canvas)

    const onVis = () => (document.hidden ? stop() : start())
    document.addEventListener('visibilitychange', onVis)

    const ro = new ResizeObserver(() => {
      resize()
      if (!running) renderOnce()
    })
    ro.observe(canvas)

    const mo = new MutationObserver(() => {
      syncTheme()
      if (!running) renderOnce()
    })
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] })

    const onLost = (e: Event) => {
      e.preventDefault()
      stop()
    }
    canvas.addEventListener('webglcontextlost', onLost)

    return () => {
      stop()
      io.disconnect()
      ro.disconnect()
      mo.disconnect()
      document.removeEventListener('visibilitychange', onVis)
      canvas.removeEventListener('webglcontextlost', onLost)
      gl.getExtension('WEBGL_lose_context')?.loseContext()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden
      className={`pointer-events-none ${className}`}
      style={{
        maskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 55%, transparent 100%)',
      }}
    />
  )
}
