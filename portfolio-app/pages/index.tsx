
import { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import styles from './componentStyles/Home.module.css';
// import SphereGeo from '../threeJS/sphere';
// import Stars from '../threeJS/stars';
// import { Canvas, } from '@react-three/fiber';
// import { Loader, PresentationControls } from '@react-three/drei';
import { delay, motion } from 'framer-motion';
import Skills from './skills';
import { contactImageSchema, skillSchema } from '../utils/types';
import { createClient } from 'next-sanity';
import Contact from './components/contactDetails';


type Props = {
}



export default function Home({  }: Props) {



  let canvas: any = useRef();

  const about: any = useRef();
  const work: any = useRef();

  return (

    <>

      {
      /* <div ref={canvas} className={styles.canvas}>
        <Canvas id='canvasMain' frameloop='always' camera={{ position: [5, 0, 0], fov: 50 }}>
          <Suspense fallback={null}>
            <directionalLight position={[10, 20, 20]} intensity={1} color={0xfffff} />
            <PresentationControls
              enabled={true} // the controls can be disabled by setting this to false
              global={true} // Spin globally or by dragging the model
              cursor={true} // Whether to toggle cursor style on drag
              snap={{ mass: 4, tension: 1500, friction: 50 }} // Snap-back to center (can also be a spring config)
              speed={1} // Speed factor
              zoom={1} // Zoom factor when half the polar-max is reached
              rotation={[0, 0, 0.3]} // Default rotation
              polar={[-Infinity, Infinity]} // Vertical limits
              azimuth={[-Infinity, Infinity]} // Horizontal limits
              config={{ mass: 4, tension: 800, friction: 50 }} // Spring config
            >
              <SphereGeo />
            </PresentationControls>
          </Suspense>
        </Canvas>
        <Loader />
      </div> */}
      <div id='container' className={styles.container}>
        <main className={styles.main}>
        </main>
      </div >
    </>
  )
}
