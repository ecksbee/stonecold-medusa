import { Html, Head, Main, NextScript } from 'next/document'

const description = `ECKSBEE is the powerhouse behind many bleeding-edge XBRL technologies like EDGARBrowser-the popular free tool to search SEC XBRL filings.  Extremely devoted to the cause for the planet's sustainability and human dignity, look no further for here is ECKSBEE.`
export default function Document() {
  return (
    <Html lang="en">
    <Head>
      <meta name="description" property='og:description' content={description} />
      <link rel="icon" href="/logo.jpg" />
    </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
