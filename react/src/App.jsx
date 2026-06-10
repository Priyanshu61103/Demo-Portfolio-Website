import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import About from './Components/About'
import Portfolio from './Components/Portfolio'
import Clients from './Components/Clients'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Portfolio/>
      <Clients/>
      <Contact/>
    </div>
  )
}

export default App