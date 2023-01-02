
import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import missionImg from '../public/mission.png'
import heroImg from '../public/hero.png'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.row}>
        <div className={styles.leftTall}>
          <Image src={heroImg} alt="Hot air balloons, cold dark night" fill />
        </div>
        <div className={styles.rightTall}>
          <h1><a href="https://xbrl.org">XBRL</a> for humanity&apos;s future</h1>
        </div>
      </div>
      <div className={styles.row}>
        <div className={styles.left}>
          <h1>Our Mission</h1>
          <p>Enable the proliferation of regulatory disclosure technology in order to help combat climate change and to aid with the eradication of forced labor throughout the world.</p>
        </div>
        <div className={styles.right}>
          <Image src={missionImg} alt='lightbulb filled with small green plant in burnt and dried soil' fill/>
        </div>
      </div>
    </Layout>
  )
}

export default Home
