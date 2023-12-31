import Header from '../layouts/NavBar'
import Hero from '../sections/landing/HeroLanding'
import CreatorSignup from '../sections/landing/CreatorSignup'
import Info from '../sections/landing/Info'
import Footer from '../layouts/Footer'

const LandingPage = () => {
  return (
    <main>
      <Header />
      <Hero />
      <CreatorSignup />
      <Info />
      <Footer />
    </main>
  )
}

export default LandingPage
