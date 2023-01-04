
import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/EdgarBrowser.module.css'
import magnifier from '../public/magnifier.png'

type Props = {
    content: any 
}

const EDGARBrowserSpecSheet: NextPage<Props> = () => {
    return (
        <Layout>
            <div className={styles.banner}>
                <p>
                    EDGARBrowser empowers the XBRL community to interact with the XBRL reports submitted to the US SEC's EDGAR system.
                </p>
                <p>
                    <div className={styles.cta}><a href='https://edgarbrowser.ecksbee.com'><Image src={magnifier} alt='magnifying glass' height={60} width={60} />Browse Now</a></div>
                </p>
            </div>
            <div>
                <p>
                    EDGARBrowser was created to be a free and open-source tool to research XBRL-formatted EDGAR filings.  EDGARBrowser relies on <Link href='telefacts'>TeleFacts</Link> to render the XBRL report.  EDGARBrowser has a back-end web service implemented with a golang docker container.  EDGARBrowser's web user interface is a static-site generated nextjs web app that is codenamed "snakebane-patrick".  The golang docker container consumes the US SEC's EDGAR APIs to retrieve the XBRL-formatted filings.
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
