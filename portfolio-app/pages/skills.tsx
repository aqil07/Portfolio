import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';
import { skillSchema } from '../utils/types'

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
        <motion.div ref={skillsCtn} className='skills' id='skills'
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}//{isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -100 }}
        >

            <div className='skillHDR'>
                <h4>Skills</h4>
            </div>

            <motion.div id='galLeft' className='skillGallery'
                initial={{ opacity: 0, x: -100 }}
                animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: -100, }}
                transition={{
                    type: 'spring',
                    delay: 0.9
                }}
            >
                {
                    skillData.slice(0, skillData.length / 2).map((skill) => {

                        // console.log(skill.skillImage.asset._ref);
                        // console.log(skill.progress);

                        function onHover(): any {

                            setSkillProg(skill.progress)
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
                                        src={urlFor(skill.skillImage.asset._ref).format('png').url()}></Image>
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
              initial={{opacity:0, x:100}}
              animate={isInView ? { opacity: 1, x: 0, } : { opacity: 0, x: 100, }}
              transition={{
                  type: 'spring',
                  delay: 0.9
              }}
              >
                {
                    skillData.slice(skillData.length / 2).map((skill) => {

                        // console.log(skill.skillImage.asset._ref);
                        // console.log(skill.progress);

                        function onHover(): any {

                            setSkillProg(skill.progress)
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
                                        src={urlFor(skill.skillImage.asset._ref).format('jpg').url()}></Image>
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
        </motion.div >

    )
}

export default Skills;

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_project_id,
    dataset: process.env.NEXT_PUBLIC_dataset,
    apiVersion: process.env.NEXT_PUBLIC_apiVersion,
    useCdn: false
});

//get data from Sanity
export async function getStaticProps() {
    const skills: Array<Object> = await client.fetch(`*[_type == "Skills"]`);

    return {
        props: {
            skills,
        }
    }
}