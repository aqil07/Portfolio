import { createClient } from 'next-sanity'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { contactImageSchema } from '../../utils/types'
import imageUrlBuilder from '@sanity/image-url'
import { motion, useInView } from 'framer-motion'

type Props = {}

function Contact({ }: Props) {
  interface imageSchema {
    gmail: string
    linkedIn: string
    github: string
  }

  const images: imageSchema = {
    gmail:
      'https://cdn.sanity.io/images/aoh7mhe4/production/29ecd1b0ed47b84cb9f660f3c7b8223fd0516033-343x256.jpg', //'/Gmail_Logo_256px.jpg',
    linkedIn:
      'https://cdn.sanity.io/images/aoh7mhe4/production/476623dcc97d03a415ae56e4734d0c114fd23c2a-635x540.jpg',
    github:
      'https://cdn.sanity.io/images/aoh7mhe4/production/a21ab27257b4cd6d3b3a517bcabe6efa47ab4f8c-120x120.jpg',
  }

  let urls = {
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
