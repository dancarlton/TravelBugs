import Header from '../layouts/Header'
import Hero from '../sections/Hero'
import CreatorSignup from '../sections/CreatorSignup'
import Info from '../sections/Info'
import Footer from '../layouts/Footer'

const LandingPage = () => {
  return (
    <main>
      <Header type='landing' />
      <Hero />
      <CreatorSignup />
      <Info />
      <Footer />
    </main>
  )
}

export default LandingPage
