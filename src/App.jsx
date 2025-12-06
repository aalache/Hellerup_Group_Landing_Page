
import { useState } from 'react'
import './App.css'
import {Menu, Navbar} from './components'
import {About, Hero,Brands,Contact, Career, HugManagement} from './containers'

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className=' '>
      <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      <Menu toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      <Hero/>
      <About/>
      <Brands/>
      <HugManagement/>
      <Career/>
      <Contact/>

    </div>
  )
}

export default App
