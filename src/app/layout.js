import { fontArchivo, fontAMDAL, fontGrotesk, fontBasteleur, fontGulax } from '/public/fonts/config'
import '@styles/globals.scss'
import ScrollWrapper from '@/components/ScrollWrapper'

export const metadata = {
  title: 'Hasten | Faded Telecast',
  description: 'Hasten es un proyecto de Faded Telecast',
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${fontArchivo.variable} ${fontAMDAL.variable} ${fontGrotesk.variable} ${fontBasteleur.variable}  ${fontGulax.variable}`}>
        <ScrollWrapper>
          {children}
        </ScrollWrapper>
      </body>
    </html>
  )
}

