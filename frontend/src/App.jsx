import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import SignUpPage from './pages/SignUp/SignUpPage.jsx'
import QuestPage from './pages/QuestPage'
import AboutPage from './pages/AboutPage.jsx'
import LoginPage from './pages/Login/LoginPage.jsx'

function App() {
  const location = useLocation()

  useEffect(() => {
    // Check if the current path is part of the 'quest' route
    if (location.pathname.includes('/quest/')) {
      document.body.style.backgroundColor = 'white'
    } else {
      document.body.style.backgroundColor = 'black'
    }
  }, [location]) // Depend on location to re-run effect when it changes

  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route
        path='/quest/:creatorUserName/:formattedTitle'
        element={<QuestPage />}
      />
    </Routes>
  )
}

export default App
