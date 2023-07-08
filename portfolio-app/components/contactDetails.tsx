import Image from 'next/image';
import React, {  } from 'react';
import { motion } from 'framer-motion';

function Contact() {


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

  return (
    <>
      <motion.div className="contactCard">
        <motion.div
          className="imgNav"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.a key={'gmail'} href={urls.gmail}>
            <Image
              className='imageEl'
              width="0"
              height="0"
              priority={true}

              sizes="100vw"
              key="img"
              alt={'gmail'}
              src='/gmail.webp'//{images.gmail}
            ></Image>
          </motion.a>
        </motion.div>
        <motion.div
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
              className="imageEl"

              priority={true}
              width="0"
              height="0"
              sizes="100vw"
              key="img"
              alt={'github'}
              src='/github.webp'//{images.github}
            ></Image>
          </motion.a>
        </motion.div>
        <motion.div
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
              className="imageEl"

              loading='lazy'
              width="0"
              height="0"
              sizes="100vw"
              key="img"
              alt={'linkedIn'}
              src='/linkedin.webp'//{images.linkedIn}
            ></Image>
          </motion.a>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Contact
