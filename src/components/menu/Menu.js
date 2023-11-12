import './menu.scss';
import Image from "next/image"
import Link from 'next/link'
import Nav from '@/components/Nav';

export default function Menu({ currentPage }) {
  return (
    <aside id="aside-menu" className="flex-col">
      <div className='hasten-logo'>
        <Link href='/'>
          <div className='hasten-logo-link' >
            <Image src={'/images/png/hasten-logo.png'} fill alt="Logo de Hasten" />
          </div>
        </Link>
      </div>

      <div className="aside-spacer"></div>

      <Nav currentPage={currentPage} />
    </aside>
  )
}
