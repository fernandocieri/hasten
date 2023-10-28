import '@styles/home.scss'
import Image from "next/image"

export default function Home() {

  return (
    <div className='flex-row'>
      <div id="first-fold">
        <div id="hasten-logo-tipografico-section">
          <Image src={'/svg/hasten-logo-tipografico.svg'} fill priority alt="Logo tipográfico de Hasten" />
        </div>
      </div>

      <div id='second-fold' className='flex-col'>
        <div id="persona-quitando-pintura-section">
          <Image src={'/jpg/persona-quitando-pintura.jpg'} fill priority alt="Foto de una persona mirando extrañada  ala cámara mientras qiita a pintura de una pared con su mano" />
        </div>

        <div id="claqueta-section">
          <Image src={'/jpg/claqueta.jpg'} fill priority alt="Foto de una claqueta de las grabaciones de Hasten" />
        </div>
      </div>
    </div>
  )
}
