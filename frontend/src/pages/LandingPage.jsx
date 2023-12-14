import Header from '../layouts/Header'
import Hero from '../sections/landing/Hero'
import CreatorSignup from '../sections/landing/CreatorSignup'
import Info from '../sections/landing/Info'
import Footer from '../layouts/Footer'

const LandingPage = () => {
  return (
    <main className='snap-y snap-mandatory'>
      <Header />
      <Hero />
      <CreatorSignup />
      <Info />
      <Footer />
    </main>
  )
}

export default LandingPage
