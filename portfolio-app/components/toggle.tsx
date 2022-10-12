import React, { useState, useEffect } from 'react';
function Toggle() {

  //change the body background color on toggle change
  const [isChecked, checkToggle]:[Boolean, any] = useState<Boolean>(false)

  const changeBackGround = ():void =>{
    checkToggle(!isChecked);
  }

  useEffect(() => {
  
    isChecked === true ? 
    document.body.style.backgroundColor = '#242424' :
    document.body.style.backgroundColor = '#ffffff'
  })
  
 
  return (
    <div className='toggleDiv'>
      <input onClick={changeBackGround}  type='checkbox' id='toggleCheck'></input>
        <label htmlFor='toggleCheck' className='toggle'></label>
    </div>
  )
}

export default Toggle