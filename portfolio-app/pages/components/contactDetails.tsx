import { createClient } from 'next-sanity';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { contactImageSchema } from '../../utils/types';
import imageUrlBuilder from '@sanity/image-url';

type Props = {
}

function Contact({ }: Props) {


  interface imageSchema {
    gmail: string,
    linkedIn: string,
    github: string,
  }

  const images: imageSchema = {
    gmail: 'https://cdn.sanity.io/images/aoh7mhe4/production/29ecd1b0ed47b84cb9f660f3c7b8223fd0516033-343x256.jpg',//'/Gmail_Logo_256px.jpg',
    linkedIn: 'https://cdn.sanity.io/images/aoh7mhe4/production/476623dcc97d03a415ae56e4734d0c114fd23c2a-635x540.jpg',
    github: 'https://cdn.sanity.io/images/aoh7mhe4/production/a21ab27257b4cd6d3b3a517bcabe6efa47ab4f8c-120x120.jpg'
  }

  let urls = {
    gmail: '#formDiv',
    linkedIn: 'https://linkedin.com/in/aqil-arya',
    github: 'https://github.com/aqil07'
  }


  return (
    <>
      <div className='contactCard' >
      <>
        <a key={'gmail'} href={urls.gmail}>
          <Image className='imageEl' width={50} height={40} key='img' alt={'gmail'} src={images.gmail}></Image>
        </a>
        <a key={'github'} href={urls.github} target='_blank' rel='noreferrer'>
          <Image className='imageEl' width={50} height={40} key='img' alt={'github'} src={images.github}></Image>
        </a>
        <a key={'linkedIn'} href={urls.linkedIn} target='_blank' rel='noreferrer'>
          <Image className='imageEl'width={50} height={40} key='img' alt={'linkedIn'} src={images.linkedIn}></Image>
        </a>
      </>
      </div>
    </>
  )
}

export default Contact;
