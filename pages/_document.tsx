import { Html, Head, Main, NextScript } from 'next/document'

const tagline = "XBRL for humanity's future.  That is the sole purpose of ECKSBEE."
export default function Document() {
  return (
    <Html lang="en">
    <Head>
      <meta name="description" content={tagline} />
      <link rel="icon" href="/logo.jpg" />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
