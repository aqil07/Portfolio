import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Toggle from '../components/toggle';
import styles from '../styles/Home.module.css';
import Welcome from '../components/welcome';
import Contact from '../components/contactDetails';
import About from '../components/about';
import Experience from '../components/profExp';
import Link from 'next/link';
import { Canvas, useFrame } from '@react-three/fiber';
import { RoundedBox } from '@react-three/drei';


const Home: NextPage = () => {
  function Box(props: any) {
    // This reference will give us direct access to the mesh
    const mesh:any = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x += 0.01))

    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 2, 3]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
    )
  }

  return (
    <>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
      <div id='container' className={styles.container}>
        <Head>
          <title></title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className={styles.pageHeader}>
          <Contact />
          <Toggle />
        </header>
        <div className={styles.welcomeEl}>
          <Welcome />
        </div>
        <main id='main' className={styles.main}>


          <About age />




        </main >



        <footer className={styles.footer} >
          <button className={styles.backToTop} onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            })
          }}>
            Back to Top
          </button>
        </footer>
      </div >
    </>
  )
}

export default Home
