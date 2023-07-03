import React, { useReducer, useRef } from 'react';
import emailjs from '@emailjs/browser';
type formType = {
    name: string,
    email: string,
    subject: string,
    message: string
}

function reducerF(state: any, dispatch: {
    [x: string]: any; type: any;
}) {
   
    switch (dispatch.type) {
        case 'update': {
            return {
                name: dispatch.newName,

                email: dispatch.newEmail,

                subject: dispatch.newSubject,

                message: dispatch.newMessage,


            };
        }
    }
}

const initiArg: formType = {
    name: '', email: '', subject: '', message: ''
}


function Form(): JSX.Element {
    const [state, dispatch] = useReducer(reducerF,initiArg)
    const form: any = useRef();

    const handleNameChange = (e: any) => {
        // nameInputState(e.target.value)
        // console.log('e',e.target.value);
        
        dispatch({
            type: 'update', newName: e.target.value,
            newEmail: state?.email,
            newSubject: state?.subject,
            newMessage: state?.message
        })

        // console.log(state?.name);
    }

    const handleEmailChange = (e: any) => {
        // emailInputState(e.target.value)

        dispatch({
            type: 'update', newEmail: e.target.value,
            newName: state?.name,
            newSubject: state?.subject,
            newMessage: state?.message
        })
    }
    const handleSubjectChange = (e: any) => {
        // subjInputState(e.target.value)

        dispatch({
            type: 'update', newSubject: e.target.value,
            newName: state?.name,
            newEmail: state?.email,
            newMessage: state?.message
        })
    }
    const handleMessageChange = (e: any) => {
        // messageInputState(e.target.value)

        dispatch({
            type: 'update', newMessage: e.target.value,
            newName: state?.name,
            newEmail: state?.email,
            newSubject: state?.subject
        })
    }
    
    const service: string | any = process.env.NEXT_PUBLIC_EMAIL_SERVICE;
    const template: string | any = process.env.NEXT_PUBLIC_EMAIL_TEMPLATE;
    const key: string | any = process.env.NEXT_PUBLIC_EMAIL_KEY;
    // console.log('k',key);
    

    const handleSubmit = (e: any) => {
        e.preventDefault();


        emailjs.sendForm(
            service,
            template,
            form.current,
            key).then((result) => {
                if (result.text == 'OK')
                    alert('emailSent')
            }, (error) => console.log(error));
    }

    return (
        <>
            <div className='formHeader'>
                <h4>Contact</h4>
            </div>
            <form ref={form} className='form' id='form' onSubmit={handleSubmit}>
                <label htmlFor='name'>Enter your name</label>
                <input aria-label='Your name input field' required onChange={handleNameChange} type='text' name='name' className='name' id='name' value={state?.name} />
                <label htmlFor='email'>Enter your email</label>
                <input aria-label='Your email input field' required onChange={handleEmailChange} type='text' name='email' className='email' id='email' value={state?.email} />
                <label htmlFor='subject'>Subject</label>
                <input aria-label='Your email subject input field' required={false} type='text' id='subject' className='subject' name='subject' onChange={handleSubjectChange} value={state?.subject} />
                <label htmlFor='message'>Enter your message</label>
                <textarea aria-label='Your email message input field' required id='message' className='message' name='message' onChange={handleMessageChange} value={state?.message} />
                <button aria-label='Your form submit button ' type='submit' className='submit' id='submit'>Submit</button>
            </form>
        </>
    )

}

export default Form;