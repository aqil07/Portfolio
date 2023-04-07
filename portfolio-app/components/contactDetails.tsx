import { createClient } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

type Props = {}

function Contact({ }: Props) {
  interface imageSchema {
    gmail: string
    linkedIn: string
    github: string
  }


  let urls: imageSchema = {
    gmail: '#formDiv',
    linkedIn: 'https://linkedin.com/in/aqil-arya',
    github: 'https://github.com/aqil07',
  }

  let imgW = 50
  let imgH = 50


  return (
    <>
      <motion.div className="contactCard">
        <>
          <motion.div
            className="imageEl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <motion.a key={'gmail'} href={urls.gmail}>
              <Image
                className='imgNav'
                loading='lazy'
                width={imgW}
                height={imgH}
                key="img"
                alt={'gmail'}
                src='gmail.svg'//{images.gmail}
              ></Image>
            </motion.a>
          </motion.div>
          <motion.div
            className="imageEl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            <motion.a
              key={'github'}
              href={urls.github}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                loading='lazy'
                width={imgW}
                height={imgH}
                key="img"
                alt={'github'}
                src='github.svg'//{images.github}
              ></Image>
            </motion.a>
          </motion.div>
          <motion.div
            className="imageEl"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <motion.a
              key={'linkedIn'}
              href={urls.linkedIn}
              target="_blank"
              rel="noreferrer"
            >
              <Image
                loading='lazy'
                width={imgW}
                height={imgH}
                key="img"
                alt={'linkedIn'}
                src='linkedin.svg'//{images.linkedIn}
              ></Image>
            </motion.a>
          </motion.div>
        </>
      </motion.div>
    </>
  )
}

export default Contact
