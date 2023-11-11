import './promotions.scss'

export default function Promotions() {
  const promotionsData = [
    {
      title: 'PRIMERA PORMOCIÓN.',
      description: 'USO DE ACTOR RECURRENTE: RICARDO MAGAZÚ'
    },
    {
      title: 'SEGUNDA PORMOCIÓN.',
      description: 'USO DE DISTINTAS POSIBILIDADES Y TÉCNICAS FÍLMICAS (INCLUSIÓN DEL CINE DOCUMENTAL, CINE EXPERIMENTAL)'
    },
    {
      title: 'TERCERA PORMOCIÓN.',
      description: 'DIRECTORES/ FILMMAKERS DE OTROS PAÍSES, INCLUYENDO: ALEMANIA, IRLANDA'
    },
    {
      title: 'CUARTA PORMOCIÓN.',
      description: 'OCHO CAPITULOS EN VEZ DE CUATRO, LOS DIRECTORES REALIZAN DOS CAPITULOS.'
    },
    {
      title: 'QUINTA PORMOCIÓN.',
      description: 'LOS DIRECTORES SE AUTOPRODUCEN ENTRE SÍ. ADEMÁS, UN EX DIRECTOR DE HASTEN SE AÑADE A MITAD DE TEMPORADA'
    }
  ];

  return (
    <section id="promotions">
      <div className="promotion-cards-container flex-row">

        {promotionsData.map((promotion, index) => <div className='promotion-card'>
          <div className='card-inner'>
            <div className="card-front flex-row">
              <h2>
                {index += 1}
              </h2>
            </div>
            <div className="card-back flex-col">
              <h3>
                {promotion.title}
              </h3>
              <p>
                {promotion.description}
              </p>
            </div>
          </div>
        </div>)
        }

        <div className='circle first-ellipsis' />
        <div className='circle' />
        <div className='circle' />
      </div>
    </section>
  )
}
