import React, { useState, useEffect } from 'react';

// type Props = {
//   toggleState: Boolean
// }

function Toggle() {
  // console.log(toggleState);
  

  //change the body background color on toggle change
  const [isChecked, checkToggle]: [Boolean, any] = useState<Boolean>(false);

  const changeBackGround = (): void => {
    checkToggle(!isChecked); 
  }


  useEffect(() => {
    let p: any;
    let h: any;
    let btn: any;
    let expDiv: any;
    let formDiv: any;
    let typeWriter: any;
    let navHeader: any;
    let whiteBG: string = '#ffffff';
    let blackCol: string = '#111';
    p = document.querySelectorAll('p');
    h = document.querySelectorAll('h4');
    btn = document.querySelectorAll('button');
    expDiv = document.getElementById('expDiv');
    formDiv = document.getElementById('formDiv');
    navHeader = document.getElementById('navHeader');
    typeWriter = document.querySelectorAll('.typeStr');

    if (isChecked === true) {

      document.body.style.backgroundImage = 'linear-gradient(90deg,#111, grey)';
      navHeader.style.backgroundImage = 'linear-gradient(90deg, darkslategray, lightslategray)';


      p.forEach((elT: any) => {
        elT.style.color = whiteBG
      })

      h.forEach((elT: any) => {
        elT.style.color = whiteBG
      })
      formDiv.style.color = whiteBG;

      btn.forEach((elT: any) => {
        elT.style.color = whiteBG
      })

      typeWriter.forEach((elT: any) => {
        elT.style.color = whiteBG;
      })


    } else {
      // document.body.style.backgroundColor = '#ffffff';
      document.body.style.backgroundImage = 'linear-gradient(90deg,#fff, blue)';
      // console.log(document.body.style);
      navHeader.style.backgroundImage = 'linear-gradient(90deg, lightblue,purple )';
      p.forEach((elT: any) => {
        elT.style.color = blackCol
      });

      h.forEach((elT: any) => {
        elT.style.color = blackCol
      });

      btn.forEach((elT: any) => {
        elT.style.color = blackCol
      });

      typeWriter.forEach((elT: any) => {
        elT.style.color = blackCol
      });

      formDiv.style.color = blackCol;

    }
  })


  return (
    <div  className='toggleDiv'>
      <input onClick={changeBackGround} type='checkbox' id='toggleCheck'></input>
      <label htmlFor='toggleCheck' className='toggle'></label>
    </div>
  )
}

export default Toggle