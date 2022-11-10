import { createClient } from 'next-sanity';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { contactImageSchema } from '../../utils/types';
import styles from '../componentStyles/Home.module.css';
import Contact from './contactDetails';
import Toggle from './toggle';

type Props = {
}


function Nav({}:Props) {



  const [aboutState, setAbtState]: [Boolean, any] = useState<Boolean>(false);
  const [workState, setWrkState]: [Boolean, any] = useState<Boolean>(false);
  // const [isToggleActive, setToggle]: [Boolean, any] = useState<Boolean>(false);
  const [isToggleActive, setToggle]: [Number, any] = useState<Number>(0);

  function updateToggle() {
    setToggle(1);

  }


  // (isToggleActive == 1) ? toggleState = true : toggleState = false


  return (
    <nav id='navHeader' className={styles.pageHeader}>
      <div id={styles.toggle} className={styles.navSection}>
        <section onClick={updateToggle}>
          <Toggle />
        </section>
      </div>
      <div id={styles.pageNav} className={styles.navSection}>
        <Link href='/about' >About</Link>
        <Link href='/workExp'>Experience </Link>
        <Link href='/skills'>Skills </Link>
      </div>
      <div id={styles.contact} className={styles.navSection}>
        <Contact />
      </div>
    </nav>
  )
}

export default Nav;

