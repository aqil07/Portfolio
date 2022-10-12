import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import Toggle from '../components/toggle'
import styles from '../styles/Home.module.css'
import Welcome from '../components/welcome'

const Home: NextPage = () => {

  // const win = useRef();
  // console.log('w',win);


  return (
    <div className={styles.container}>
      <Head>
        <title></title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toggle />
      <main className={styles.main}>
        
        <div className={styles.welcomeEl}>
          <Welcome />
        </div>
        <div className={styles.grid}>
          <a className={styles.card}>
            <h2>Page 1 &rarr;</h2>
            <p>sample info</p>
          </a>

          <a className={styles.card}>
            <h2>Learn &rarr;</h2>
            <p>Learn </p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover.</p>
          </a>

          <a
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your Next.js site to a public URL with Vercel.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
