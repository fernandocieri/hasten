'use client'

import { useEffect } from 'react'
import Header from '@/components/header/Header'
import Menu from '@/components/menu/Menu'

export default function ScrollWrapper({ children }) {

    useEffect(() => {
        const container = document.getElementById('main-layout')

        if (container) {
            const handleScroll = (e) => {
                e.preventDefault()
                container.scrollLeft += e.deltaY * 1.5
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
        </div>
    )
}
