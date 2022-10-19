import React, { useRef } from 'react';
import Contact from '../components/contactDetails';
import Toggle from '../components/toggle';
import styles from '../styles/Home.module.css';

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
    let role;
    let company;
    let year;

    const years_El = workObj.map((obj) => {

        role = obj.role;
        company = obj.company;
        year = obj.year
        return (
            <div key={id()} className='workCTN'>
                <div key={id()} id={obj.year.toString()} ref={yearItem} className='yearsEL'>
                    {year}
                </div>
                <div className='roleCompany'>
                    {role}
                </div>
                <div className='roleCompany'>

                    {company}
                </div>
            </div>
        )

    });

    return (
        <>
         <div className={styles.pageHeader}>
        <Contact />
        <Toggle />
      </div>
        <div className='expDiv'>
            <h4>Professional Experience</h4>
            {years_El}
        </div>
        </>
    )
}

export default Experience