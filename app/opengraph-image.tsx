import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Gustavo Gouveia — Engenharia de Software'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'radial-gradient(ellipse at center, #0f1419 0%, #000000 100%)',
          position: 'relative',
        }}
      >
        {/* Aurora gradient background */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse 70% 50% at 30% 30%, rgba(59, 130, 246, 0.2) 0%, transparent 60%), radial-gradient(ellipse 60% 50% at 70% 60%, rgba(96, 165, 250, 0.15) 0%, transparent 60%)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />
        
        {/* Additional soft glow */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '800px',
            height: '500px',
            background: 'radial-gradient(ellipse, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
            filter: 'blur(100px)',
            display: 'flex',
          }}
        />
        
        {/* Content */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <h1
            style={{
              fontSize: 90,
              fontWeight: 'normal',
              color: '#ffffff',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              letterSpacing: '-0.01em',
            }}
          >
            Gustavo Gouveia
          </h1>
          
          <div
            style={{
              width: 100,
              height: 2,
              background: '#3b82f6',
              margin: '36px 0',
              display: 'flex',
            }}
          />
          
          <p
            style={{
              fontSize: 24,
              color: '#9ca3af',
              margin: 0,
              textAlign: 'center',
              fontWeight: 300,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            Engenharia de Software
          </p>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
