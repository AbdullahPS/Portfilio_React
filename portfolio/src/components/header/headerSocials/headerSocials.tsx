import React from 'react'
import {FiLinkedin} from 'react-icons/fi'
import {FiGithub} from 'react-icons/fi'
 
const headerSocials = () => {
  return (
    <div className='header__socials'>
        <a href='https://www.linkedin.com/in/abdullahtabbal/' target="_blank"><FiLinkedin/></a>
        <a href='https://github.com/AbdullahPS' target="_blank"><FiGithub/></a>

    </div>
  )
}

export default headerSocials