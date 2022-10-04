import React from 'react'
import './header.css'
import ME from '../../assets/me.png'
import CV from '../../assets/cv.pdf'
import HeaderSocials from './headerSocials/headerSocials'

const Header = () => {
  return (
<div className="container header__container">
  <h5>Hello I'm</h5>
  <h1>Abdullah Tabbal</h1>
  <h5 className='text-light'>Front-End Developer</h5>
  <div className='CTA'>
  <a href= {CV} download className='btn'>Download CV</a>
  <a href= "#Contact" className='btn btn-primary'>Let's Talk</a>
  </div>
  <div className="me">
    <img src={ME} className='img' alt ="Image of Abdullah Tabbal"/>
  </div>
  <a href='#contact' className='scroll__down'>Scroll Down</a>
  <HeaderSocials/>

</div>
    )
}

export default Header