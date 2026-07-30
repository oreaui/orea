import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size = { width: 1200, height: 630 }

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0a0a0a',
          color: '#fafafa',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        <svg width="80" height="52" viewBox="0 0 206 133" fill="none">
          <path
            d="M144 0C178.242 0 206 27.7583 206 62V71C206 105.242 178.242 133 144 133H131.686C102.244 133 74.4654 119.349 56.4775 96.041L49.5 87L26.5 57H49.5L0 0H144ZM117 32C102.088 32 90 44.0883 90 59V77.5C90 91.3071 101.193 102.5 115 102.5H150C163.807 102.5 175 91.3071 175 77.5V59C175 44.0883 162.912 32 148 32H117Z"
            fill="#fafafa"
          />
        </svg>
        <h1
          style={{
            marginTop: '24px',
            fontSize: '56px',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            textAlign: 'center',
          }}
        >
          Orea UI
        </h1>
        <p
          style={{
            marginTop: '12px',
            fontSize: '24px',
            color: '#a0a0a0',
            textAlign: 'center',
          }}
        >
          Premium animated React components
        </p>
      </div>
    ),
    { ...size },
  )
}
