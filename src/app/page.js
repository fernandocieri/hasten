import '@styles/home.scss'
import Image from "next/image"

export default function Home() {

  return (
    <div className='flex-row'>
      <div id="first-fold">
        <div id="hasten-logo-tipografico-section">
          <Image src={'/png/hasten-logo-tipografico.png'} fill priority alt="Logo tipográfico de Hasten" />
        </div>
      </div>

      <div id='second-fold' className='flex-col'>
        <div id="persona-quitando-pintura-section">
          <Image src={'/png/persona-quitando-pintura_cropped.png'} fill priority alt="Foto de una persona mirando extrañada  ala cámara mientras qiita a pintura de una pared con su mano" />
        </div>

        <div id="claqueta-section">
          <Image src={'/png/claqueta_cropped.png'} fill priority alt="Foto de una claqueta de las grabaciones de Hasten" />
        </div>
      </div>
    </div>
  )
}
