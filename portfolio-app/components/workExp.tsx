import React, { useMemo, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
