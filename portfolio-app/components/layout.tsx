import { createClient } from 'next-sanity';
import React, { useEffect, useState } from 'react'
import Form from './contactForm';
import Footer from './footer';
import Nav from './nav';
import { motion, useInView } from "framer-motion";

type Props = {
    children: any,
}

function Layout({ children }: Props) {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    useEffect(() => {

        window.addEventListener('resize', function () {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        });
    }, []);

    return (
        <motion.div className='layout'
            style={{
                width: windowSize.width == 0 ? '100%' : windowSize.width- 50,
                inset: 0,
                display: 'grid',
                justifyContent: 'flex-start',
                alignItems: 'center',
                // placeItems:'center',
                // placeSelf:'center',
                // placeContent:'center',
                gridTemplateRows: 'auto auto 1fr auto',
                // padding: 0,
                // margin: '1rem'
            }}
        >
            <motion.span style={{ marginBottom: '1rem' }}><motion.a target="_blank" href="https://icons8.com/icon/fmFqQmR0UdsR/github">Icons&nbsp;by</motion.a>&nbsp;<motion.a target="_blank" href="https://icons8.com">Icons8</motion.a></motion.span>
            <Nav />
            <motion.main>{children}</motion.main>
            <Footer />
        </motion.div>
    )
}

export default Layout;

