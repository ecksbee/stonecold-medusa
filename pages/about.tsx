
import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import path from 'path'
import fs from 'fs'
import Image from 'next/image'
import markdown from '../lib/markdown'
import Layout from '../components/Layout'
import MdReader from '../components/MdReader'
import styles from '../styles/About.module.css'
import missionImg from '../public/mission.png'
import heroImg from '../public/hero.png'

type Props = {
  content: any 
}

const Home: NextPage<Props> = ({content} : Props) => {
  return (
    <Layout>
      <div className={styles.row1}>
        <div className={styles.leftTall}>
          <Image src={heroImg} alt="Hot air balloons, cold dark night" fill />
        </div>
        <div className={styles.rightTall}>
          <h1><a href="https://xbrl.org">XBRL</a> for humanity&apos;s future</h1>
        </div>
      </div>
      <div className={styles.row2}>
        <div className={styles.left}>
          <h2>Our Mission</h2>
          <p>Enable the proliferation of regulatory disclosure technology in order to help combat climate change and to aid with the eradication of forced labor throughout the world.  ECKSBEE is the powerhouse behind many bleeding-edge XBRL technologies.  Extremely devoted to the cause for the planet&apos;s sustainability and human dignity, look no further for here is ECKSBEE.</p>
        </div>
        <div className={styles.right}>
          <Image src={missionImg} alt='lightbulb filled with small green plant in burnt and dried soil' fill/>
        </div>
      </div>
      <div>
        <MdReader content={content} />
      </div>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (context) => {
  const filePath = path.join(process.cwd(), 'what_is_xbrl_en.md')
  const content = await markdown(fs.readFileSync(filePath, 'utf8'))
  return {
    props: {
      content 
    }
  }
}
export default Home
