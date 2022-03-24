import React from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import logo from '../public/logo.jpg'

const tagline = "XBRL for humanity's future"
const CookieBanner = () : JSX.Element | null => {
  const [understood, setUnderstood] = React.useState(false)
  if (understood) {
    return null
  }
  if (typeof window === 'undefined') {
    return null
  }
  const consentKey = 'ECKSBEE.cookie.consent'
  const sevenDays = 7*24*60*60*1000
  const consentValue = window.localStorage.getItem(consentKey)
  const consentTime: number = consentValue? +consentValue : Date.now() - sevenDays - 1000
  if(Date.now() - consentTime > sevenDays){
    return <div className='cookie'>
      <p>Our website uses cookies.  By continuing to use our website, you are granting us permission to deploy our cookies as detailed in our <Link href='/privacy'>privacy</Link> and <Link href='/cookie'>cookie</Link> policy.</p>
      <button className='btnCookie' onClick={e => {
        window.localStorage.setItem(consentKey, Date.now().toString())
        setUnderstood(true)
      }}>Understood</button>
    </div>
  }
  return null
}
const Wrapper = ({children}: PropsWithChildren<{}>) : JSX.Element => {
  const router = useRouter()
  let brandHref = '/about_us'
  if (router.pathname === '/about_us') {
    brandHref = '/'
  }
  return (
    <>
      <div className='container'>
        <Head>
          <title>{`ECKSBEE | ${tagline}`}</title>
          <meta name="description" content={tagline} />
          <link rel="icon" href="/logo.jpg" />
        </Head>
        {children}
      </div>
      <footer>
        <div>
          <p>
          <span className='brand'>
            <Link href={brandHref}>
              <a>
                <div className='about-text'>Learn more!</div>
                <Image src={logo} alt="ECKSBEE Logo" width={79} height={61} />
              </a>
            </Link>
          </span>
          {'© 2022 ECKSBEE LLC. All rights reserved.'}
          </p>
        </div>
      </footer>
      <CookieBanner />
    </>
  )
}

export default Wrapper
