import '../componentStyles/globals.css';
import '../componentStyles/toggle.css';
import '../componentStyles/about.css';
import '../componentStyles/contact.css';
import '../componentStyles/profExp.css';
import '../componentStyles/contactForm.css';
import '../componentStyles/skills.css';
import '../componentStyles/nav.css';
import '../componentStyles/projects.css';

import type { AppProps } from 'next/app';
import Layout from '../components/layout';
import Head from 'next/head';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head
      >
        <title>Aqil Arya - Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout >

        <Component {...pageProps} />
      </Layout>
    </>)
}

export default MyApp;
