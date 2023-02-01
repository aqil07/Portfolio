import React, { useEffect, useMemo, useRef, useState } from 'react'
import TypewriterComponent from 'typewriter-effect'
import { motion, useInView } from 'framer-motion'
import { createClient } from 'next-sanity'
import { workSchema } from '../utils/types'

type Props = {
  workExp: [workSchema]
}

function Experience({ workExp }: Props) {
  //assign cache data with useMemo
  let workObj = useMemo(() => workExp, [workExp])

  // console.log(workObj.slice(0, workObj.length / 2));


  let role: string
  let company: string
  let year: string


  const profEl: any = useRef()
  const expDiv: any = useRef()
  const isInView: Boolean = useInView(expDiv)

  return (
    <motion.div
      className="expDiv"
      ref={expDiv}
      id="workExp"
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      >
      <div className="expHeader">
        <h4>Professional Experience</h4>
      </div>
      <motion.div
        className="groupDiv"

      >
        {workObj.map((obj) => {
          role = obj.role
          company = obj.company
          year = obj.year

  

          return (
            <motion.div
              key={obj._id}
              id={obj.year}
              className="expCTN"
              animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}
            
            >
              <motion.div
                key={obj._id}
                id={obj._id}
                ref={profEl}
                className="workCTN"
              >
                <div key={obj._id} className="yearsEL">
                  <p>{year}</p>
                </div>
                <div key={'role' + obj._id} className="role">
                  <p>{role}</p>
                </div>
                <div key={'company' + obj._id} className="Company">
                  <p>{company}</p>
                </div>
               </motion.div>

            </motion.div>
          )
        })}
      </motion.div>
    </motion.div>
  )
}

export default Experience

// export const client = createClient({
//   projectId: 'aoh7mhe4',//process.env.NEXT_PUBLIC_project_id,
//   dataset: 'production',//process.env.NEXT_PUBLIC_dataset,
//   apiVersion: '2021-10-21',//process.env.NEXT_PUBLIC_apiVersion,
//   useCdn: false
// });

//get data from Sanity
// export async function getStaticProps() {
//   const workExp: Array<Object> = await client.fetch(
//     `*[_type == "workExperience"] | order(year desc)`
//   )

//   return {
//     props: {
//       workExp,
//     },
//   }
// }
