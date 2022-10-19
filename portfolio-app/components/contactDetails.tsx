import Image from 'next/future/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';

type Props = {}

function Contact({ }: Props) {

  interface imageSchema {
    gmail: string,
    linkedIn: string,
    github: string,
  }

  const images: imageSchema = {
    gmail: '/Gmail_Logo_256px.png',
    linkedIn: '/LI-In-Bug.png',
    github: '/GitHub-Mark-120px-plus.png'
  }

  let urls = {
    // gmail: '/Gmail_Logo_256px.png',
    linkedIn: 'https://linkedin.com/in/aqil-arya',
    github: 'https://github.com/aqil07'
  }


  // console.log(anchors);
  let i = 0;
  function idGenerator(): any {
    return function (): Number {
      return i++;
    }
  }

  let id = idGenerator();

  const imageAnchor: any = useRef();

  //set URL's after component loads
  useEffect(() => {
    let tmp = imageAnchor.current;
    for (let i = 0; i < tmp.children.length; i++) {

      console.log(tmp.children[i].id);
      switch (tmp.children[i].id) {
        case 'linkedIn':
          tmp.children[i].href = urls.linkedIn;
          // console.log(tmp.children[i]);
          break;
        case 'github':
          tmp.children[i].href = urls.github;
          // console.log(tmp.children[i]);
          break;
        default:
          tmp.children[i].href = 'mailto:aqil.arya07@gmail.com';

      }

    }
  })


  // console.log(Object.entries(images));
  const imgRenderer = Object.entries(images).map((item) => {
    // console.log(item[1]);
    let path = item[1];
    let alt = item[0];



    // let url;
    // let urlKey;
    return (
      <a id={alt} key={id()} >
        <Image className='imageEl' width={100} height={10} key={alt} alt={alt} src={path}></Image>
      </a>
    )

  })


  return (
    <div className='contactCard' ref={imageAnchor}>
      {imgRenderer}
    </div>
  )
}

export default Contact