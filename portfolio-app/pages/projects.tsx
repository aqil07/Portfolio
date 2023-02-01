import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {}

function Projects({}: Props) {
  let fill = '#0099ff',
    fillOpacity = '1',
    d =
      'M0,128L48,117.3C96,107,192,85,288,96C384,107,480,149,576,170.7C672,192,768,192,864,186.7C960,181,1056,171,1152,181.3C1248,192,1344,224,1392,240L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
  const svgWave: any = useRef()

  function mouseMove() {
    let arr = svgWave.current.firstChild.getAttribute('d').split(',')
    let str;
    let tmp:any = []
    arr.map((v: any) => {
      // console.log(v);
      if(v.includes('M')){
        console.log(v.replace('M0','M'+Math.random()))
        v = v.replace('M0','M'+Math.random())
      }else if(v.includes('L')){
        v = v.replace(/L\g/,'L'+Math.random())
      }
      
      tmp.push(v)
    })
    str = tmp.toString()
    svgWave.current.firstChild.setAttribute('d',str) 
    
    console.log(svgWave.current.firstChild.getAttribute('d'))
    // console.log(tmp);
    
  }
  return (
    <motion.div id='projects'>
      <motion.section>
       <Link href='https://codepen.io/aqilarya'>My CodePen</Link>
      </motion.section>
    </motion.div>
  )
}

export default Projects
