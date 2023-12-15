import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import HomePage from './pages/HomePage'
import SearchPage from './pages/SearchPage'
import TestPage from './pages/TestPage'
import SignUp from './pages/SignUp'

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/home' element={<HomePage />} />
      <Route path='/search' element={<SearchPage />} />
      <Route path='/signup' element={<SignUp />} />

      <Route path='/test' element={<TestPage />} />
    </Routes>
  )
}

export default App
