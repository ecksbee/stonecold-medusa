
import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import path from 'path'
import fs from 'fs'
import Layout from '../components/Layout'
import markdown from '../lib/markdown'

type Props = {
    content: any 
}

const Cookie: NextPage<Props> = ({content} : Props) => {
    return (
        <Layout>
            <div className='padded' dangerouslySetInnerHTML={{__html: content}} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const filePath = path.join(process.cwd(), 'cookie_en.md')
    const content = await markdown(fs.readFileSync(filePath, 'utf8'))
    return {
      props: {
        content 
      }
    }
}
export default Cookie
