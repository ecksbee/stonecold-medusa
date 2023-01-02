
import React from 'react'
import type { NextPage } from 'next'
import Layout from '../components/Layout'

type Props = {
    content: any 
}

const NotFound: NextPage<Props> = () => {
    return (
        <Layout>
            <div style={{
                textAlign: 'center',
                height: '50vh',
                width: '100vw',
            }}>
                <p>
                    404 - Page not found
                </p>
            </div>
        </Layout>
    )
}

export default NotFound
