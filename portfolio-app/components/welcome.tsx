import React, { useEffect, useRef } from "react";
import styles from '../componentStyles/Home.module.css';
import { motion, useInView } from "framer-motion";
import ThreeCanvas from "../threeJS/canvas";

function Welcome(props: any) {


    const win: any = useRef();
    const isInView: Boolean = useInView(win)

    // useEffect(() => {
    const header = 'Welcome to my Portfolio';


    const variants = {
        open: {
            opacity: 1,
            x: 0
        },
        closed: {
            opacity: 0,
            x: -100
        },
    }

    return (
        <motion.header className={styles.landingHeader} >
            <motion.h1 ref={win} id='welcome' className={styles.welcome}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1, type:'spring' },
                }}
                animate={isInView ? variants.open : variants.closed}
                variants={variants}
            >
                {header}
            </motion.h1>
        </motion.header>
    )

}

export default Welcome