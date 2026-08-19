import { ImageResponse } from 'next/og'
import { siteConfig } from '@/config/site'

export const alt = siteConfig.seo.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * Social-Preview-Bild. Wird zur Build-Zeit gerendert und übernimmt Name und
 * Untertitel automatisch aus config/site.ts.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          backgroundColor: '#0e0c0a',
          padding: '0 100px',
        }}
      >
        <div style={{ width: 120, height: 4, backgroundColor: '#c9a96e' }} />
        <div
          style={{
            marginTop: 48,
            fontSize: 104,
            color: '#f7f4ef',
            letterSpacing: '-0.02em',
            lineHeight: 1.05,
          }}
        >
          {siteConfig.person.fullName}
        </div>
        <div
          style={{
            marginTop: 32,
            fontSize: 34,
            color: '#c9a96e',
            letterSpacing: '0.18em',
          }}
        >
          {siteConfig.person.tagline.toUpperCase()}
        </div>
      </div>
    ),
    size,
  )
}
