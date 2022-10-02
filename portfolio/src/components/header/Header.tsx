import React from 'react'
import './header.css'
import ME from '../../assets/me.png'

const Header = () => {
  return (
<div className="container container__head">
  <h5>Hello I'm</h5>
  <h1>Abdullah Tabbal</h1>
  <h5 className='text-light'>Front-End Developer</h5>
  <a href= "#" className='btn'>Download CV</a>
  <a href= "#Contact" className='btn btn-primary'>Let's Talk</a>
  <div className="me">
    <img src={ME} className='img' alt ="Image of Abdullah Tabbal"/>
  </div>
</div>
    )
}

export default Header