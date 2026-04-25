'use client'

import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
import { stateData } from '@/data/states'

const GEO_URL = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json'

// States with full congressional district drilldown
const DISTRICT_STATES = new Set(['California', 'Mississippi', 'New Jersey'])

interface USMapProps {
  selectedState: string | null
  onStateClick: (stateName: string) => void
}

export function USMap({ selectedState, onStateClick }: USMapProps) {
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

            let fill = '#14162e'
            if (isSelected)       fill = '#1e2a50'
            else if (hasDistricts) fill = '#0e2240'
            else if (hasProfile)   fill = '#162040'

            let stroke = '#252848'
            if (isSelected)        stroke = '#5b90e0'
            else if (hasDistricts) stroke = '#1e5a9e'
            else if (hasProfile)   stroke = '#2d4f7e'

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onClick={() => onStateClick(name)}
                style={{
                  default: {
                    fill,
                    stroke,
                    strokeWidth: isSelected ? 1.5 : hasDistricts ? 1 : 0.75,
                    outline: 'none',
                    cursor: 'pointer',
                    transition: 'fill 150ms, stroke 150ms',
                  },
                  hover: {
                    fill: isSelected ? '#1e2a50' : hasDistricts ? '#163060' : '#1a2040',
                    stroke: '#5b90e0',
                    strokeWidth: 1,
                    outline: 'none',
                    cursor: 'pointer',
                  },
                  pressed: {
                    fill: '#1e2a50',
                    stroke: '#5b90e0',
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
