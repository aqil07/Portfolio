import React from 'react'
import styles from '../componentStyles/Home.module.css';
import Form from './contactForm';


function Footer(): JSX.Element {
  return (
    <footer className={styles.footer} >
    <div id='formDiv' className={styles.formDiv}>
      <Form />
    </div>

    <button className={styles.backToTop} onClick={() => {
      if (window.location.href.includes('/#formDiv')) {
        window.history.back();
      }
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      })
    }}>
      Back to Top
    </button>
  </footer>
  )
}

export default Footer;