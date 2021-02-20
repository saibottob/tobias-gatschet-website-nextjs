import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'

// Import icons
import {faFacebook, faInstagram, faTwitter, faLinkedin} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// Style
import styles from './../styles/Layout.module.scss'

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'Tobias Gatschet' }: Props) => {

    const router = useRouter()

    const ifActiveClass = (href: string): string => {
        if (href === router.pathname) {
            return 'active'
        } else {
            return ''
        }
    }

    return (
        <div className={styles['main-wrapper']}>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>

            <header>
                <nav className={styles.navigation}>
                    <div className={styles[ifActiveClass('/')]}>
                        <Link href="/">
                            <a>Über mich</a>
                        </Link>
                    </div>

                |
                <div className={styles[ifActiveClass('/politik')]}>
                    <Link href="/politik">
                        <a>Politik</a>
                    </Link>
                </div>
                |
                <div className={styles[ifActiveClass('/job')]}>
                    <Link href="/job">
                        <a>Berufserfahrung / Ausbildung</a>
                    </Link>
                </div>
                |
                <div className={styles[ifActiveClass('/kontakt')]}>
                    <Link href="/kontakt">
                        <a>Kontakt</a>
                    </Link>
                </div>
                </nav>
            </header>

            {children}

            <footer className={styles.footer}>
                <div className={styles.footer_social_media}>
                    <a target="_blank" href="https://www.facebook.com/tobias.gatschet"><FontAwesomeIcon icon={faFacebook} /></a>
                    <a target="_blank" href="https://twitter.com/saibottob"><FontAwesomeIcon icon={faTwitter} /></a>
                    <a target="_blank" href="https://www.linkedin.com/in/tobias-gatschet-396441198/"><FontAwesomeIcon icon={faLinkedin} /></a>
                    <a target="_blank" href="https://www.instagram.com/ramziagob/"><FontAwesomeIcon icon={faInstagram} /></a>
                    <a target="_blank" href="mailto:gatschet@tobias-gatschet.ch"><FontAwesomeIcon icon={faEnvelope} /></a>
                </div>
                <div className={styles.footer_personal_info}>&copy; Tobias Gatschet 2021</div>
            </footer>
        </div>
    )
}

export default Layout