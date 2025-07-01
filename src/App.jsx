import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//Functions to create
//Navbar
//sections of the site

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <div className='Navbar-rectangle'>
        <div class="globe">
          <i class="fas fa-globe"></i>
        </div>
        <h3>Study in Japan</h3>
      </div>

  
    </div>
  )
}

export default App
