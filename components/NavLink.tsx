import React from 'react'
import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import styles from './../styles/Layout.module.scss'


export interface NavLinkProps extends LinkProps {
    children: React.ReactElement
    activeClass: string
}

export function NavLink({ children, href, ...props }: NavLinkProps) {
    const router = useRouter()

    let className = ''

    if (router.pathname === href) {

        className = `${props.activeClass} selected`
    }

    return <Link href={href}>{React.cloneElement(children, { className: className })}</Link>
}