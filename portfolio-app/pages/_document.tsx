import { Head, Html, Main, NextScript } from 'next/document'
import React from 'react'

type Props = {}

function Document({ }: Props) {
    return (
        <Html>
            <Head >
                <link rel="icon" href="/favicon.ico" />
                <link href="https://fonts.googleapis.com/css2?family=VT323&display=swap" rel="stylesheet" />
            </Head>
            <Main />
            <NextScript />

        </Html>
    )
}

export default Document