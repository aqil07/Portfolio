
import { Loader, PresentationControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { motion } from 'framer-motion'
import React, { Suspense, useEffect, useReducer, useRef } from 'react'
import SphereGeo from './sphere'

type Props = {}

//reducer  state update for time value
function red_UpdateTime(state: any, dispatch: { type: any; newTime: any }) {
  switch (dispatch.type) {
    case 'update': {
      return {
        currTime: new Date(`1/1/0000 ${dispatch.newTime}`)
      }
    }
  }
}

function ThreeCanvas({ }: Props) {


  const currTime = new Date();
  // currTime.setTime(1332403882588)
  // console.log('currTime', currTime)

  const [state, dispatch] = useReducer(red_UpdateTime, { currTime: currTime })
  // console.log(Date.now());

  //output time
  let timeOutput = ((state?.currTime.getHours() != undefined ? state?.currTime.getHours() : currTime.getHours) < 10 ? '0' + state?.currTime.getHours() : state?.currTime.getHours()) + ':' + ((state?.currTime.getMinutes() != undefined ? state?.currTime.getMinutes() : currTime.getMinutes()) < 10 ? '0' + state?.currTime.getMinutes() : state?.currTime.getMinutes()) + ':' + ((state?.currTime.getSeconds() != undefined ? state?.currTime.getSeconds() : currTime.getSeconds()) < 10 ? '0' + state?.currTime.getSeconds() : state?.currTime.getSeconds())




  // console.log('s',state?.currTime.getSeconds());
  const timeChange: any = useRef();
  const timeDisplay: any = useRef();
  // console.log('c', state?.currTime);
  // console.log('d', timeOutput);

  useEffect(() => {

    let interval = setInterval(() => {

      let d: Date = new Date() || state?.currTime
      let datestr = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds()

      dispatch({ type: 'update', newTime: datestr })
      timeChange.current.value = timeOutput

    }, 1000);


    return () => clearInterval(interval)
  }, [state?.currTime])


  return (
    <>
      <motion.section className='canvas-time-ctn'>
        <motion.label htmlFor='timeChange'>When the hour is before 6am and after 6pm then<motion.span>the Sun goes down and the Moon will appear.</motion.span></motion.label>
        <motion.input ref={timeChange} id='timeChange' name='timeChange' className='canvas-time' type='time' step='2'
          onChange={(e) => {


            dispatch({ type: 'update', newTime: e.target.value })

            timeDisplay.current.innerHTML = e.target.value
            console.log(e.target.value);

            // }, 1000)

          }}
        />
        <motion.p ref={timeDisplay}></motion.p>

      </motion.section>
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
            <SphereGeo timeTrigger={new Date(`1/1/0000 ${timeDisplay.current?.innerHTML}`)} />
          </PresentationControls>
        </Suspense>
      </Canvas>
    </>
  )
}

export default ThreeCanvas