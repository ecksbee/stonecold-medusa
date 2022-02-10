
import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import missionImg from '../public/mission.png'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.mission}>
        <h1>Our Mission</h1>
        <p>Enable the proliferation of regulatory disclosure technology in order to help combat climate change and to aid with the eradication of forced labor throughout the world.</p>
      </div>
      <div className={styles.image}>
        <Image src={missionImg} alt='lightbulb filled with small green plant in burnt and dried soil'></Image>
      </div>
    </Layout>
  )
}

export default Home
