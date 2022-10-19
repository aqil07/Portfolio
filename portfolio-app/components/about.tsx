import React, { useState, useEffect, useRef } from 'react';
import Toggle from '../components/toggle';
import styles from '../styles/Home.module.css';
import Contact from '../components/contactDetails';
import Image from 'next/future/image';
import gmail from '../public/Gmail_Logo_256px.png';
import Link from 'next/link';


function getAge() {

    //current date
    const date: Date = new Date();
    //Date of birth
    const dob: Date = new Date('1995-10-31');

    //age variable
    let age: number;

    //age calc
    if (date.getMonth() === dob.getMonth() && date.getDate() < dob.getDate()) {
        age = (date.getFullYear() - dob.getFullYear()) - 1
    } else {
        age = (date.getFullYear() - dob.getFullYear())

    }
    // console.log(age);
    return age

}

getAge()


type Props = {
    age: React.ReactNode
}

function About({ age }: Props) {


    age = getAge();




    return (
        <div className='aboutCard' >
            <div className='aboutText'>
                <div className='aboutFront'>
                    <h4>About me..</h4>
                    <Image
                        src={gmail.src} width={40} height={1}
                        className='profile' key='profile' alt="profile_picture" />
                    <p>
                        My name is Aqil Arya. I am {age} years old.
                        <br></br>
                        I live in Cape Town, South Africa.<br></br>
                        I am a self-taught developer who has gained practical experience using SQL,
                        JavaScript, XML, JSON, CSS, HTML in the day-to-day work tasks.
                        {/* /*image logos */}
                        <br></br>
                        In my personal time, I enjoy exploring new technologies
                        by starting projects relating to the technology and learn  as I go. I believe that
                        &quot;learning by doing&quot;, is the best way to understand concepts.
                        <br></br>
                        Apart from spending time wearing the &quot;dev&quot; hat,
                        I enjoy spending time relaxing at home and with family,
                        catching waves seeking new thrills and adventures.
                    </p>
                    <Link  href='/profExp'>
                        <h4 className='expLink'>Professional Experience...</h4>
                    </Link>
                </div>
            </div>
        </div>

    )
}

export default About