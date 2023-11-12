import Link from 'next/link'
import './contact.scss'

export default function Contact() {
    return (
        <section id='contact'>
            <h2 className='main-title'>REINVENTA EL <span className='basteleur'>C</span>INE</h2>
            <nav className='contact-board'>
                <h3 className='contact-board-element'>CORREOS</h3>
                <ul className='flex-col'>
                    <li className='contact-link-wrapper flex-row'>
                        <Link className='contact-link contact-board-element' href='mailto:info@hastenftc.com' target='_blank'>
                            INFO@HASTENFTC.COM
                        </Link>
                        <h4 className='contact-link link-title contact-board-element'>
                            INFORMACIÓN
                        </h4>
                    </li>

                    <li className='contact-link-wrapper flex-row'>
                        <Link className='contact-link contact-board-element' href='mailto:tech@hastenftc.com' target='_blank'>
                            TECH@HASTENFTC.COM
                        </Link>
                        <h4 className='contact-link link-title contact-board-element'>
                            AYUDA CON WEB
                        </h4>
                    </li>

                    <li className='contact-link-wrapper flex-row'>
                        <Link className='contact-link contact-board-element' href='mailto:press@hastenftc.com' target='_blank'>
                            PRESS@HASTENFTC.COM
                        </Link>
                        <h4 className='contact-link link-title contact-board-element'>
                            PRESS / COMUNICACIÓN
                        </h4>
                    </li>

                    <li className='contact-link-wrapper flex-row'>
                        <Link className='contact-link social-media-link contact-board-element' href='https://www.instagram.com/hasten_ftc/' target='_blank'>
                            INSTAGRAM
                        </Link>
                        <Link className='contact-link social-media-link link-title contact-board-element' href='https://www.linkedin.com/company/hastenftc/' target='_blank'>
                            LINKEDIN
                        </Link>
                    </li>
                </ul>
            </nav>
        </section>
    )
}
