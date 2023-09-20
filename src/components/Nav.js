import React from 'react'

export default function Nav() {
  return (
    <nav>
        <ul>
          <li>
            <button id="first-button" className="menu-button">
              <a href="">INFO</a>
            </button>
          </li>

          <li>
            <button className="menu-button">
              <a href="">PROMOCIONES</a>
            </button>
          </li>

          <li>
            <button className="menu-button">
              <a href="">FILMMAKERS</a>
            </button>
          </li>

          <li>
            <button className="menu-button">
              <a href="">CANDIDATURA</a>
            </button>
          </li>

          <li>
            <button id="last-button" className="menu-button">
              <a href="">CONTACTO</a>
            </button>
          </li>
        </ul>
      </nav>
  )
}
