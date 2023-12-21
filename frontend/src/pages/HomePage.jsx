import Header from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import CarouselsHome from '../sections/home/CarouselsHome'
import HeroHome from '../sections/home/HeroHome'

const HomePage = () => {
  return (
    <main className='flex flex-col min-h-screen overflow-x-hidden'>

      <Header />

      <div className='flex-1'>
        <HeroHome />
        <CarouselsHome />
      </div>

      <Footer />

    </main>
  )
}

export default HomePage
