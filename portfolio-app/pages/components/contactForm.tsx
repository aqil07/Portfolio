import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';


function Form(): JSX.Element {
    const [nameInput, nameInputState]: [string, any] = useState<string>('');
    const [emailInput, emailInputState]: [string, any] = useState<string>('');
    const [subject, subjInputState]: [string, any] = useState<string>('');
    const [messageRes, messageInputState]: [string, any] = useState<string>('');
    const form: any = useRef();

    const handleNameChange = (e: any) => {
        nameInputState(e.target.value)
    }
    const handleEmailChange = (e: any) => {
        emailInputState(e.target.value)
    }
    const handleSubjectChange = (e: any) => {
        subjInputState(e.target.value)
    }
    const handleMessageChange = (e: any) => {
        messageInputState(e.target.value)
    }
    const service: string | any = process.env.service;
    const template: string | any = process.env.template;
    const key: string | any = process.env.key;

    const handleSubmit = (e: any) => {
        e.preventDefault();


        // emailjs.sendForm(
        //     service,
        //     template,
        //     form.current,
        //     key).then((result) => {
        //         if (result.text == 'OK')
        //             alert('emailSent')
        //     }, (error) => console.log(error));
    }

    return (
        <>
            <div className='formHeader'>
                <h4>Contact</h4>
            </div>
            <form ref={form} className='form' id='form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Enter your name</label>
                <input required onChange={handleNameChange} type='text' name='name' className='name' id='name' value={nameInput} />
                <label htmlFor='email'>Enter your email</label>
                <input required onChange={handleEmailChange} type='text' name='email' className='email' id='email' value={emailInput} />
                <label htmlFor='subject'>Subject</label>
                <input required={false} type='text' id='subject' className='subject' name='subject' onChange={handleSubjectChange} value={subject} />
                <label htmlFor='message'>Enter your message</label>
                <textarea required id='message' className='message' name='message' onChange={handleMessageChange} value={messageRes} />
                <button type='submit' className='submit' id='submit'>Submit</button>
            </form>
        </>
    )

}

export default Form;