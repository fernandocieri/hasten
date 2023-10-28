import './info.scss'

export default function Info() {
  return (
    <section id="info">
        <h2>REINVENTA EL CINE</h2>

      <div className='flex-row info-container'>
        <div className='flex-col'>
          <div className='orange-bubble content-bubble-1'></div>

          <div className='orange-bubble content-bubble-2'></div>

          <button className='cta-bubble cta-1'>
            <a href='/candidatura'>
              ¡QUIERO PARTICIPAR!
            </a>
          </button>
        </div>

        <div className='flex-col'>
          <div className='orange-bubble content-bubble-3'></div>
          <div className='orange-bubble content-bubble-4'></div>

          <div className='circle no-button' />
        </div>

        <div className='purple-elements-container flex-col'>
          <button className='cta-bubble cta-2'>
            <a href='/candidatura'>
              ¡QUIERO PARTICIPAR!
            </a>
          </button>

          <div className='circle' />
        </div>
      </div>
    </section>
  )
}
