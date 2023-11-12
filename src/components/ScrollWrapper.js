'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from "next/image"
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'

export default function ScrollWrapper({ children }) {
    const pathname = usePathname()

    useEffect(() => {
        const container = document.getElementById('main-layout')

        if (container) {
            const handleScroll = (e) => {
                container.scrollLeft += e.deltaY * 10
            }

            container.addEventListener('wheel', handleScroll, { passive: true })

            return () => {
                container.removeEventListener('wheel', handleScroll)
            }
        }
    }, [])

    return (
        <div id='main-layout'>
            <Header currentPage={pathname} />
            <main className='flex-row'>
                <Menu currentPage={pathname} />
                {children}
            </main>
            <div id='bottom-logo'>
                <Link href='/'>
                    <div className='hasten-logo-link'>
                        <Image src={'/images/png/hasten-logo.png'} fill alt="Logo de Hasten" />
                    </div>
                </Link>
            </div>
        </div>
    )
}
