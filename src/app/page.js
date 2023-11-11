import './home.scss'
import Image from "next/image"

export default function Home() {

  return (
    <div className='flex-row'>
      <div id="first-fold">
        <div id="hasten-logo-tipografico-section">
          <div className='logo-wrapper'>
            <Image src={'/images/png/hasten-logo-tipografico.png'} fill priority alt="Logo tipográfico de Hasten" />
          </div>
          <h1 className='main-title'>REINVENTA EL <span className='basteleur'>C</span>INE</h1>
        </div>
      </div>

      <div id='second-fold' className='flex-col'>
        <div id="persona-quitando-pintura-section">
          <Image src={'/images/png/persona-quitando-pintura_cropped.png'} fill priority alt="Foto de una persona mirando extrañada  ala cámara mientras qiita a pintura de una pared con su mano" />
        </div>

        <div id="claqueta-section">
          <Image src={'/images/png/claqueta_cropped.png'} fill priority alt="Foto de una claqueta de las grabaciones de Hasten" />
        </div>
      </div>
    </div>
  )
}
