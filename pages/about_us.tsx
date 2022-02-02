
import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/About.module.css'
import missionImg from '../public/mission.png'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.padded}>
            <h1>Our Mission</h1>
            <p>Enable the proliferation of regulatory disclosure technology in order to help combat climate change and the eradication of forced labor throughout the world.</p>
            <div>
              <Image src={missionImg} ></Image>
            </div>
      </div>
    </Layout>
  )
}

export default Home
