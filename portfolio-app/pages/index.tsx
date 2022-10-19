import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import Toggle from '../components/toggle';
import styles from '../styles/Home.module.css';
import Welcome from '../components/welcome';
import Contact from '../components/contactDetails';
import About from '../components/about';
import Experience from './profExp';
import Link from 'next/link';


const Home: NextPage = () => {
  useEffect(() => {


    console.log(screen.orientation);
  })

  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.pageHeader}>
        <Contact />
        <Toggle />
      </div>
      <div className={styles.welcomeEl}>
        <Welcome />
      </div>
      <main className={styles.main}>


        <About age />


      

      </main >



    </div >
  )
}

export default Home
