import React from 'react'
export default function SocialButton(props) {
  return (
    <div>
      <div className='socialBtn'>
        <h1>Crea una cuenta</h1>
            <div className='btnsocial'>
                <img src={props.img1} alt="Facebook" className='imganes'/>
                <img src={props.img2} alt="Github" className='imganes'/>
                <img src={props.img3} alt="linkedin" className='imganes'/>
            </div>
        <h3>O usa tu email para registrarte</h3>
      </div>
    </div>
  )
}
