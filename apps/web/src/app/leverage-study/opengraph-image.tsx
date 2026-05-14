import { ImageResponse } from 'next/og'

export const alt = 'Politically Expensive to Ignore — POLINTEL Leverage Study'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#07070f',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse at 30% 55%, rgba(232,146,12,0.18) 0%, transparent 60%)',
          }}
        />
        <div
          style={{
            fontFamily: 'monospace',
            fontSize: '14px',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#e8920c',
            marginBottom: '28px',
            position: 'relative',
          }}
        >
          POLINTEL · Quarterly Study
        </div>
        <div
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '68px',
            fontWeight: 400,
            color: '#eef2ff',
            lineHeight: 1.1,
            maxWidth: '880px',
            marginBottom: '36px',
            position: 'relative',
          }}
        >
          Politically Expensive to Ignore
        </div>
        <div
          style={{
            fontFamily: 'system-ui, sans-serif',
            fontSize: '24px',
            color: '#6272a0',
            maxWidth: '680px',
            position: 'relative',
          }}
        >
          A study of Black political power and what it would take to make it real
        </div>
      </div>
    ),
    { ...size }
  )
}
