
import { Loader, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React, { Suspense, useEffect, useReducer, useRef } from 'react'
import SphereGeo from './sphere'

type Props = {}


function ThreeCanvas({ }: Props) {


  const currTime = new Date();

  return (
    <>

      <Canvas
        id="canvasMain"
        frameloop="always"
        camera={{ position: [5, 0, 0], fov: 50 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight
            position={[10, 20, 20]}
            intensity={1}
            color={0xfffff}
          />
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
            <SphereGeo mapType='worldmap' timeTrigger={currTime} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  )
}

export default ThreeCanvas