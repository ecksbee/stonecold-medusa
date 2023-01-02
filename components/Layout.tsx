import React from "react"
import Head from "next/head"
import { useRouter } from "next/router"
import Image from "next/image"
import Link from "next/link"
import CookieBanner from "./CookieBanner"
import { PropsWithChildren } from "react"
import logo from "../public/logo.jpg"

const tagline = "XBRL for humanity's future"
const Wrapper = ({ children }: PropsWithChildren<{}>): JSX.Element => {
  const router = useRouter()
  let brandHref = "/about_us"
  if (router.pathname === "/about_us") {
    brandHref = "/"
  }
  return (
    <>
      <div className="container">
        <Head>
          <title>{`ECKSBEE | ${tagline}`}</title>
          <meta name="description" content={tagline} />
          <link rel="icon" href="/logo.jpg" />
        </Head>
        {children}
      </div>
      <footer>
        <p>
          <Link href={brandHref}>
              <div className="logo">
                <Image src={logo} alt="ECKSBEE Logo" width={79} height={61} />
              </div>
              <div className="speech-bubble">
                <div className="left-point"></div>
                <div className="dialog-1">Click here to learn more!</div>
              </div>
          </Link>
          <div className="copyright">
            {"© 2022-" + new Date().getFullYear() + " ECKSBEE LLC. All rights reserved."}
          </div>
        </p>
      </footer>
      <CookieBanner />
    </>
  )
}

export default Wrapper
