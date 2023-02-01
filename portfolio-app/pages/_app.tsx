import './componentStyles/globals.css';
import './componentStyles/toggle.css';
import './componentStyles/about.css';
import './componentStyles/contact.css';
import './componentStyles/profExp.css';
import './componentStyles/contactForm.css';
import './componentStyles/skills.css';
import './componentStyles/nav.css';
import type { AppProps } from 'next/app';
import Layout from './components/layout';
import { createClient } from 'next-sanity';
import { contactImageSchema } from '../utils/types';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>)
}

export default MyApp;
