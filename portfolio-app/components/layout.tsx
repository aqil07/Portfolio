import React, { useEffect, useState } from 'react'
import Footer from './footer';
import Nav from './nav';
import { motion } from "framer-motion";

type Props = {
    children: any,
}

function Layout({ children }: Props) {

    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0
    });

    function resizeHandler() {

        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight
        })
    }

    useEffect(() => {
        resizeHandler()

        return ()=> resizeHandler()
    }, [])

    useEffect(() => {

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler)
    }, [[], windowSize.width, windowSize.height]);

    return (
        <motion.div className='layout'
            style={{
                width: `${windowSize.width}px`,

            }}
            layout
        >
            <motion.span style={{ marginBottom: '1rem', fontSize: '1rem' }}><motion.a target="_blank" href="https://icons8.com/icon/fmFqQmR0UdsR/github">Icons&nbsp;by</motion.a>&nbsp;<motion.a target="_blank" href="https://icons8.com">Icons8</motion.a></motion.span>
            <Nav />
            {/* <motion.main
            > */}
                {children}
            {/* </motion.main> */}
            <Footer />
        </motion.div>
    )
}

export default Layout;

