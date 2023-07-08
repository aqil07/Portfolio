import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

function Document({ }: Props) {
    return (
        <Html >
            <Head 
            title='Aqil Arya - Portfolio'>
                <link rel="icon" href="/favicon.ico" />
                 </Head>
            <Main />
            <NextScript />

        </Html>
    )
}

export default Document