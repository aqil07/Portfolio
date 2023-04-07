import React, { HTMLProps, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
// import ThreeCanvas from '../threeJS/canvas';
import Image from 'next/image';

import imageUrlBuilder from '@sanity/image-url';
import { client } from '../pages';
type Props = {}

function Projects({ }: Props) {

  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    return builder.image(source)
  };

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0
  });

  useEffect(() => {

    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    })

    window.addEventListener('resize', function () {

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    });
  }, [windowSize.width, windowSize.height]);

  const [isBig, makeBig] = useState(false);

  const img1: any = useRef('');

  const ItemHeight = (windowSize.height / 2);
  const itemWidth = (windowSize.width / 2);

  function clickHandler(element: any, triggerfn: CallableFunction) {

    triggerfn(() => !isBig);

    element.target.style.transform = isBig === true ? element.target.style.transform = 'scale(1)' : element.target.style.transform = 'scale(1.5)'


  }

  return (
    <>
      <motion.div id='projects' className='projects-ctn'>
        <div className='projectsHdr'>
          <h4>Projects</h4>
        </div>

        <motion.section className='news_Site'>
          <div className='news_SiteHdr'>
            <h4>News Site Project - Built with Qwik</h4>
            <small ><a href='https://github.com/aqil07/qwik_news_Site'>GitHub Repo for this Project</a></small>
          </div>
          <Image
            ref={img1}
            onClick={(e: any) => clickHandler(e, makeBig)}
            width={itemWidth}
            height={ItemHeight}
            className='newsImage'
            style={{
              objectFit: 'contain'
            }}
            key='newsImage1'
            alt='news site form filter section'
            src='/project-images/collapsibleForm.jpg'
          >
          </Image>
          <Image
            onClick={(e) => clickHandler(e, makeBig)}
            width={itemWidth}
            height={ItemHeight}
            style={{
              objectFit: 'contain'
            }}
            key='newsImage2'
            alt='news site landing page'
            src='/project-images/newsSiteLanding.jpg'
          >
          </Image>
          <Image
            onClick={(e) => clickHandler(e, makeBig)}
            width={itemWidth}
            height={ItemHeight}
            style={{
              objectFit: 'contain'
            }}
            key='newsImage3'
            alt='news site categories dropdown'
            src='/project-images/newsSiteCatDropDown.jpg'
          >
          </Image>
        </motion.section>
      </motion.div>


    </>
  )
}

export default Projects
