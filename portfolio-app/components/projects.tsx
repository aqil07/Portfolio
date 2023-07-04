import React, { ComponentRef, HTMLProps, IframeHTMLAttributes, useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
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


  const ItemHeight = (windowSize.height / 2);
  const itemWidth = (windowSize.width / 2);

  function clickHandler(element: any, triggerfn: CallableFunction) {

    triggerfn(() => !isBig);

    element.target.style.transform = isBig === true ? element.target.style.transform = 'scale(1)' : element.target.style.transform = 'scale(1.5)'
    element.target.style.zIndex = 2;


  }

  const img1: any = useRef('');
  const img2 = useRef(null);
  const img3 = useRef(null);


  const mobileApp = useRef(null);

  const isInView: Boolean = useInView(mobileApp)
  const img2InView: Boolean = useInView(img2);
  const img3InView: Boolean = useInView(img3);

  const img1InView: Boolean = useInView(img1);


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
          <motion.div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignSelf: 'center'
            }}
          // animate={projectInView ? { opacity: 1, x: 0, transition: { delay: 1.5, staggerChildren: 1.09 } } : { opacity: 0, x: -100, }}

          >
            <motion.img
              ref={img1}
              loading='lazy'
              animate={img1InView ? { opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 1.09 } } : { opacity: 0, x: -100, }}

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
            </motion.img>
            <motion.img
              ref={img2}

              loading='lazy'
              animate={img2InView ? { opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 1.09 } } : { opacity: 0, x: 100, }}

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
            </motion.img>
            <motion.img
              ref={img3}

              onClick={(e) => clickHandler(e, makeBig)}
              animate={img3InView ? { opacity: 1, y: 0, transition: { delay: 0.5, staggerChildren: 1.09 } } : { opacity: 0, y: -100, }}

              width={itemWidth}
              loading='lazy'
              height={ItemHeight}
              style={{
                objectFit: 'contain'
              }}
              key='newsImage3'
              alt='news site categories dropdown'
              src='/project-images/newsSiteCatDropDown.jpg'
            >
            </motion.img>
          </motion.div>
        </motion.section>
        <motion.section
          className='rn-mobile'

          animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}
          ref={mobileApp}
        >

          <motion.h4>A React-Native Mobile App</motion.h4>
          <motion.span>
            <i> Hosted on <a href='https://appetize.io/'>appetize.io</a></i>
          </motion.span>
          <motion.iframe
            id="app_iframe" frameBorder="0" scrolling="no"
            className='rn-app'
            src='https://appetize.io/embed/ueynijvi5h7iublgmyrngpdsvm?language=en_ZA&grantPermissions=true'>

          </motion.iframe>
        </motion.section >
      </motion.div >


    </>
  )
}

export default Projects
