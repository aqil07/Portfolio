import React, { useEffect, useMemo, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
// import Skills from '../components/skills'
import { aboutSchema, projectSchema, skillSchema, workSchema } from '../utils/types';
import { getAge } from '../components/about';

import { createClient } from 'next-sanity';

type Props = {
  age: number,
  about: [aboutSchema],
  workExp: [workSchema],
  skills: [skillSchema],
  projectName: [projectSchema]

};


import dynamic from 'next/dynamic'

const WelcomeComp = dynamic(async () => await import('../components/welcome'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const DynamicThreeCanvas = dynamic(async () => await import('../threeJS/canvas'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const DynamicAboutComp = dynamic(async () => await import('../components/about'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const ProjectComp = dynamic(async () => await import('../components/projects'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const ExperienceComp = dynamic(async () => await import('../components/workExp'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})
const SkillsComp = dynamic(async () => await import('../components/skills'), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Home({ about, workExp, skills, projectName }: Props) {

  const age = getAge()

  const aboutData = useMemo(() => about, [about]);
  const workObj = useMemo(() => workExp, [workExp]);

  const skillsData = useMemo(() => skills, [skills]);



  const projectsData = useMemo(() => projectName, [projectName]);



  return (
    <motion.main className='indexMain'
      >
      <WelcomeComp />

      <motion.div
        // ref={threeDiv}
        className='threeDiv'
      >
        <DynamicThreeCanvas />
      </motion.div>
      <motion.article
        // ref={aboutComp} 
        className='aboutComp'
        style={{ marginTop: 200, marginBottom: 100 }}
        initial={{
          opacity: 0, y: -100,
        }}
        whileInView={{
          opacity: 1, x: 0,
        }}

      >
        <DynamicAboutComp age={age} about={aboutData} />
      </motion.article>
      <motion.article
        // ref={workComp} 
        className='workComp'
        style={{ marginTop: 300, marginBottom: 100 }}

        initial={{
          opacity: 0, y: -100,
        }}
        whileInView={{
          opacity: 1, x: 0,
        }}

      >
        <ExperienceComp workExp={workObj} />
      </motion.article>
      <motion.article
        //  ref={skillsComp} 
        className='skillsComp'
        style={{ marginTop: 300, marginBottom: 100 }}
        initial={{
          opacity: 0, y: -100,
        }}
        whileInView={{
          opacity: 1, x: 0,
        }}
      >
        <SkillsComp skills={skillsData} />
      </motion.article>
      <motion.article
        // ref={projComp} 
        className='projectsComp'
        style={{ marginTop: 300 }}
        initial={{
          opacity: 0, y: -100,
        }}
        whileInView={{
          opacity: 1, x: 0,
        }}
      >
        <ProjectComp projects={projectsData} />
      </motion.article>

    </motion.main>
  )
}
// import { createClient } from 'next-sanity';
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_APIVERSION,
  useCdn: false
});

//get data from Sanity
export async function getStaticProps() {
  const about: Array<Object> = await client.fetch(`*[_type == "about"]`);
  const workExp: Array<Object> = await client.fetch(
    `*[_type == "workExperience"] | order(year desc)`
  );
  const skills: Array<Object> = await client.fetch(`*[_type == "Skills"]`);

  const projectName: Array<Object> = await client.fetch(`*[_type == "projects"] | order(_createdAt asc)`);



  return {
    props: {
      about,
      workExp,
      skills,
      projectName
    }
  }
}

