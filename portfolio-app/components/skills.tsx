import Image from 'next/image';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { motion, useInView } from "framer-motion";
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

    //hover handling function
    function hoverHandler(data: string) {
        setSkillProg(data);

    }
    //reset hover value
    function onLeave() {
        setSkillProg(skillProg)
    }

    const ItemHeight = (windowSize.height / skills.length);
    const itemWidth = (windowSize.width / skills.length);

    return (
        <motion.section ref={skillsCtn} className='skills' id='skills'
        >

            <div className='skillHDR'>
                <h4>Skills</h4>
            </div>

            <motion.div id='galLeft' className='skillGallery'
                animate={isInView ? { opacity: 1, y: 0,  transition:{delay: 1.5, staggerChildren: 1.09} } : { opacity: 0, y: -100, }}

            >
                {
                    skillData.slice(0, skillData.length / 2).map((skill) => {

                        return (
                            <div key={skill._id}>

                                <motion.div
                                    whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 1, type: 'spring' },
                                    }}
                                    key={skill._id} onClick={() => hoverHandler(skill.progress)} onMouseLeave={onLeave} className='skillsImg' id='skillsImg'>
                                    <Image
                                        loading='lazy'
                                        style={{
                                            objectFit: 'contain'
                                        }}
                                        width={itemWidth}
                                        height={ItemHeight}
                                        id='imgEl'
                                        className='imgEl'
                                        key={skill._id}
                                        alt='skillImage'
                                        src={urlFor(skill.skillImage.asset._ref).url()}></Image>
                                    <motion.div className='progCTN'>
                                        <motion.span

                                            style={{
                                                fontSize: '1cqw',
                                                width: itemWidth,
                                                height: ItemHeight
                                            }}
                                            key={skill._id} className='prog' >{skillProg}</motion.span>
                                        <motion.span className='progBar'></motion.span>
                                    </motion.div>
                                </motion.div>

                            </div>
                        )

                    })

                }

            </motion.div>
            <motion.div id='galRight' className='skillGalleryRight'
                animate={isInView ? { opacity: 1, x: 0, transition:{delay: 1, staggerChildren: 0.09} } : { opacity: 0, x: -100, }}
            >
                {
                    skillData.slice(skillData.length / 2).map((skill) => {



                        return (
                            <div key={skill._id}>

                                <motion.div key={skill._id} onMouseEnter={() => hoverHandler(skill.progress)} onMouseLeave={onLeave} className='skillsImg' id='skillsImg'
                                    whileHover={{
                                        scale: 1.2,
                                        transition: { duration: 1, type: 'spring' },
                                    }}
                                >

                                    <Image
                                        loading='lazy'

                                        width={itemWidth}
                                        height={ItemHeight}
                                        id='imgEl'
                                        className='imgEl'
                                        key={skill._id}
                                        alt='skillImage'
                                        style={{
                                            objectFit: 'contain'
                                        }}
                                        src={urlFor(skill.skillImage.asset._ref).url()} />

                                    <div className='progCTN'
                                        style={{
                                        }}>
                                        <span
                                            style={{
                                                fontSize: '1cqw',
                                                width: itemWidth,
                                                height: ItemHeight
                                            }}
                                            key={skill._id} className='prog' >{skillProg}</span>

                                    </div>
                                </motion.div>

                            </div>
                        )

                    })

                }
            </motion.div>
        </motion.section >

    )
}

export default Skills;
