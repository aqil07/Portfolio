import React, { useEffect, useRef } from "react";
import styles from '../styles/Home.module.css'
// export async function getStaticProps() {


//     const header = 'Welcome to my Portfolio';
//     let i = 0;

//     function textTyper(): any {
//         let tmpEl: any
//         if (i < header.length) {
//             tmpEl = document.getElementById('welcome').innerHTML += header.charAt(i)
//             i++;
//             setTimeout(textTyper, 50)
//         }

//         return tmpEl
//     }

//     const tmp = textTyper();

//     return {
//         props: { key: tmp }
//     }
// }

function Welcome(props: any) {


    const win = useRef();
    // useEffect(() => {
    const header = 'Welcome to my Portfolio';
    let i = 0;

    // console.log('win', win.current.innerHTML);

    function TextTyper(): any {

        if (i < header.length) {
            if (win.current !== undefined) {
                if (win.current.innerHTML.includes('Welcome to my Portfolio')) {
                    win.current.innerHTML = '';
                } else {
                    win.current.innerHTML += header.charAt(i);
                }
                // win.current.innerHTML += header.charAt(i);
            }
            i++;
            setTimeout(TextTyper, 99)
        }

    }

    useEffect(() => {
        // setTimeout(() => {

            return TextTyper()
        // }, 1000)
    })


    return (
        <h1 ref={win} id='welcome' className={styles.welcome}>
        </h1>
    )

}

export default Welcome