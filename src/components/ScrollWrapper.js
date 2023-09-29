'use client'

import { useEffect } from 'react'
import Image from "next/image"
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'

export default function ScrollWrapper({ children }) {

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
            <Header />
            <main className='flex-row'>
                <Menu />
                {children}
            </main>
            <div id='bottom-logo'>
                <Image src={'/png/hasten-logo.png'} fill priority alt="Logo de Hasten" />
            </div>
        </div>
    )
}
