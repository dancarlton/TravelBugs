import { useEffect, useState } from 'react'
import Badge from '../components/Tags'
import Header from '../layouts/NavBar'
import questTypes from '/src/data/questTypes.js'
import Carousel from '../components/Carousels'
import Footer from '../layouts/Footer'

const SearchPage = () => {
  const [numberOfBadges, setNumberOfBadges] = useState(10)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setNumberOfBadges(11) // 10 Badges for large screens
      } else if (window.innerWidth >= 1000) {
        setNumberOfBadges(8) // 8 Badges for smaller screens
      } else if (window.innerWidth >= 767) {
        setNumberOfBadges(9) // 9 Badges for medium screens
      } else if (window.innerWidth >= 300) {
        setNumberOfBadges(4)
      } else {
        setNumberOfBadges(3)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const visibleBadges = questTypes.slice(0, numberOfBadges)

  return (
    <main>
      <Header />
      <section className='stars-background h-screen w-screen relative flex flex-col items-center'>
        <div className='screen-overlay opacity-90 absolute top-0 left-0 right-0 mt-[15%] lg:h-full'></div>

        <div className='mt-32 w-full flex flex-col items-center mb-20'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-title font-medium tracking-widest mb-10 w-10/12 lg:w-8/12 text-center leading-8'>
            Discover The <span className='font-boldest'>Perfect Quest </span>
            With An Effortless Search And Selection
          </h1>
          <div className='flex items-center w-3/4'>
            <img
              src='/icons/search.png'
              alt='Search Icon'
              className='absolute w-4 h-4 mx-5'
            />
            <input
              type='text'
              className='w-full h-10 pl-12 pr-5 text-md font-secondary font-normal leading-7 bg-[#3A3A3A] rounded-full border border-white outline-none focus:bg-white focus:border-white hover:bg-[#3A3A3A] hover:border-[#CACACA]'
              placeholder='What are you looking to do?'
            />
          </div>
          {/* Badges */}
          <div className='flex items-center justify-center mt-6'>
            <div className='flex-row justify-center gap-x-0 gap-y- w-full'>
              <Badge customStyle='search-badge' badgeData={visibleBadges} />
            </div>
          </div>
        </div>
        <div className='z-10 ml-10'>
          <Carousel questTitle='Top Quests Near You' />
          <Carousel questTitle='New Release' />
          <Carousel questTitle='Trending Now' />
          <Carousel questTitle='Recommended for You' />
          <Carousel questTitle='Popular' />
        </div>
      </section>

      <Footer />
    </main>
  )
}

export default SearchPage
