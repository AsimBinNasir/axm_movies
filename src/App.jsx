import React from 'react'
import HeroImage from '../src/Images/hero-img.png'
import Search from './components/Search'
import { useState } from 'react'

const App = () => {

  const [searchTerm, setSearchTerm] = useState('');
  return (
    <main>
      <div className ="pattern">
        <div className='wrapper'>
          <header>
            <img src ={HeroImage} alt="Hero Banner" />
            <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without Hassle</h1>
          </header>

          <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
          

        </div>

      </div>
    </main>
  )
}

export default App