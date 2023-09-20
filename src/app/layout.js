'use client'

import { useEffect } from 'react'
import { Inter } from 'next/font/google'

import './globals.scss'
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hasten | Faded Telecast',
  description: 'Hasten es un proyecto de Faded Telecast',
}

export default function RootLayout({ children }) {
  useEffect(() => {
    const container = document.getElementById('main-layout')

    if (container) {
      const handleScroll = (e) => {
        e.preventDefault()
        container.scrollLeft += e.deltaY * 2
      }

      container.addEventListener('wheel', handleScroll)

      return () => {
        container.removeEventListener('wheel', handleScroll)
      }
    }
  }, [])

  return (
    <html lang="es">
      <body>
        <div id='main-layout'>
          <Header />
          <div id='content-container' className='flex-row'>
            <Menu />
            <main>
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}

