
import { ReactThreeFiber, useFrame, useLoader } from '@react-three/fiber';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three/src/loaders/TextureLoader'
import { gsap } from 'gsap'


type Props = {
  mapType: string,
  timeTrigger: Date | any
}


function SphereGeo({ timeTrigger }: Props): JSX.Element {
  // console.log('sphere',timeTrigger);

  const meshRef = useRef<ReactThreeFiber.BufferGeometryProps | any>(null);
  const groupRef = useRef<ReactThreeFiber.GroupProps | any>(null);


  const base = useLoader(TextureLoader, `${timeTrigger.getHours() >= 6 && timeTrigger.getHours() <= 18 ? 'worldmap.webp' : 'moonmap.webp'} `)





  const [scrollY_Value, getYScroll] = useState(0);
  const [scrollX_Value, getXScroll] = useState(0);

  const [windowDimensions, setWindowSize] = useState({
    width: 0,
    height: 0
  });


  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });

  const onScroll = useCallback(() => {
    const { scrollY, scrollX } = window;

    getYScroll(scrollY);
    getXScroll(scrollX);


  }, [])

  const resizeHandler = useCallback(() => {
    const { innerWidth, innerHeight } = window;

    setWindowSize({
      width: innerWidth,
      height: innerHeight
    })


  }, [])


  const mouseMoveHandler = (event: MouseEvent) => {


    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY
    });

  }


  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', mouseMoveHandler, { passive: true });
    window.addEventListener('resize', resizeHandler, { passive: true });


    // canvasMain.current?.current.


    return () => {
      window.removeEventListener('scroll', onScroll, { capture: true }),
        window.removeEventListener('mousemove', mouseMoveHandler, { capture: true }),
        window.removeEventListener('resize', resizeHandler, { capture: true })



    }
  }, [scrollX_Value, scrollY_Value, mouseCoordinates.x, mouseCoordinates.y, windowDimensions.width, windowDimensions.height])



  useFrame(() => {
    // canvasMain.current?.camera?.position.set(mouseCoordinates.x, mouseCoordinates.y, 10);


    meshRef.current.rotateY(new Date(timeTrigger,).getSeconds() / ((360 * 60) / 2));
    // meshRef.current.rotateZ(mouseCoordinates.x / );
    gsap.timeline().to(
      '.canvasMainClass', {
      duration: 0.4,
      x: () => mouseCoordinates.x >= windowDimensions.width ? -mouseCoordinates.x : mouseCoordinates.x,
      y: scrollY_Value,
    },
    ),"<"
  })

  return (
    <group
      dispose={null}
      ref={groupRef} >
      {/* <OrbitControls /> */}
      <mesh visible castShadow ref={meshRef} >
        <sphereGeometry attach='geometry' args={[2, 32, 32]} />

        <meshLambertMaterial attach='material' map={base} />

      </mesh>


    </group>
  )
}

export default SphereGeo