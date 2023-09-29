import React from 'react'

export default function Nav({ currentPage }) {
  return (
    <nav>
      <ul>
        <li>
          <button id="first-button" className={`menu-button ${currentPage === '/info' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
            <a href="/info">INFO</a>
          </button>
        </li>

        <li>
          <button className={`menu-button ${currentPage === '/promociones' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
            <a href="/promociones">PROMOCIONES</a>
          </button>
        </li>

        <li>
          <button className={`menu-button ${currentPage === '/filmmakers' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
            <a href="/filmmakers">FILMMAKERS</a>
          </button>
        </li>

        <li>
          <button className={`menu-button ${currentPage === '/candidatura' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
            <a href="/candidatura">CANDIDATURA</a>
          </button>
        </li>

        <li>
          <button id="last-button" className={`menu-button ${currentPage === '/contacto' ? 'active-link' : ''}`} disabled={currentPage === '/info' ? true : false}>
            <a href="/contacto">CONTACTO</a>
          </button>
        </li>
      </ul>
    </nav>
  )
}
