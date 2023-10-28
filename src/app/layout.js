import '@styles/globals.scss'
import ScrollWrapper from '@/components/ScrollWrapper'

export const metadata = {
  title: 'Hasten | Faded Telecast',
  description: 'Hasten es un proyecto de Faded Telecast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <ScrollWrapper>
          {children}
        </ScrollWrapper>
      </body>
    </html>
  )
}

