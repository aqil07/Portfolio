import React from 'react'
import styles from '../componentStyles/Home.module.css';

type Props = {}

function GoUp({clickHandler}:any) {


    return (
        <button className={styles.backToTop}
        onClick={clickHandler} 
        // onClick={() => {
        //     if (window.location.href.includes('/#formDiv')) {
        //         window.history.back();
        //     }
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        //     window.scrollTo({
        //         top: 0,
        //         behavior: 'smooth'
        //     })
        // }}
        >
            Back to Top
        </button>
    )
}

export default GoUp