import React, { useEffect, useMemo, useRef, useState } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { motion, useInView } from 'framer-motion';
import { createClient } from 'next-sanity';
import { workSchema } from '../utils/types';


type Props = {
    workExp: [workSchema]
}



function Experience({ workExp }: Props) {



    //assign cache data with useMemo
    let workObj = useMemo(() => workExp, [workExp]);


    let role: string;
    let company: string;
    let year: string;

    const [details, setDetails]: [string, any] = useState<string>('');
    const [detailState, hideDetails]: [Boolean, any] = useState<Boolean>(false);
    const [typeWriterState, setTypeWriter]: [boolean, any] = useState<boolean>(false);


    const profEl: any = useRef();
    const descriptionEl: any = useRef();
    const expDiv: any = useRef();
    const isInView: Boolean = useInView(expDiv);


    return (

        <motion.div className='expDiv' ref={expDiv} id='expDiv'
            initial={{ y: -100, opacity:0 }}//
            animate={{ opacity: 1, y: 0, }}//{isInView ? { opacity: 1, y: 0, } : { opacity: 0 }}
            transition={{ type: 'keyframes'}}
        >
            <div className='expHeader'>
                <h4  >Professional Experience</h4>
            </div>
            <motion.div className='groupDiv'
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}
                transition={{
                    type: 'spring',
                    delay: 0.9
                }}
            >
                {
                    workObj.slice(0, (workObj.length / 2)).map((obj) => {


                        role = obj.role;
                        company = obj.company;
                        year = obj.year;
                        // description = obj.description;


                        function showDescription(): any {

                            setDetails(obj.description);

                            setTypeWriter(true);
                            hideDetails(!detailState);

                        }

                        function mouseLeave() {
                            setTypeWriter(false)
                            setDetails('');
                        }

                        return (
                            <motion.div onMouseMove={showDescription} onMouseOutCapture={mouseLeave} key={obj._id} id={obj.year} className='expCTN'
                                animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}
                            >
                                <motion.div key={'descr' + obj._id} ref={descriptionEl} className='description'

                                >
                                    <TypewriterComponent
                                        options={
                                            {
                                                wrapperClassName: 'detailsText',
                                                strings: details,
                                                autoStart: typeWriterState,
                                                delay: 0,
                                                cursor: '_'
                                            }
                                        }
                                    />
                                </motion.div >
                                <motion.div key={obj._id} id={obj._id} ref={profEl} className='workCTN'


                                >

                                    <div key={obj._id} className='yearsEL'>
                                        {year}
                                    </div>
                                    <div key={'role' + obj._id} className='role'>
                                        {role}
                                    </div>
                                    <div key={'company' + obj._id} className='Company'>
                                        {company}
                                    </div>
                                </motion.div>

                            </motion.div>

                        )

                    })

                }

            </motion.div>
            <motion.div className='groupDiv'
                initial={{ opacity: 0, x: 100 }}
                animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: 100, }}
                transition={{
                    type: 'spring',
                    delay: 0.9
                }}
            >
                {
                    workObj.slice((workObj.length / 2)).map((obj) => {


                        role = obj.role;
                        company = obj.company;
                        year = obj.year;

                        function showDescription(): any {

                            setDetails(obj.description);

                            setTypeWriter(true);
                            hideDetails(!detailState);

                        }

                        function mouseLeave() {
                            setTypeWriter(false)
                            setDetails('');
                        }

                        return (
                            <motion.div onClick={showDescription} onMouseMoveCapture={showDescription} onMouseDownCapture={mouseLeave} key={obj._id} id={obj.year} className='expCTN'

                            >
                                <motion.div key={'descr' + obj._id} ref={descriptionEl} className='description'

                                >
                                    <TypewriterComponent
                                        options={
                                            {
                                                wrapperClassName: 'detailsText',
                                                strings: details,
                                                autoStart: typeWriterState,
                                                delay: 30,
                                                cursor: '_'
                                            }
                                        }
                                    />
                                </motion.div >
                                <motion.div key={obj._id} id={obj._id} ref={profEl} className='workCTN'


                                >

                                    <div key={obj._id} className='yearsEL'>
                                        {year}
                                    </div>
                                    <div key={'role' + obj._id} className='role'>
                                        {role}
                                    </div>
                                    <div key={'company' + obj._id} className='Company'>
                                        {company}
                                    </div>
                                </motion.div>

                            </motion.div>

                        )

                    })

                }
            </motion.div>


        </motion.div>

    )
}

export default Experience;

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_project_id,
    dataset: process.env.NEXT_PUBLIC_dataset,
    apiVersion: process.env.NEXT_PUBLIC_apiVersion,
    useCdn: false
});

//get data from Sanity
export async function getStaticProps() {
    const workExp: Array<Object> = await client.fetch(`*[_type == "workExperience"] | order(year desc)`);

    return {
        props: {
            workExp,
        }
    }
}