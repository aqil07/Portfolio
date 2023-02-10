import { createClient } from 'next-sanity';
import React from 'react'
import Form from './contactForm';
import Footer from './footer';
import Nav from './nav';
import { motion, useInView } from "framer-motion";

type Props = {
    children: any,
}

function Layout({ children }: Props) {

    return (
        <motion.div className='layout'
            style={{
                display: 'grid',
                gridTemplateRows: 'auto auto 1fr auto',
                padding:0,
                margin:'1rem'
            }}
        >
            <motion.span style={{marginBottom:'1rem'}}><motion.a target="_blank" href="https://icons8.com/icon/fmFqQmR0UdsR/github">Icons</motion.a> by <motion.a target="_blank" href="https://icons8.com">Icons8</motion.a></motion.span>
            <Nav />
            <motion.main>{children}</motion.main>
            <Footer />
        </motion.div>
    )
}

export default Layout;

