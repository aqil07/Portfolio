
import { Canvas, ReactThreeFiber, useFrame, useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera, RoundedBox, Sphere } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import earthImg from './worldmap.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from '@react-three/drei';
import * as THREE from "three";

type Props = {
  mapType: string,
  timeTrigger: Date | any
}

function SphereGeo({ mapType, timeTrigger }: Props): JSX.Element {
  // console.log('sphere',timeTrigger);

  const currTime = new Date();


  const worldmap = useLoader(TextureLoader, 'worldmap.jpg');
  const moonmap = useLoader(TextureLoader, 'moonmap.jpg');
  const meshRef:any = useRef<ReactThreeFiber.SphereBufferGeometryProps>(null);

  const base = useLoader(TextureLoader, `${timeTrigger.getHours() >= 6 && timeTrigger.getHours() <= 18 ? 'worldmap.jpg' : 'moonmap.jpg'} ` )


  useFrame(() => {
    // if (meshRef.current !== undefined) { meshRef.current.rotation.y += 0.003 }
    if (meshRef.current != null || typeof meshRef.current != null) {
      meshRef.current?.rotateY(0.003);
    }
  })
  return (
    <group>
      <mesh visible castShadow ref={meshRef}>
        <sphereGeometry attach='geometry' args={[2, 32, 32]} />

        <meshLambertMaterial attach='material' map={base} />

      </mesh>


    </group>
  )
}

export default SphereGeo