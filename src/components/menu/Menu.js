import './menu.scss';
import Image from "next/image"
import Nav from '@/components/Nav';

export default function Menu() {
  return (
    <aside id="aside-menu" className="flex flex-col">
      <div className="hasten-logo">
        <Image src={'/png/hasten-logo.png'} fill priority alt="Logo de Hasten" />
      </div>

      <div className="aside-spacer"></div>

      <Nav />
    </aside>
  )
}
