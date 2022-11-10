import { createClient } from "next-sanity";
import { skillSchema } from "../utils/types";


type Props = {
    skills: [skillSchema],
}

export default function skillData({skills}:Props):any{
    console.log(skills);

    return skills
    
    
}

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_project_id,
    dataset: process.env.NEXT_PUBLIC_dataset,
    apiVersion: process.env.NEXT_PUBLIC_apiVersion,
    useCdn: false
});

export async function getStaticProps() {
    const skills: Array<Object> = await client.fetch(`*[_type == "Skills"]`);
  
    return {
      props: {
        skills,
      }
    }
  }