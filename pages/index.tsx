import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import beesImg from '../public/bees.jpg'

const hero = <div className={styles.hero}>
  <div className={styles.heroImg} >
    <Image src={beesImg} alt='bees honeycomb' fill/>
  </div>
  <div className={styles.heroBanner}>
    <h1>EDGARBrowser is here</h1>
    <p>Browse XBRL files within EDGAR that has been accepted by the SEC.  XBRL rendering is powered by TeleFacts, an ECKSBEE software. <span className={styles.cta}><Link href='edgarbrowser'>Go</Link></span></p>
  </div>
</div>
const Home: NextPage = () => {
  return (
    <Layout>
      {hero}
    </Layout>
  )
}

export default Home
