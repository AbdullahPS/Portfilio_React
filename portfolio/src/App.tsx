import React from 'react'
import './App.css'
import About from './components/about/About'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio'
import Testimonias from './components/testimonias/Testimonias'
const App = () => {
  return (
<>
<Header/>
<Nav/>
<About/>
<Portfolio/>
<Testimonias/>
<Contact/>
<Footer/>

</>
    )
}

export default App