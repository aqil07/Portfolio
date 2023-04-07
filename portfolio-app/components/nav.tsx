import { createClient } from 'next-sanity'
import Link from 'next/link'
import React, { useEffect, useReducer, useRef, useState } from 'react'

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
  // useEffect(() => {
  //   // console.log(navbar.current?.off);
  //   // console.log(router.asPath);

  //   if (navbar) {
  //     let topPage = 0;
  //     navbar.current?.style.setProperty('--scrollPadding', `${navbar.current?.offsetHeight - 1}px`)
  //     window.addEventListener('scroll', function (e: any) {

  //       let prevScroll = e.target?.scrollingElement?.scrollTop;

  //       if (prevScroll > topPage) {
  //         //downward scroll
  //         // navbar.current.style.position = 'fixed';
  //         // navbar.current.style.transform = `translateY(${topPage}px)`
  //       } else {
  //         // console.log(navbar);

  //         // navbar.current.style.transform = `translateY(${topPage - 10}px)`;

  //         navbar.current.style.zIndex = 1000;
  //       }
  //       //reassign the top value to 0 if  the previous value is less than 0
  //       //else use the previous value
  //       topPage = (prevScroll <= 0 ? 0 : prevScroll)





  //     })
  //   }
  // }, [router])

  // letters of the alphabet to use for randomization
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  //stores the length of the string above.
  //used below for randomization
  const lettersLength = letters.length;

  // useEffect(() => {
  //   // const nav_elements = document.querySelectorAll('.link');




  //   // console.log(nav_elements);
  //   nav_elements.forEach((e: any) => {
  //     //  console.log(e.ariaLabel);

  //     e.addEventListener('mousemove', function () {
  //       //count the iterations
  //       let intervals = 0;
  //       //iterator, every .3 secs
  //       const interval = setInterval(function () {
  //         /*
  //          - update the innerHTML of the element hovered on
  //          - Convert the string into an array
  //          - track the element and the index of the element

  //         */
  //         e.innerHTML = e.innerHTML
  //           .split("")
  //           .map((element:string, index:number) => {
  //             // console.log(element);

  //             /*
  //             if the current index is less than the iteration count, return the letter from the original string
  //             else
  //             return a randomized letter
  //           */
  //             if (index < intervals) {
  //               return e.ariaLabel[index];
  //             }
  //             return letters[Math.floor(Math.random() * lettersLength)];
  //           })
  //           .join("");
  //         //Clear the interval when we exceed the HTML string length
  //         if (intervals >= e.ariaLabel.length) {
  //           clearInterval(intervals);
  //         }
  //         intervals += 1;
  //       }, 50.7);
  //     })
  //   })

  // }, [])
  return (
    <motion.nav ref={navbar} id="navHeader" aria-label='Naviagtion Bar' className='navbar'>

      <Link href="/">
        <HomeIcon style={{
          height: 50
        }} id='homeIcon' cursor="pointer" />
      </Link>

      {/* <Toggle /> */}
      <motion.div className='links'
        style={{

        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link className='link'
        //  onMouseMove={function (e) {
        //   //count the iterations
        //   let intervals = 0;
        //   //iterator, every .3 secs
        //   const interval = setInterval(function () {
        //     /*
        //      - update the innerHTML of the element hovered on
        //      - Convert the string into an array
        //      - track the element and the index of the element
             
        //     */
        //     e.target?.innerHTML = e.target.innerHTML
        //       .split("")
        //       .map((element:string, index:number) => {
        //         /*
        //         if the current index is less than the iteration count, return the letter from the original string
        //         else
        //         return a randomized letter
        //       */
        //         if (index < intervals) {
        //           return e.target.ariaLabel[index];
        //         }
        //         return letters[Math.floor(Math.random() * lettersLength)];
        //       })
        //       .join("");
        //     //Clear the interval when we exceed the HTML string length
        //     if (intervals >= e.target.ariaLabel.length) {
        //       clearInterval(intervals);
        //     }
        //     intervals += 1;
        //   }, 29.7);
        // }}
         aria-label='About' href="#about">About</Link>
        <Link className='link' aria-label='Experience' href="#workExp">Experience </Link>
        <Link className='link' aria-label='Skills' href="#skills">Skills </Link>
        <Link className='link' aria-label='Projects' href='#projects'>Projects</Link>
        <Link href='https://codepen.io/aqilarya'>CodePen</Link>
       
      </motion.div >
      
      {/* <motion.div className='codepen'>
          </motion.div> */}
      <Contact />

    </motion.nav >
  )
}

export default Nav
