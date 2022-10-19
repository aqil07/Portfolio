import '../styles/globals.css';
import '../componentStyles/toggle.css';
import '../componentStyles/about.css';
import '../componentStyles/contact.css';
import '../componentStyles/profExp.css';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
