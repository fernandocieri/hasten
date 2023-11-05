export default function Nav({ currentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <a href="/info">
            <button id="first-button" className={`menu-button ${currentPage === '/info' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
              INFO
            </button>
          </a>
        </li>

        <li>
          <a href="/promociones">
            <button className={`menu-button ${currentPage === '/promociones' ? 'active-link' : ''}`} disabled={currentPage === '/promociones' ? true : false}>
              PROMOCIONES
            </button>
          </a>
        </li>

        <li>
          <a href="/filmmakers">
            <button className={`menu-button ${currentPage === '/filmmakers' ? 'active-link' : ''}`} disabled={currentPage === '/filmmakers' ? true : false}>
              FILMMAKERS
            </button>
          </a>
        </li>

        <li>
          <a href="/candidatura">
            <button className={`menu-button ${currentPage === '/candidatura' ? 'active-link' : ''}`} disabled={currentPage === '/candidatura' ? true : false}>
              CANDIDATURA
            </button>
          </a>
        </li>

        <li>
          <a href="/contacto">
            <button id="last-button" className={`menu-button ${currentPage === '/contacto' ? 'active-link' : ''}`} disabled={currentPage === '/contacto' ? true : false}>
              CONTACTO
            </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}
