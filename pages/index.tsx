import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import heroImg from '../public/hero.png'

const hero = <div className={styles.heroContainer} >
  <div className={styles.hero}>
    <div className={styles.heroImg}>
      <Image src={heroImg} alt="Hot air balloons, cold dark night"/>
    </div>
    <div className={styles.heroTextContainer} >
        <h1 className={styles.title}>
          ECKSBEE:
        </h1>
        <h2 className={styles.title}>
          <a href="https://xbrl.org">XBRL</a> for humanity&apos;s future
        </h2>
        {/* <p className={styles.cta}><Link href='/signup'>Talk to us</Link></p> */}
    </div>
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
