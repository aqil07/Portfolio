import React, { useState, useEffect, useRef, useMemo } from 'react';
import TypewriterComponent from 'typewriter-effect';
import { createClient, SanityClient } from 'next-sanity';
import { aboutSchema } from '../utils/types';
import { motion, useInView } from 'framer-motion';

export function getAge() {

    //current date
    const date: Date = new Date();
    //Date of birth
    const dob: Date = new Date('1995-10-31');

    //age variable
    let age: number;

    //age calc
    if (date.getMonth() === dob.getMonth() && date.getDate() < dob.getDate()) {
        age = (date.getFullYear() - dob.getFullYear()) - 1
    } else {
        age = (date.getFullYear() - dob.getFullYear())

    }
    return age

}

getAge()



type Props = {
    age: number,
    about: [aboutSchema]

}

function About({ age, about }: Props) {

    //cache data
    let aboutData = useMemo(() => about, [about]);
    let aboutStr = aboutData[0].about;

    const aboutCard: any = useRef();
    const isInView: Boolean = useInView(aboutCard);


    age = getAge();

    aboutStr = aboutStr.replace('{age}', age.toString());


    // Get a pre-configured url-builder from your sanity client
    // const builder = imageUrlBuilder(client)
    // function urlFor(source: any) {
    //     return builder.image(source)
    // }
    // urlFor()

    return (
        <div className='aboutCard' >
            <motion.div  id='about'   className='aboutText' ref={aboutCard}
            
                initial={{ opacity: 0, y: -100, }}//
                animate={isInView ? { opacity: 1, y: 0, } : { opacity: 0, y: -100, }}
                transition={{ type: 'spring', }}
            >
                <div id='aboutFront' className='aboutFront'>
                    <div className='abtHeader'>
                        <h4>About me..</h4>
                    </div>
                    {/* <TypewriterComponent options={{
                        wrapperClassName: 'typeStr',
                        strings: aboutStr,
                        autoStart: true,
                        delay: 30,
                        cursor: '_'
                    }}

                    /> */}
                    <p>{aboutStr}</p>
                    {/* <Image
                            src={gmail.src} width={40} height={1}
                            className='profile' key='profile' alt="profile_picture" /> */}

                    <a className='cv' href='/aqil_arya_cv.pdf' download><p>Click to download my CV</p></a>
                </div>

            </motion.div>

        </div>

    )
}

export default About;


// export const client = createClient({
//     projectId: 'aoh7mhe4',//process.env.NEXT_PUBLIC_project_id,
//     dataset: 'production',//process.env.NEXT_PUBLIC_dataset,
//     apiVersion: '2021-10-21',//process.env.NEXT_PUBLIC_apiVersion,
//     useCdn: false
// });

// //get data from Sanity
// export async function getStaticProps() {
//     const about: Array<Object> = await client.fetch(`*[_type == "about"]`);

//     return {
//         props: {
//             about,
//         }
//     }
// }
