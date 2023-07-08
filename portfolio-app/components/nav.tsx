import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

import Contact from './contactDetails'
// import Toggle from './toggle'
import HomeIcon from '@mui/icons-material/Home'
import { motion } from 'framer-motion'




function Nav() {


  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  function resizeHandler() {

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })
  }

  useEffect(() => {
    resizeHandler()

    return () => resizeHandler()
  }, [])

  useEffect(() => {

    window.addEventListener('resize', resizeHandler);

    return () => window.removeEventListener('resize', resizeHandler)
  }, [[], windowSize.width, windowSize.height]);
  // console.log('t',isToggleActive !== 0)
  const navbar: any = useRef();
  return (
    <motion.nav ref={navbar} id="navHeader" aria-label='Naviagtion Bar' className='navbar'
      style={
        {
          width: `${windowSize.width}px`,
        }
      }
    >

      <Link className='homeLink' href="/">
        <HomeIcon accentHeight={2} style={{
          height: '5%'
        }} id='homeIcon' cursor="pointer" />
      </Link>
      <motion.div className='links'
        style={{

        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link className='link'
          aria-label='About' href="#about">About</Link>
        <Link className='link' aria-label='Experience' href="#workExp">Experience </Link>
        <Link className='link' aria-label='Skills' href="#skills">Skills </Link>
        <Link className='link' aria-label='Projects' href='#projects'>Projects</Link>
        <Link href='https://codepen.io/aqilarya'>CodePen</Link>

      </motion.div >
      <Contact />

    </motion.nav >
  )
}

export default Nav



