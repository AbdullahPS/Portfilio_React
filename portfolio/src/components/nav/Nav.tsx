import {useState} from 'react'
import {AiOutlineHome,AiOutlineContacts} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {BsFillChatLeftQuoteFill} from 'react-icons/bs'
import './nav.css'
const Nav = () => {
  const [activeClass,setActiveClass]=useState('#')

  return (
    <nav>
      <a href='#' className={activeClass==='#'? 'active': ''}><AiOutlineHome onClick={()=>setActiveClass('#')}/></a>
      <a href='#about' className={activeClass==='about'? 'active': ''}><SiAboutdotme onClick={()=>setActiveClass('about')}/></a>
      <a href='#testimonias' className={activeClass==='testimonias'? 'active': ''}><BsFillChatLeftQuoteFill onClick={()=>setActiveClass('testimonias')}/></a>
      <a href='#contact' className={activeClass==='contact'? 'active': ''}><AiOutlineContacts onClick={()=>setActiveClass('contact')}/></a>

    </nav>
  )
}

export default Nav