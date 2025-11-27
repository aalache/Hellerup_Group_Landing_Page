
import { useState } from 'react'
import './App.css'
import {Menu, Navbar} from './components'
import {Hero, Home} from './containers'

function App() {
  const [toggleNav, setToggleNav] = useState(false)
  return (
    <div className='relative '>
      <Navbar toggleNav={toggleNav} setToggleNav={setToggleNav}/>
      <Hero/>

      <Menu toggleNav={toggleNav} setToggleNav={setToggleNav}/>

    </div>
  )
}

export default App
