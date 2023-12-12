import React from 'react'
import './index.css'
import Card from './components/Card'
import NavBar from './layouts/NavBar'

function App() {
  return (
    <div className='bg-black min-h-screen text-white'>
      <NavBar />
      <h1 className='font-title text-center text-3xl font-extrabold text-green'>
        TravelBugs
      </h1>
      <div className='font-title text-3xl font-extrabold'>
        This text uses DM Sans.
      </div>
      <div className='font-title2 text-2xl font-extrabold'>
        This text uses Manrope.
      </div>
      <div className='font-secondary text-md font-normal'>
        This text uses Barlow.
      </div>
      <Card />
    </div>
  )
}

export default App
