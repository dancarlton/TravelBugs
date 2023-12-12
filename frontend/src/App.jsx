import React from 'react'
import './index.css'
import Card from './components/Card'
import NavBar from './layouts/NavBar'
import HomePage from './pages/HomePage'

function App() {
  return (
    <main className='min-h-screen text-white'>
      <NavBar />
      <HomePage />
      <Card />
    </main>
  )
}

export default App
