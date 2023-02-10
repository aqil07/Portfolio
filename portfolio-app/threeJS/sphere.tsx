
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera, RoundedBox, Sphere } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import earthImg from './worldmap.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";

type Props = {
  timeTrigger: Date | any
}

function SphereGeo({timeTrigger}:Props): JSX.Element {
// console.log('sphere',timeTrigger);

  const currTime = new Date();
  

  const base = useLoader(TextureLoader, `${timeTrigger.getHours() >= 6 && timeTrigger.getHours() <= 18 ? 'worldmap.jpg' : 'moonmap.jpg'} ` )
  const meshRef: any = useRef();
  


  useFrame(() => {
    meshRef.current.rotation.y += 0.003;
  })
  return (
    <mesh visible castShadow ref={meshRef}>
      <sphereGeometry  attach='geometry' args={[2, 32, 32]} />
      <meshLambertMaterial attach='material' map={base} />
      {/* <OrbitControls /> */}
    </mesh>
  )
}

export default SphereGeo