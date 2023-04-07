import { Suspense, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import { delay, motion, useInView } from 'framer-motion'
import Skills from '../components/skills'
import { aboutSchema, contactImageSchema, skillSchema, workSchema } from '../utils/types'
import { createClient } from 'next-sanity'
import About, { getAge } from '../components/about'
import Experience from '../components/workExp'
import Projects from '../components/projects'
import { useRouter } from 'next/router'

type Props = {
  age: number,
  about: [aboutSchema],
  workExp: [workSchema],
  skills: [skillSchema]

};

function reduc_showCard(state: any, dispatch: { type: string }) {

  switch (dispatch.type) {
    case 'showWork': {
      return {
        urlPath: window.history.replaceState({ 'componentId': 3 }, '', '#workExp')
      }
    }
  }


}

export default function Home({ about, workExp, skills }: Props) {
  let canvas: any = useRef()

  const router = useRouter();
  // console.log(router);

  // const about: any = useRef()
  const work: any = useRef()

  const aboutData = useMemo(() => about, [about]);
  const workObj = useMemo(() => workExp, [workExp]);

  const skillsData = useMemo(() => skills, [skills])
  // console.log(skillsData);
  const aboutComp: any = useRef();
  const workComp: any = useRef();
  const skillsComp: any = useRef();
  const projComp: any = useRef();


  const aboutsInView: Boolean = useInView(aboutComp);
  const workInView: Boolean = useInView(workComp);
  const skillsInView: Boolean = useInView(skillsComp);
  const projInView: Boolean = useInView(projComp);

  // const [state, dispatch] = useReducer(reduc_showCard, { urlPath:  router.asPath})

  useEffect(() => {
    //about
    if (aboutsInView == true) {
      window.history.pushState({ 'componentId': 1 }, '', '#about')
    }
    else if (workInView == true) {
      window.history.pushState({ 'componentId': 2 }, '', '#workExp')
    }
    else if (skillsInView == true) {
      window.history.pushState({ 'componentId': 3 }, '', '#skills')
    }
    else if (projInView == true) {
      window.history.pushState({ 'componentId': 4 }, '', '#projects')
    }
    else {
      window.history.pushState({ 'componentId': 0 }, '', '/')
    }

    return () => {
      // console.count('cleanup');
      // state?.urlPath

    }


  }, [workInView, aboutsInView, skillsInView, projInView])


  const age = getAge()
  return (
    <motion.main className='indexMain' style={{
      display: 'grid',
      gridTemplateRows: 'repeat(auto-fit,minmax(min(500px,100%),1fr))',
      gap: '30rem',
      marginTop: 100
    }}>
      {/* <Welcome /> */}
      <motion.article ref={aboutComp} className='aboutComp'
        style={{ marginTop: 200, marginBottom: 100 }}
        animate={aboutsInView ? { opacity: 1, x: 0, } : { opacity: 0, y: -100, }}

      >
        <About age={age} about={aboutData} />
      </motion.article>
      <motion.article ref={workComp} className='workComp'
        style={{ marginTop: 300, marginBottom: 100 }}

        animate={workInView ? { opacity: 1, x: 0, } : { opacity: 0, y: -100, }}

      >
        <Experience workExp={workObj} />
      </motion.article>
      <motion.article ref={skillsComp} className='skillsComp'
        style={{ marginTop: 300, marginBottom: 100 }}
        animate={skillsInView ? { opacity: 1, x: 0, } : { opacity: 0, y: -100, }}

      >
        <Skills skills={skillsData} />
      </motion.article>
      <motion.article ref={projComp} className='projectsComp'
        style={{ marginTop: 300 }}
        animate={projInView ? { opacity: 1, x: 0, } : { opacity: 0, y: -100, }}

      >
        <Projects />
      </motion.article>

    </motion.main>
  )
}

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


  return {
    props: {
      about,
      workExp,
      skills
    }
  }
}

