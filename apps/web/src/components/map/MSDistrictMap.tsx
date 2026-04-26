'use client'

import { useState, useEffect, useMemo, useRef } from 'react'
import { geoMercator, geoPath } from 'd3-geo'
import type { Feature, FeatureCollection, Geometry } from 'geojson'
import { msMembersByDistrict } from '@/data/ms-members'
import { useTheme } from '@/hooks/useTheme'

const W = 480
const H = 560

const PARTY_COLORS = {
  dark: {
    D: { base: '#1e4080', stroke: '#4d77b8', hover: '#2a58a8', selected: '#3668c0' },
    R: { base: '#6b1515', stroke: '#b04040', hover: '#8a2020', selected: '#9a2525' },
    I: { base: '#1e3848', stroke: '#507888', hover: '#2a4858', selected: '#305868' },
  },
  light: {
    D: { base: '#5882c8', stroke: '#3a62a8', hover: '#6a94d8', selected: '#7aa4e8' },
    R: { base: '#c05050', stroke: '#a03030', hover: '#d06060', selected: '#e07070' },
    I: { base: '#6a7898', stroke: '#506080', hover: '#7a88a8', selected: '#8a98b8' },
  },
} as const

interface Props {
  selectedDistrict: number | null
  onDistrictHover: (d: number | null) => void
  onDistrictClick: (d: number) => void
}

export function MSDistrictMap({ selectedDistrict, onDistrictHover, onDistrictClick }: Props) {
  const [geoData, setGeoData]       = useState<FeatureCollection | null>(null)
  const [loading, setLoading]       = useState(true)
  const [hovered, setHovered]       = useState<number | null>(null)
  const [zoomFactor, setZoomFactor] = useState(1)
  const [pan, setPan]               = useState<[number, number]>([0, 0])
  const dragRef = useRef<{ startX: number; startY: number; panX: number; panY: number } | null>(null)
  const didDrag = useRef(false)
  const theme = useTheme()

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/data/ms-districts.json`)
      .then(r => r.json())
      .then((data: FeatureCollection) => {
        const rewound: FeatureCollection = { ...data, features: data.features.map(rewindFeature) }
        const sorted: FeatureCollection = {
          ...rewound,
          features: [...rewound.features].sort((a, b) => coordCount(b) - coordCount(a)),
        }
        setGeoData(sorted)
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  const baseProj = useMemo(() => {
    if (!geoData) return null
    return geoMercator().fitExtent([[10, 10], [W - 10, H - 10]], geoData)
  }, [geoData])

  const pathGen = useMemo(() => {
    if (!baseProj) return null
    const s = baseProj.scale()
    const [tx, ty] = baseProj.translate()
    const proj = geoMercator()
      .scale(s * zoomFactor)
      .translate([
        W / 2 + (tx - W / 2) * zoomFactor + pan[0],
        H / 2 + (ty - H / 2) * zoomFactor + pan[1],
      ])
    return geoPath().projection(proj)
  }, [baseProj, zoomFactor, pan])

  function handleMouseDown(e: React.MouseEvent<SVGSVGElement>) {
    dragRef.current = { startX: e.clientX, startY: e.clientY, panX: pan[0], panY: pan[1] }
    didDrag.current = false
  }
  function handleMouseMove(e: React.MouseEvent<SVGSVGElement>) {
    if (!dragRef.current) return
    const dx = e.clientX - dragRef.current.startX
    const dy = e.clientY - dragRef.current.startY
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) didDrag.current = true
    setPan([dragRef.current.panX + dx, dragRef.current.panY + dy])
  }
  function handleMouseUp() { dragRef.current = null }

  const zoomIn  = () => setZoomFactor(z => Math.min(z * 1.7, 12))
  const zoomOut = () => setZoomFactor(z => Math.max(z / 1.7, 1))
  const reset   = () => { setZoomFactor(1); setPan([0, 0]) }

  const mapBg      = theme === 'dark' ? '#080d1a' : '#c4cce0'
  const loadingTxt = theme === 'dark' ? '#323a5c' : '#6070a0'
  const selStroke  = theme === 'dark' ? '#5b90e0' : '#2563eb'
  const colors     = PARTY_COLORS[theme]

  return (
    <div className="relative" style={{ background: mapBg }}>
      <div className="absolute top-3 right-3 z-10 flex flex-col gap-1">
        {([['＋', zoomIn], ['－', zoomOut], ['⌂', reset]] as const).map(([label, fn]) => (
          <button key={label} onClick={fn as () => void}
            className="w-7 h-7 bg-surface-2 border border-border hover:border-accent text-ink-2 hover:text-accent font-mono text-sm flex items-center justify-center rounded transition-colors select-none">
            {label}
          </button>
        ))}
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        style={{ width: '100%', height: 'auto', display: 'block', cursor: dragRef.current ? 'grabbing' : 'grab' }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <rect width={W} height={H} fill={mapBg} />
        {loading && (
          <text x={W / 2} y={H / 2} textAnchor="middle" fill={loadingTxt} fontSize={10} fontFamily="monospace">
            LOADING DISTRICTS…
          </text>
        )}
        {pathGen && geoData?.features.map(feature => {
          const cdRaw  = (feature.properties?.CD119 as string) ?? '0'
          const num    = parseInt(cdRaw, 10)
          const member = msMembersByDistrict[num]
          const party  = (member?.party ?? 'D') as keyof typeof colors
          const c      = colors[party]
          const isSel  = selectedDistrict === num
          const isHov  = hovered === num
          const fill        = isSel ? c.selected : isHov ? c.hover : c.base
          const stroke      = (isSel || isHov) ? selStroke : c.stroke
          const strokeWidth = isSel ? 1.5 : isHov ? 1 : 0.5
          const d = pathGen(feature as Feature<Geometry>)
          if (!d) return null
          return (
            <path key={cdRaw} d={d} fill={fill} stroke={stroke} strokeWidth={strokeWidth}
              style={{ cursor: dragRef.current ? 'grabbing' : 'pointer' }}
              onMouseEnter={() => { setHovered(num); onDistrictHover(num) }}
              onMouseLeave={() => { setHovered(null); onDistrictHover(null) }}
              onClick={() => { if (!didDrag.current) onDistrictClick(num) }}
            />
          )
        })}
      </svg>
    </div>
  )
}

function rewindFeature(f: Feature): Feature {
  const geom = f.geometry as any
  if (!geom) return f
  if (geom.type === 'Polygon')
    return { ...f, geometry: { ...geom, coordinates: geom.coordinates.map((r: number[][]) => r.slice().reverse()) } }
  if (geom.type === 'MultiPolygon')
    return { ...f, geometry: { ...geom, coordinates: geom.coordinates.map((poly: number[][][]) => poly.map((r: number[][]) => r.slice().reverse())) } }
  return f
}

function coordCount(f: Feature): number {
  const g = f.geometry as Geometry & { coordinates?: unknown[] }
  if (!g?.coordinates) return 0
  if (g.type === 'Polygon') return (g as { coordinates: number[][][] }).coordinates[0]?.length ?? 0
  if (g.type === 'MultiPolygon') return (g as { coordinates: number[][][][] }).coordinates.reduce((s, p) => s + (p[0]?.length ?? 0), 0)
  return 0
}
