import React, { useRef, useState, useEffect } from 'react';
import Contact from './contactDetails';
import Toggle from './toggle';
import styles from '../styles/Home.module.css';
import { Tooltip } from '@mui/material';

type Props = {}



function Experience({ }: Props) {


    let workObj = [
        {
            year: 2022,
            role: 'Product Consultant',
            company: 'Kurtosys Systems Ltd.'
        },
        {
            year: 2021,
            role: 'Implementation Analyst',
            company: 'Kurtosys Systems Ltd.'
        },
        {
            year: 2020,
            role: 'Document Production Analyst',
            company: 'Kurtosys Systems Ltd.'
        },
        {
            year: 2019,
            role: 'Associate Document Production Analyst',
            company: 'Kurtosys Systems Ltd.'
        },
    ];

    let i = 0;
    function idGenerator(): any {
        return function (): Number {
            return i++;
        }
    }

    let id = idGenerator();

    const yearItem: any = useRef();
    let role: String;
    let company: String;
    let year: any;

    const [details, setDetails]: [String, any] = useState('');
    
    const profEl:any = useRef();


    const years_El = workObj.map((obj) => {
        

        role = obj.role;
        company = obj.company;
        year = obj.year;

        function onClick(){
            let ye = year.toString();

            console.log(document.getElementById(ye));
            
            
        }

        return (
            <Tooltip key={id()} title={details} placeholder='Placeholder' placement='top-start'>
                <div key={id()} id={year}  ref={profEl} className='workCTN'>
                    <div key={id()} onClick={onClick} id={obj.year.toString()} ref={yearItem} className='yearsEL'>
                        {year}
                    </div>
                    <div className='roleCompany'>
                        {role}
                    </div>
                    <div className='roleCompany'>

                        {company}
                    </div>
                </div>
            </Tooltip>
        )

    });
    

    return (
        <>
            <div className='expDiv' id='expDiv'>
                <h4>Professional Experience</h4>
                {years_El}
            </div>
        </>
    )
}

export default Experience