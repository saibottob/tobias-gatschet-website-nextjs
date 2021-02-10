import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

// Import icons
import {faFacebook, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <header>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>{' '}
                |{' '}
                <Link href="/about">
                    <a>About</a>
                </Link>{' '}
            </nav>
        </header>

        {children}

        <footer>
            <div>
				<a target="_blank" href="https://www.facebook.com/tobias.gatschet"><FontAwesomeIcon icon={faFacebook} /></a>
				<a target="_blank" href="https://twitter.com/saibottob"><FontAwesomeIcon icon={faTwitter} /></a>
				<a target="_blank" href="https://www.linkedin.com/in/tobias-gatschet-396441198/"><FontAwesomeIcon icon={faLinkedin} /></a>
				<a target="_blank" href="https://www.instagram.com/ramziagob/"><FontAwesomeIcon icon={faInstagram} /></a>
				<a target="_blank" href="mailto:gatschet@tobias-gatschet.ch"><FontAwesomeIcon icon={faEnvelope} /></a>
			</div>

			<div>&copy; Tobias Gatschet 2021</div>
        </footer>
    </div>
)

export default Layout