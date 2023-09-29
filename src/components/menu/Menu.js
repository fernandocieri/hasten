import './menu.scss';
import Image from "next/image"
import Nav from '@/components/Nav';

export default function Menu() {
  return (
    <aside id="aside-menu" className="flex-col">
      <div className="hasten-logo">
        <a href='/'>
          <Image src={'/png/hasten-logo.png'} fill alt="Logo de Hasten" />
        </a>
      </div>

      <div className="aside-spacer"></div>

      <Nav />
    </aside>
  )
}
