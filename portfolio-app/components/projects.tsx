import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
// import ThreeCanvas from '../threeJS/canvas';
import Image from 'next/image';

import imageUrlBuilder from '@sanity/image-url';
import { client } from '../pages';
import { projectSchema } from '../utils/types';
type Props = {
  projects: [projectSchema],

}

function Projects({ projects }: Props) {



  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client);
  function urlFor(source: any) {
    // console.log(builder.image(source));

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



  function clickHandler(element: any, triggerfn: CallableFunction) {

    triggerfn(() => !isBig);

    element.target.style.transform = isBig === true ? element.target.style.transform = 'scale(1)' : element.target.style.transform = 'scale(1.5)'
    element.target.style.zIndex = 2;


  }



  const mobileApp = useRef(null);

  const isInView: Boolean = useInView(mobileApp)

  return (
    <>
      <motion.div key='projectsDiv' id='projects' className='projects-ctn'>
        <div key='projectsHdr' className='projectsHdr'>
          <h4>Projects</h4>
        </div>

        <motion.section key='newsSiteSection' className='news_Site'>
          <div className='news_SiteHdr'>
            <h4>News Site Project - Built with Qwik</h4>
            <small ><a href='https://github.com/aqil07/qwik_news_Site'>GitHub Repo for this Project</a></small>
          </div>
          <>
            {
              projects.filter((projectName) => projectName.projectName.toLowerCase().includes('news')).map((project) => {
                // console.log(urlFor(project.projectImage.asset._ref).url());

                return (
                  <motion.div
                    key={project.projectName.toString()}

                    // initial={ { opacity: 0, x: -100, }}
                    // animate={img1InView ? { opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 1.09 } } : { opacity: 0, x: -100, }}
                    animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 1.09 } }}
                  >
                    <Image
                      loading='lazy'
                      priority={false}
                      onClick={(e: any) => clickHandler(e, makeBig)}
                      // width={itemWidth}
                      // height={ItemHeight}
                      width="0"
                      height="0"
                      sizes="100vw"
                      className='newsImage'
                      style={{
                        objectFit: 'contain',
                        width: '100%', height: 'auto'
                      }}
                      key={project._id}
                      alt={project.projectName}
                      src={urlFor(project.projectImage.asset._ref).url()}//'/project-images/collapsibleForm.jpg'
                    >
                    </Image>
                  </motion.div>
                )

              })}
          </>
        </motion.section>
        <motion.section
          className='rn-mobile'

          animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}
          ref={mobileApp}
        >
          <motion.h4 key='header'>
            <motion.a 
            whileHover={
              {
                backgroundColor: 'ButtonHighlight'
              }
            }
            key='embedLink' target='_blank' href='https://appetize.io/embed/ueynijvi5h7iublgmyrngpdsvm?language=en_ZA&grantPermissions=true'>A React-Native Mobile App</motion.a>
          </motion.h4>
          <motion.span key='appetizeLink' style={{marginBottom: 10}}>
            <i> Hosted on <a href='https://appetize.io/'>appetize.io</a></i>
          </motion.span>

          {
            projects.filter((projectName) => projectName.projectName.toLowerCase().includes('app')).map((project) => {
              // console.log(urlFor(project.projectImage.asset._ref).url());

              return (

                <motion.div
                  className='iframeholder'
                  key={project.projectName.toString()}
                  animate={{ opacity: 1, x: 0, transition: { delay: 0.5, staggerChildren: 1.09 } }}
                >
                  <Image
                    loading='lazy'
                    priority={false}
                    onClick={(e: any) => clickHandler(e, makeBig)}
                    // width={itemWidth}
                    // height={ItemHeight}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className='newsImage'
                    style={{
                      objectFit: 'contain',
                      width: '100%', height: 'auto'
                    }}
                    alt={project.projectName}

                    src={urlFor(project.projectImage.asset._ref).url()}
                  />
                  {/* <motion.iframe
                    key={project._id}
                    loading='lazy'
                    id="app_iframe" frameBorder="0" scrolling="no"
                    className='rn-app'
                    src={project.embedURL.toString()}
                  >

                  </motion.iframe> */}
                </motion.div>
              )

            })}

        </motion.section >
      </motion.div >


    </>
  )
}

export default Projects
