
import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/EdgarBrowser.module.css'
import magnifier from '../public/magnifier.png'

const EDGARBrowserSpecSheet: NextPage = () => {
    return (
        <Layout>
            <div className={styles.banner}>
                <h1>EDGARBrowser</h1>
                <p>
                    EDGARBrowser empowers the XBRL community to interact with the XBRL reports submitted to the US SEC&apos;s EDGAR system.
                </p>
                <p>
                    <div className={styles.cta}><a href='https://edgarbrowser.com'><Image src={magnifier} alt='magnifying glass' height={60} width={60} />Browse Now</a></div>
                </p>
            </div>
            <div>
                <p>
                    EDGARBrowser was created to be a free and open-source tool to research XBRL-formatted EDGAR filings.  EDGARBrowser relies on <Link href='telefacts'>TeleFacts</Link> to render the XBRL report.  EDGARBrowser has a back-end web service implemented with a golang docker container.  EDGARBrowser&apos;s web user interface is a static-site generated nextjs web app that is codenamed &quot;snakebane-patrick&quot;.  The golang docker container consumes the US SEC&apos;s EDGAR APIs to retrieve the XBRL-formatted filings.
                </p>
                <p>
                    EDGARBrowser can browse historical EDGAR filings as far back as 2016.  EDGARBrowser&apos;s XBRL renderer has only been tested to as far back as 2016 where XBRL 2.1, XBRL Dimension 1.0, and UTF8 encoding are known to be used.
                </p>
                <p>
                    Releases can be found in the following locations:
                    <ul>
                        <li>
                            <a href='https://github.com/ecksbee/telefacts-sec/releases'>EDGARBrowser</a>
                        </li>
                        <li>
                            <a href='https://github.com/ecksbee/snakebane-patrick/releases'>snakebane-patrick</a>
                        </li>
                    </ul>
                </p>
                <p>
                    If there is feedback or request for support, send them via email: contact@ecksbee.com
                </p>
            </div>
        </Layout>
    )
}

export default EDGARBrowserSpecSheet
