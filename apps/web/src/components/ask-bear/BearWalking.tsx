'use client'

// Side-profile walking bear. Each limb group pivots at its joint (50% 0% of its
// own bounding box via transform-box: fill-box), so the hip/shoulder is always
// the center of rotation regardless of how the leg extends below it.

export function BearWalking({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 72 58"
      width="54"
      height="44"
      aria-hidden
      className={className}
    >
      <g>

        {/* ── Back arm (rendered first = behind body) ───────────────────────── */}
        {/* Shoulder pivot at (25, 27). Rect x=22.5 → box center-x = 25 ✓      */}
        <g>
          <rect x="22.5" y="27" width="5" height="9" rx="2.5" fill="#5A3C1E" />
          <ellipse cx="25" cy="37.5" rx="4" ry="2" fill="#4A3015" />
        </g>

        {/* ── Back leg (rendered before body = behind it) ───────────────────── */}
        {/* Hip pivot at (27, 40). Rect x=23.5 + ellipse cx=27,rx=5.5           */}
        {/* → box x: 21.5–32.5, center-x = 27 ✓                                */}
        <g>
          <rect x="23.5" y="40" width="7" height="13" rx="3.5" fill="#5A3C1E" />
          <ellipse cx="27" cy="54.5" rx="5.5" ry="2.5" fill="#4A3015" />
        </g>

        {/* ── Tail ──────────────────────────────────────────────────────────── */}
        <ellipse cx="18" cy="29" rx="4.5" ry="3.5" fill="#5A3C1E" />

        {/* ── Body ──────────────────────────────────────────────────────────── */}
        <ellipse cx="33" cy="32" rx="15" ry="10" fill="#8C6239" />

        {/* ── Belly patch ───────────────────────────────────────────────────── */}
        <ellipse cx="35" cy="33" rx="9" ry="6.5" fill="#C4955A" />

        {/* ── Head ──────────────────────────────────────────────────────────── */}
        <circle cx="48" cy="21" r="10" fill="#8C6239" />

        {/* ── Ear ───────────────────────────────────────────────────────────── */}
        <circle cx="54" cy="13" r="4.5" fill="#8C6239" />
        <circle cx="54" cy="13" r="3"   fill="#C4955A" />

        {/* ── Snout ─────────────────────────────────────────────────────────── */}
        <ellipse cx="57" cy="23" rx="5.5" ry="4" fill="#C4955A" />

        {/* ── Nose ──────────────────────────────────────────────────────────── */}
        <ellipse cx="61.5" cy="21.5" rx="2.2" ry="1.8" fill="#2C1A0E" />

        {/* ── Eye + highlight ───────────────────────────────────────────────── */}
        <circle cx="52" cy="18"   r="2.2" fill="#2C1A0E" />
        <circle cx="53" cy="17.2" r="0.9" fill="white"   />

        {/* ── Front arm (rendered after body = in front) ────────────────────── */}
        {/* Shoulder pivot at (40, 27). Rect x=37.5 + ellipse cx=40,rx=4        */}
        {/* → box x: 36–44, center-x = 40 ✓                                    */}
        <g>
          <rect x="37.5" y="27" width="5" height="9" rx="2.5" fill="#8C6239" />
          <ellipse cx="40" cy="37.5" rx="4" ry="2" fill="#6B4A29" />
        </g>

        {/* ── Front leg (rendered last = in front of everything) ────────────── */}
        {/* Hip pivot at (40, 40). Rect x=36.5 + ellipse cx=40,rx=5.5           */}
        {/* → box x: 34.5–45.5, center-x = 40 ✓                                */}
        <g>
          <rect x="36.5" y="40" width="7" height="13" rx="3.5" fill="#8C6239" />
          <ellipse cx="40" cy="54.5" rx="5.5" ry="2.5" fill="#6B4A29" />
        </g>

      </g>
    </svg>
  )
}
