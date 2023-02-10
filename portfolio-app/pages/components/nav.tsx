import { createClient } from 'next-sanity'
import Link from 'next/link'
import React, { useEffect, useReducer, useRef, useState } from 'react'
import { contactImageSchema } from '../../utils/types'
import styles from '../componentStyles/Home.module.css'
import Contact from './contactDetails'
import Toggle from './toggle'
import HomeIcon from '@mui/icons-material/Home'
import { motion, useInView } from 'framer-motion'
import GoUp from './backToTop'
import { useRouter } from 'next/router'

type Props = {}

function Nav({ }: Props) {
  // console.log('t',isToggleActive !== 0)
  const router = useRouter();
  const navbar: any = useRef();
  // const isActive = useReducer()
  useEffect(() => {
    // console.log(navbar.current.off);
    // console.log(router.asPath);


    let topPage = 0;
    navbar.current.style.setProperty('--scrollPadding', `${navbar.current.offsetHeight - 1}px`)
    window.addEventListener('scroll', function (e: any) {

      let prevScroll = e.target?.scrollingElement?.scrollTop;

        if (prevScroll > topPage) {
          //downward scroll
          navbar.current.style.transform = `translateY(${topPage}px)`
        } else {
          // console.log(navbar);
          
          navbar.current.style.transform = `translateY(${topPage - 10}px)`;

          navbar.current.style.zIndex = 1000;
        }
      //reassign the top value to 0 if  the previous value is less than 0
      //else use the previous value
      topPage = (prevScroll <= 0 ? 0 : prevScroll)





    })
  }, [navbar.current, router])
  return (
    <motion.nav ref={navbar} id="navHeader" aria-label='Naviagtion Bar' className='navbar'>

      <Link href="/">
        <HomeIcon id='homeIcon' cursor="pointer" />
      </Link>

      {/* <Toggle /> */}
      <motion.div className='links'
        style={{

        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link href="#about">About</Link>
        <Link href="#workExp">Experience </Link>
        <Link href="#skills">Skills </Link>
        <Link href='#projects'>Projects</Link>
      </motion.div>
      <Contact />

    </motion.nav>
  )
}

export default Nav
