import localFont from 'next/font/local'

const fontArchivo = localFont({
    src: [
        {
            path: '/archivo/Archivo-Regular.ttf',
            weight: '400',
            style: 'normal',
            display: 'swap',
        },
        {
            path: '/archivo/Archivo-Bold.ttf',
            weight: '700',
            style: 'normal',
            display: 'swap',
        },
    ],
    variable: '--font-archivo'
})

const fontAMDAL = localFont({
    src: [
        {
            path: '/amdal/AMDAL-Regular.woff2',
            weight: '400',
            style: 'normal',
            display: 'swap',
        }
    ],
    variable: '--font-AMDAL'
})

const fontGrotesk = localFont({
    src: [
        {
            path: '/grotesk/Grotesk-Regular.woff2',
            weight: '400',
            style: 'normal',
            display: 'swap',
        }
    ],
    variable: '--font-grotesk'
})

const fontBasteleur = localFont({
    src: [
        {
            path: '/basteleur/Basteleur-Moonlight.woff2',
            weight: '400',
            style: 'normal',
            display: 'swap',
        },
        {
            path: '/basteleur/Basteleur-Bold.woff2',
            weight: '700',
            style: 'normal',
            display: 'swap',
        },
    ],
    variable: '--font-basteleur'
})

const fontGulax = localFont({
    src: [
        {
            path: '/gulax/Gulax-Regular.woff2',
            weight: '400',
            style: 'normal',
            display: 'swap',
        }
    ],
    variable: '--font-gulax'
})

export { fontArchivo, fontAMDAL, fontGrotesk, fontBasteleur, fontGulax }