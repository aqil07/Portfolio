
import { Canvas, useFrame, useLoader, useThree } from '@react-three/fiber';
import { PerspectiveCamera, RoundedBox, Sphere } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';
import earthImg from './worldmap.jpg'
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import * as THREE from "three";
import { Vector3 } from 'three';



type Props = {}

function Stars({ }: Props) {
    const geo = new THREE.BufferGeometry();
    
    const base = useLoader(TextureLoader, 'star.png')
    const starMat = <pointsMaterial color='0xaaaaa' size={0.7} map={base} />
    const meshRef: any = useRef();
    let star : any;
    let verticies:any = [];
    for (let i = 0; i < 6000; i++) {
       star = new Vector3((
            Math.random() * 600 - 300,
            Math.random() * 600 - 300,
            Math.random() * 600 - 300
        ));
        verticies.push(star);
    }
    geo.setAttribute('position',new THREE.BufferAttribute(verticies, 3))
    useFrame(() => {

        meshRef.current.rotation.y -= 0.003;
    })
    return (
        <mesh visible castShadow ref={meshRef}>

            <spotLight intensity={0.2} />
            <ambientLight intensity={0.2} />
            <directionalLight intensity={1} position={[10, 10, 0]} />
            <points>
                <pointsMaterial/>
            </points>
        </mesh>
    )
}

export default Stars