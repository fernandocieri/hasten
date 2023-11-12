import { fontArchivo, fontAMDAL, fontGrotesk, fontBasteleur, fontGulax } from '/public/fonts/config'
import '@styles/globals.scss'
import ScrollWrapper from '@/components/ScrollWrapper'

const metaTitle = "HASTEN | Colectividad Cinematográfica y Experimentación Creativa";
const metaDescription = "Únete a HASTEN, el proyecto que redefine la colaboración en el cine a través del juego del 'Cadáver Exquisito'. Cuatro filmmakers por temporada desafían la perfección, abrazando el fallo para aprender y crear una serie fílmica única. Experimenta el arte sin presiones, donde la creatividad fluye libremente."
export const metadata = {
  title: metaTitle,
  description: metaDescription,
  images: ['/hasten-logo.png'],
  openGraph: {
    title: metaTitle,
    description: metaDescription,
    images: ['/hasten-logo.png']
  }
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

