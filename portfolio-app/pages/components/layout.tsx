import { createClient } from 'next-sanity';
import React from 'react'
import { contactImageSchema } from '../../utils/types';
import Form from './contactForm';
import Footer from './footer';
import Nav from './nav';

type Props = {
    children: any,
}

function Layout({ children }: Props) {
    
    return (
        <>
            <Nav  />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;

