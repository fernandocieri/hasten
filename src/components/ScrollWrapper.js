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
                e.preventDefault()
                container.scrollLeft += e.deltaY * 10
            }

            container.addEventListener('wheel', handleScroll)

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
                    <Image src={'/images/png/hasten-logo.png'} fill alt="Logo de Hasten" />
                </Link>
            </div>
        </div>
    )
}
