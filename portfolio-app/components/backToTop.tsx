import React from 'react'
import styles from '../componentStyles/Home.module.css';

type Props = {}

function GoUp({clickHandler}:any) {


    return (
        <button className={styles.backToTop}
        onClick={clickHandler} 
        >
            Back to Top
        </button>
    )
}

export default GoUp