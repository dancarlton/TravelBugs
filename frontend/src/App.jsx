import './index.css'

import LandingPage from './pages/LandingPage'
import Header from './layouts/Header'
import Footer from './layouts/Footer'



function App() {
  return (
    <main className='min-h-screen text-white'>
      <Header />
      <LandingPage />
      <Footer />
    </main>
  )
}

export default App
