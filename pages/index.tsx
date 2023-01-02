import React from 'react'
import type { NextPage } from 'next'
import Image from 'next/image'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import heroImg from '../public/hero.png'

const hero = <div className={styles.carousel} >
  
</div>
const Home: NextPage = () => {
  return (
    <Layout>
      {hero}
    </Layout>
  )
}

export default Home
