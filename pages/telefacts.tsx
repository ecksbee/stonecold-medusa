
import React from 'react'
import type { NextPage } from 'next'
import Image from '../components/Image'
import Layout from '../components/Layout'
import hypercube from '../public/hypercube.svg'

const TeleFactsSpecSheet: NextPage = () => {
    return (
        <Layout>
            <div>
                <h1>TeleFacts</h1>
                <p>
                    TeleFacts is a golang module used to build bleeding-edge XBRL technologies.  
                </p>
                <Image src={hypercube} alt='hypercube or tesseract' height={400} width={400} />
            </div>
            <div>
                <p>
                    When TeleFacts was created, the main goals were: 
                    <ol>
                        <li>
                            XBRL rendering
                        </li>
                        <li>
                            XBRL validation
                        </li>
                    </ol>
                </p>
                <p>
                    Currently, TeleFacts can be deployed with &quot;goldlord-midas&quot; (a solidjs web app) to render XBRL reports with the following XBRL specification compliance:
                    <ul>
                        <li>
                            XBRL 2.1 with no support for the following:
                            <ul>
                                <li>
                                    tuples
                                </li>
                                <li>
                                    precision
                                </li>
                                <li>
                                    general-special arc role
                                </li>
                                <li>
                                    essence-alias arc role
                                </li>
                                <li>
                                    similar-tuples arc role
                                </li>
                                <li>
                                    requires-element arc role
                                </li>
                            </ul>
                        </li>
                        <li>
                            XBRL Dimensions 1.0 (including typedMember and nested hypercubes)
                        </li>
                        <li>
                            Inline XBRL 1.1 with support limited to the following elements:
                            <ul>
                                <li>
                                    nonFraction
                                </li>
                                <li>
                                    nonNumeric
                                </li>
                                <li>
                                    continuation
                                </li>
                            </ul>
                        </li>
                    </ul>
                </p>
                <p>
                    Releases can be found in the following locations:
                    <ul>
                        <li>
                            <a href='https://github.com/ecksbee/telefacts/releases'>TeleFacts</a>
                        </li>
                        <li>
                            <a href='https://github.com/ecksbee/goldlord-midas'>goldlord-midas</a>
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

export default TeleFactsSpecSheet
