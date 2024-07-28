import { useEffect } from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import type { AppProps } from 'next/app'

const tagline = "XBRL for humanity's future"
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/stalewhilerevalidate.js')
        .then((registration) => console.log('scope is: ', registration.scope));
    }
  }, []);
  return <>
    <Head>
      <title>{tagline}</title>
      <meta name='title' property='og:title' content={tagline} />
      <meta name='type' property='og:type' content='website' />
      <meta name='image' property='og:image' content='https://ecksbee.com/logo.jpg' />
      <meta name='url' property='og:url' content='https://ecksbee.com' />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
