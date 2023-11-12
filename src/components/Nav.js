import Link from 'next/link'

export default function Nav({ currentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/info">
            <button id="first-button" className={`menu-button ${currentPage === '/info' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
              INFO
            </button>
          </Link>
        </li>

        <li>
          <Link href="/promociones">
            <button className={`menu-button ${currentPage === '/promociones' ? 'active-link' : ''}`} disabled={currentPage === '/promociones' ? true : false}>
              PROMOCIONES
            </button>
          </Link>
        </li>

        {/* <li>
          <Link href="/filmmakers">
            <button className={`menu-button ${currentPage === '/filmmakers' ? 'active-link' : ''}`} disabled={currentPage === '/filmmakers' ? true : false}>
              FILMMAKERS
            </button>
          </Link>
        </li> */}

        <li>
          <Link href="/candidatura">
            <button className={`menu-button ${currentPage === '/candidatura' ? 'active-link' : ''}`} disabled={currentPage === '/candidatura' ? true : false}>
              CANDIDATURA
            </button>
          </Link>
        </li>

        <li>
          <Link href="/contacto">
            <button id="last-button" className={`menu-button ${currentPage === '/contacto' ? 'active-link' : ''}`} disabled={currentPage === '/contacto' ? true : false}>
              CONTACTO
            </button>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
