import React, { useState, useEffect } from 'react'

function Toggle() {
  // console.log(toggleState);

  // console.log(handleClick);

  //change the body background color on toggle change
  const [isChecked, checkToggle]: [Boolean, any] = useState<Boolean>(false)

  const changeBackGround = (e: any): void => {
    // console.log(e.target.checked);
    checkToggle(e.target.checked)
  }
  // console.log(handleClick());

  useEffect(() => {
    let p: any
    let h: any
    let btn: any
    let expDiv: any
    let formDiv: any
    let detailsText: any
    let typeStr: any
    let navHeader: any
    let homeIcon: any
    let whiteBG: string = '#ffffff'
    let blackCol: string = '#111'
    p = document.querySelectorAll('p')
    h = document.querySelectorAll('h4')
    btn = document.querySelectorAll('button')
    expDiv = document.getElementById('expDiv')
    formDiv = document.getElementById('formDiv')
    navHeader = document.getElementById('navHeader')
    detailsText = document.querySelectorAll('.groupDiv')
    homeIcon = document.getElementById('homeIcon')
    typeStr = document.querySelectorAll('.typeStr')

    if (isChecked === true) {
      document.body.style.backgroundImage =
        'linear-gradient(80deg, #111 55%,blue 100%)'
      navHeader.style.backgroundImage =
        'linear-gradient(45deg, #fff -100%,#111 10%, #66b6fc 110%)'

      // console.log();
      homeIcon.children[0].setAttribute('fill', '#fff')

      p.forEach((elT: any) => {
        elT.style.color = whiteBG
      })

      h.forEach((elT: any) => {
        elT.style.color = whiteBG
      })
      formDiv.style.color = whiteBG

      btn.forEach((elT: any) => {
        elT.style.color = whiteBG
      })

      detailsText.forEach((elT: any) => {
        elT.style.color = whiteBG
      })

      typeStr.forEach((elT: any) => {
        elT.style.color = whiteBG
      })
    } else {
      // document.body.style.backgroundColor = '#ffffff';
      document.body.style.backgroundImage =
        'linear-gradient(80deg, #ffffff 10%, #e1e1e1 51%)'
      // console.log(document.body.style);
      navHeader.style.backgroundImage =
        'linear-gradient(45deg, #111 -100%,darkgray 10%, lightgrey 100% )'

      homeIcon.children[0].setAttribute('fill', '#111')
      p.forEach((elT: any) => {
        elT.style.color = blackCol
      })

      h.forEach((elT: any) => {
        elT.style.color = blackCol
      })

      btn.forEach((elT: any) => {
        elT.style.color = blackCol
      })

      detailsText.forEach((elT: any) => {
        elT.style.color = blackCol
      })

      typeStr.forEach((elT: any) => {
        elT.style.color = blackCol
      })

      formDiv.style.color = blackCol
    }
  })

  return (
    <div className="toggleDiv">
      <input
        onChange={changeBackGround}
        type="checkbox"
        id="toggleCheck"
      ></input>
      <label htmlFor="toggleCheck" className="toggle"></label>
    </div>
  )
}

export default Toggle
