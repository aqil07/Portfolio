import { createClient } from 'next-sanity'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { contactImageSchema } from '../../utils/types'
import styles from '../componentStyles/Home.module.css'
import Contact from './contactDetails'
import Toggle from './toggle'
import HomeIcon from '@mui/icons-material/Home'
import { motion, useInView } from 'framer-motion'

type Props = {}

function Nav({}: Props) {
  // console.log('t',isToggleActive !== 0)

  // (isToggleActive == 1) ? toggleState = true : toggleState = false

  return (
    <nav id="navHeader" className={styles.pageHeader}>
      <Link href="/">
        <HomeIcon id='homeIcon' className={styles.homeIcon} cursor="pointer" />
      </Link>
      <motion.div id={styles.toggle} className={styles.navSection}>
        <motion.section
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{delay:0.2}}
        >
          <Toggle />
        </motion.section>
      </motion.div>
      <motion.div
        id={styles.pageNav}
        className={styles.navSection}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{delay:0.3}}
      >
        <Link href="/about">About</Link>
        <Link href="/workExp">Experience </Link>
        <Link href="/skills">Skills </Link>
        <Link href='/projects'>Projects</Link>
      </motion.div>
      <motion.div
        style={{ x: 10 }}
        id={styles.contact}
        className={styles.navSection}
      >
        <Contact />
      </motion.div>
    </nav>
  )
}

export default Nav
