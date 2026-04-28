'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { stateData } from '@/data/states'
import { useTheme } from '@/hooks/useTheme'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const DISTRICT_STATES = new Set(['California', 'Mississippi', 'New Jersey', 'Florida', 'Texas', 'New York'])

const COLORS = {
  dark: {
    default:   { fill: '#14162e', stroke: '#252848' },
    profile:   { fill: '#162040', stroke: '#2d4f7e' },
    district:  { fill: '#0e2240', stroke: '#1e5a9e' },
    selected:  { fill: '#1e2a50', stroke: '#5b90e0' },
    hover:     { default: '#1a2040', district: '#163060', selected: '#1e2a50' },
    pressed:   { fill: '#1e2a50', stroke: '#5b90e0' },
  },
  light: {
    default:   { fill: '#b8c4de', stroke: '#8898c0' },
    profile:   { fill: '#a0b0d4', stroke: '#6070a8' },
    district:  { fill: '#7e96c8', stroke: '#4060a0' },
    selected:  { fill: '#5a7cb8', stroke: '#2563eb' },
    hover:     { default: '#a8b8d8', district: '#6a88c0', selected: '#5a7cb8' },
    pressed:   { fill: '#5a7cb8', stroke: '#2563eb' },
  },
}

interface USMapProps {
  selectedState: string | null
  onStateClick: (stateName: string) => void
}

export function USMap({ selectedState, onStateClick }: USMapProps) {
  const theme = useTheme()
  const C = COLORS[theme]

  return (
    <ComposableMap
      projection="geoAlbersUsa"
      projectionConfig={{ scale: 900 }}
      viewBox="0 0 960 600"
      style={{ width: '100%', height: 'auto' }}
    >
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name: string = geo.properties.name
            const info = stateData[name]
            const isSelected = selectedState === name
            const hasDistricts = DISTRICT_STATES.has(name)
            const hasProfile = info?.governor?.profileSlug

            const tier = isSelected ? C.selected : hasDistricts ? C.district : hasProfile ? C.profile : C.default
            const hoverFill = isSelected ? C.hover.selected : hasDistricts ? C.hover.district : C.hover.default

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onStateClick(name)}
                style={{
                  default: {
                    fill: tier.fill,
                    stroke: tier.stroke,
                    strokeWidth: isSelected ? 1.5 : hasDistricts ? 1 : 0.75,
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'fill 150ms, stroke 150ms',
                  },
                  hover: {
                    fill: hoverFill,
                    stroke: C.selected.stroke,
                    strokeWidth: 1,
                    outline: 'none',
                    cursor: 'pointer',
                  },
                  pressed: {
                    fill: C.pressed.fill,
                    stroke: C.pressed.stroke,
                    strokeWidth: 1.5,
                    outline: 'none',
                  },
                }}
              />
            )
          })
        }
      </Geographies>
    </ComposableMap>
  )
}
