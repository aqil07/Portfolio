import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { delay, motion, useInView } from "framer-motion";
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { skillSchema } from '../utils/types'
import { client } from '../pages';
// import { client } from '';

type Props = {
    skills: [skillSchema],
    // skillCardState: Boolean
}


function Skills({ skills }: Props) {
    const skillsCtn: any = useRef(null);
    const isInView: Boolean = useInView(skillsCtn);
    //cache data
    let skillData = useMemo(() => skills, [skills]);
    const [skillProg, setSkillProg]: [number, any] = useState<number>(0);


    // Get a pre-configured url-builder from your sanity client
    const builder = imageUrlBuilder(client);
    function urlFor(source: any) {
        return builder.image(source)
    };

    return (
        <motion.section ref={skillsCtn} className='skills' id='skills'
        // initial={{ opacity: 0,y:-100 }}
        // animate={{ opacity: 1,  y:0}}//{isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        >

            <div className='skillHDR'>
                <h4>Skills</h4>
            </div>

            <motion.div id='galLeft' className='skillGallery'
                animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, y: -100, }}

            >
                {
                    skillData.slice(0, skillData.length / 2).map((skill) => {

                    
                        function onHover(): any {

                            setSkillProg(skill.progress)
                    
                        };

                        function onLeave() {
                            setSkillProg(skillProg)
                        }

                    
                        return (
                            <div key={skill._id}>

                                <div key={skill._id} onClick={onHover} onMouseLeave={onLeave} className='skillsImg' id='skillsImg'>
                                    <Image
                                        width={80}
                                        height={75}
                                        id='imgEl'
                                        className='imgEl'
                                        key={skill._id}
                                        alt='skillImage'
                                        src={urlFor(skill.skillImage.asset._ref).url()}></Image>
                                    <div className='progCTN'>
                                        <span key={skill._id} className='prog' >{skillProg}</span>
                                        <span className='progBar'></span>
                                    </div>
                                </div>

                            </div>
                        )

                    })

                }

            </motion.div>
            <motion.div id='galRight' className='skillGalleryRight'
                animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}

            //   initial={{opacity:0, x:100}}
            //   animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: 100, }}
            //   transition={{delay:0.1}}
            //   transition={{
            //       type: 'spring',
            //       delay: 0.9
            //   }}
            >
                {
                    skillData.slice(skillData.length / 2).map((skill) => {

                        // console.log(skill.skillImage.asset._ref);
                        // console.log(skill.progress);

                        function onHover(): any {

                            setSkillProg(skill.progress)
                            // console.log('hover');

                            // getAlt(skill[0])

                        };

                        function onLeave() {
                            setSkillProg(skillProg)
                        }

                        // path = item[1].path;
                        // alt = item[0];

                        return (
                            <div key={skill._id}>

                                <div key={skill._id} onMouseEnter={onHover} onMouseLeave={onLeave} className='skillsImg' id='skillsImg'>
                                    <Image
                                        width={80}
                                        height={75}
                                        id='imgEl'
                                        className='imgEl'
                                        key={skill._id}
                                        alt='skillImage'
                                        src={urlFor(skill.skillImage.asset._ref).url()}></Image>
                                    <div className='progCTN'>
                                        <span key={skill._id} className='prog' >{skillProg}</span>
                                        <span className='progBar'></span>
                                    </div>
                                </div>

                            </div>
                        )

                    })

                }
            </motion.div>
        </motion.section >

    )
}

export default Skills;
