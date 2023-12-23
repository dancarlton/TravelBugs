import NavBar from '../layouts/NavBar'
import Footer from '../layouts/Footer'
import HeroSearch from '../sections/search/HeroSearch'
import CarouselsSearch from '../sections/search/CarouselsSearch'

const SearchPage = () => {
  return (
    <main className='flex flex-col min-h-screen overflow-x-hidden'>
      <NavBar />

      <div className='flex-1'>
        <HeroSearch />
        <CarouselsSearch />
      </div>

      <Footer />
    </main>
  )
}

export default SearchPage
