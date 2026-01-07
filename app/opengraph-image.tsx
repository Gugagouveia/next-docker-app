import { ImageResponse } from 'next/og'
 
export const runtime = 'edge'
 
export const alt = 'Gustavo Gouveia — Desenvolvedor Full Stack'
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
          background: '#09090b',
          position: 'relative',
        }}
      >

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(ellipse 60% 50% at 20% 30%, rgba(99, 102, 241, 0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 60%, rgba(168, 85, 247, 0.12) 0%, transparent 60%)',
            filter: 'blur(60px)',
            display: 'flex',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '700px',
            height: '400px',
            background: 'radial-gradient(ellipse, rgba(99, 102, 241, 0.08) 0%, transparent 70%)',
            filter: 'blur(80px)',
            display: 'flex',
          }}
        />

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `linear-gradient(rgba(99, 102, 241, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
            display: 'flex',
            opacity: 0.3,
          }}
        />

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            padding: '0 60px',
          }}
        >

          <div
            style={{
              width: 80,
              height: 80,
              background: '#6366f1',
              borderRadius: 16,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: 48,
              fontWeight: 'bold',
              color: '#ffffff',
              marginBottom: 32,
            }}
          >
            G
          </div>
          
          <h1
            style={{
              fontSize: 80,
              fontWeight: 'bold',
              color: '#ffffff',
              margin: 0,
              padding: 0,
              textAlign: 'center',
              letterSpacing: '-0.02em',
            }}
          >
            Gustavo <span style={{ color: '#6366f1' }}>Gouveia</span>
          </h1>
          
          <p
            style={{
              fontSize: 28,
              color: '#a1a1aa',
              margin: '24px 0 0 0',
              textAlign: 'center',
              fontWeight: 400,
              maxWidth: '800px',
              lineHeight: 1.4,
            }}
          >
            Desenvolvedor Full Stack · TypeScript · React · Next.js · Node.js
          </p>
          

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 12,
              marginTop: 40,
            }}
          >
            <div style={{ width: 40, height: 2, background: '#6366f1', display: 'flex' }} />
            <span style={{ color: '#6366f1', fontSize: 18, fontFamily: 'monospace' }}>gustavogouveia.tech</span>
            <div style={{ width: 40, height: 2, background: '#6366f1', display: 'flex' }} />
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}
