import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Functions to create
//Navbar
//sections of the site

const Navbar = () => {
  return(
<div className='Navbar-rectangle'>
        <div class="globe">
          <i class="fas fa-globe"></i>
        </div>
        <h3>Study in Japan</h3>
        <div class="boxinthemid"> </div>
        <h4 className='linksinnav'>生徒の様子</h4>
      </div>
)}

const Landingbox = () =>{
  return(
    <div className='First-box'>
      <div className='titlesandstuff'>
      <div className='titlesandstuff2'>

        <h3 className='kokunairyuu'>国内留学</h3>
        <h4 className='atarashiimana'>新しい学びの形</h4>
      </div>
      </div>
    </div>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      
    <Landingbox/>

    </div>
  )
}

export default App
