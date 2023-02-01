import { createClient } from "next-sanity";

// export const client = createClient({
//   projectId: 'aoh7mhe4',//process.env.NEXT_PUBLIC_project_id,
//   dataset: 'production',//process.env.NEXT_PUBLIC_dataset,
//   apiVersion: '2021-10-21',//process.env.NEXT_PUBLIC_apiVersion,
//   useCdn: false
// });

// //get data from Sanity
// export async function getStaticProps() {
//   const about: Array<Object> = await client.fetch(`*[_type == "about"]`);
//   const workExp: Array<Object> = await client.fetch(
//     `*[_type == "workExperience"] | order(year desc)`
//   );
//   const skills: Array<Object> = await client.fetch(`*[_type == "Skills"]`);


//   return {
//     props: {
//       about,
//       workExp,
//       skills
//     }
//   }
// }

