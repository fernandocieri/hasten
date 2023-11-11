import Link from 'next/link'
import './info.scss'

export default function Info() {
  return (
    <section id="info">
      <h2 className='amdal'>REINVENTA EL <span className='basteleur'>C</span>INE</h2>

      <div className='flex-row info-container'>
        <div className='flex-col'>
          <div className='orange-bubble content-bubble-1'>
            <p>
              <span className='gulax hasten-mention'>HASTEN</span> sigue las reglas del <span className='basteleur'>CADÁVER EXQUISITO</span>. Se eligen a 4 filmmakers: profesionales, no profesionales, guionistas que quieren probar a dirigir, directores dedicados al cine experimental o aquellos centrados en el video-arte.
            </p>
          </div>

          <div className='orange-bubble content-bubble-2'>
            <p>
              Cada temporada tiene cuatro filmmakers que exploran la colectividad del cine y experimentando con un proyecto que esta basado en el fallo (debido al poco tiempo y recursos), creando así un laboratorio fílmico.
            </p>
          </div>

          <button className='cta-bubble cta-1'>
            <Link href='/candidatura'>
              ¡QUIERO PARTICIPAR!
            </Link>
          </button>
        </div>

        <div className='flex-col'>
          <div className='orange-bubble content-bubble-3'>
            <p>
              A los filmmakers seleccionados, mediante una tómbola de episodios, se les repartirá un episodio a cada uno. A partir de ese momento, el filmmaker que obtuvo el primer episodio tendrá una semana para grabar y montar un rough cut (primer corte de montaje o corte provisional) para enviarle al que le toque el segundo capítulo. El segundo filmmaker, tendrá una semana para rodar su capítulo en base a lo que el primer filmmaker haya realizado. Creando así, una serie colectiva.
            </p>
          </div>

          <div className='orange-bubble content-bubble-4'>
            <p>
              La serie intenta ser un espacio seguro para intentar, para realizar proyectos sin una presión superior. Es un sitio donde se permite el fallo, donde se aprende haciendo y se pierde el bloqueo por el perfeccionismo.
            </p>
          </div>

          <div className='circle no-button' />
        </div>

        <div className='purple-elements-container flex-col'>
          <button className='cta-bubble cta-2'>
            <Link href='/candidatura'>
              ¡QUIERO PARTICIPAR!
            </Link>
          </button>

          <div className='circle' />
        </div>
      </div>
    </section>
  )
}
