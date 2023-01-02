import React from "react"
import Link from "next/link"
import CookieBanner from "./CookieBanner"
import { PropsWithChildren } from "react"
import logo from "../public/logo.jpg"
import styles from './Layout.module.css'

const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  return (
    <>
      <nav className={styles.navBar}>
        <h1 className={styles.Brand}>
          <img src={logo.src} alt="ECKSBEE Logo" width={64.1} height={49.5} />
          <Link href='/'>ECKSBEE</Link>
        </h1>
      </nav>
      <div className={styles.container}>
        {children}
        <footer className={styles.footer}>
          <div className={styles.footerNav}>
            <div className={styles.footerList}>
              <h1>ECKSBEE</h1>
              <ul>
                <li><Link href='about'><h2>About</h2></Link></li>
                <li><a href='https://github.com/ecksbee'><h2>Github</h2></a></li>
                <li><a href='https://linkedin.com/company/ecksbee'><h2>LinkedIn</h2></a></li>
              </ul>
            </div>
            <div className={styles.footerList}>
              <h1>Legal</h1>
              <ul>
                <li><Link href='privacy'><h2>Privacy</h2></Link></li>
                <li><Link href='cookies'><h2>Cookies</h2></Link></li>
              </ul>
            </div>
          </div>
          <p className={styles.copyright}>
              {"© 2022-" + new Date().getFullYear() + " ECKSBEE LLC. All rights reserved."}
          </p>
        </footer>
      </div>
      <CookieBanner />
    </>
  )
}

export default Wrapper
