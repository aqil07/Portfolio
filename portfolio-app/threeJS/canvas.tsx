
import { Loader } from '@react-three/drei'
// import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
// import SphereGeo from './sphere';
// import { gsap } from 'gsap';
// import ScrollTrigger from "gsap";
import dynamic from 'next/dynamic'

type Props = {}
const DynamicThreeCanvas = dynamic(async () => (await import('@react-three/fiber')).Canvas, {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

const DynamicSphere = dynamic(async () => (await import('../threeJS/sphere')).default, {
  ssr: true,
})

function ThreeCanvas({ }: Props) {



  const currTime = new Date();

  return (

    <DynamicThreeCanvas
      className='canvasMainClass'
      id="canvasMain"
      frameloop="always"
      camera={{ position: [10, 0, 0], fov: 50 }}
    >
      <Suspense fallback={<Loader />}>
        <directionalLight
          position={[20, 20, 20]}
          intensity={1}
          color={0xfffff}
        />
        <DynamicSphere mapType='worldmap' timeTrigger={currTime} />
      </Suspense>
    </DynamicThreeCanvas>
  )
}

export default ThreeCanvas