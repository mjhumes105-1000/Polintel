'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { useTheme } from '@/hooks/useTheme'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

const COLORS = {
  dark: {
    base:      { fill: '#162040', stroke: '#2d4f7e' },
    selected:  { fill: '#1e2a50', stroke: '#5b90e0' },
    hover:     '#1a3060',
    pressed:   { fill: '#1e2a50', stroke: '#5b90e0' },
  },
  light: {
    base:      { fill: '#a0b0d4', stroke: '#6070a8' },
    selected:  { fill: '#5a7cb8', stroke: '#2563eb' },
    hover:     '#8aa0c8',
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
            const isSelected = selectedState === name
            const tier = isSelected ? C.selected : C.base

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onStateClick(name)}
                style={{
                  default: {
                    fill: tier.fill,
                    stroke: tier.stroke,
                    strokeWidth: isSelected ? 1.5 : 0.75,
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'fill 150ms, stroke 150ms',
                  },
                  hover: {
                    fill: isSelected ? C.hover : C.hover,
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
