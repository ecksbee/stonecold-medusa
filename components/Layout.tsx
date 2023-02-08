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
        <span className={styles.Brand}>
          <img src={logo.src} alt="ECKSBEE Logo" width={64.1} height={49.5} />
          <Link href='/'>ECKSBEE</Link>
        </span>
      </nav>
      <div className={styles.container}>
        {children}
        <footer className={styles.footer}>
          <div className={styles.footerNav}>
            <div className={styles.footerList}>
              <h2>ECKSBEE</h2>
              <ul>
                <li><Link href='about'>About</Link></li>
                <li><Link href='telefacts'>TeleFacts</Link></li>
                <li><Link href='edgarbrowser'>EDGARBrowser</Link></li>
              </ul>
            </div>
            <div className={styles.footerList}>
              <h2>Connect With Us</h2>
              <ul>
                <li><a href='https://github.com/ecksbee'>Github</a></li>
                <li><a href='https://linkedin.com/company/ecksbee'>LinkedIn</a></li>
              </ul>
            </div>
            <div className={styles.footerList}>
              <h2>Legal</h2>
              <ul>
                <li><Link href='privacy'>Privacy</Link></li>
                <li><Link href='cookies'>Cookies</Link></li>
              </ul>
            </div>
          </div>
          <p className={styles.copyright}>
              {"© 2022-" + new Date().getFullYear() + " ECKSBEE LLC. All rights reserved. ECKSBEE LLC is not affiliated, associated, endorsed by, or in any way officially connected with the U.S. Securities and Exchange Commission (SEC). The name EDGAR as well as names, marks, emblems and images of issuers are registered trademarks of their respective owners."}
          </p>
        </footer>
      </div>
      <CookieBanner />
    </>
  )
}

export default Wrapper
