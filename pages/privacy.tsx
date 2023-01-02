
import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import path from 'path'
import fs from 'fs'
import Layout from '../components/Layout'
import markdown from '../lib/markdown'
import MdReader from '../components/MdReader'

type Props = {
    content: any 
}

const Privacy: NextPage<Props> = ({content} : Props) => {
    return (
        <Layout>
          <MdReader content={content} />
        </Layout>
    )
}

export const getStaticProps: GetStaticProps = async (context) => {
    const filePath = path.join(process.cwd(), 'privacy_en.md')
    const content = await markdown(fs.readFileSync(filePath, 'utf8'))
    return {
      props: {
        content 
      }
    }
}
export default Privacy
