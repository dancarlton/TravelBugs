import { useEffect, useState } from 'react'
import Cards from '../../components/Cards'
import { Link } from 'react-router-dom'
import questData from '../../data/questData'

const Hero = () => {
  const [numberOfCards, setNumberOfCards] = useState(10)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setNumberOfCards(12) // 10 cards for large screens
      } else if (window.innerWidth >= 1000) {
        setNumberOfCards(8) // 8 cards for smaller screens
      } else if (window.innerWidth >= 767) {
        setNumberOfCards(8) // 9 cards for medium screens
      } else if (window.innerWidth >= 300) {
        setNumberOfCards(4)
      } else {
        setNumberOfCards(6)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='earth-background lg:h-full relative flex flex-col items-center'>
      <div className='half-overlay opacity-90 absolute top-0 left-0 right-0 mt-[15%] lg:h-full'></div>

      {/* Text & Button */}
      <div className=' relative text-center mt-20 md:mt-32 lg:mt-40 z-10'>
        <h1 className='font-title text-center text-2xl md:text-4xl lg:text-5xl font-bold'>
          Explore Locally. Thrive Globally:
        </h1>
        <h2 className='font-title text-xl px-2 md:px-4 md:text-3xl lg:text-4xl font-medium text-center'>
          Embark on Adventures, Earn Rewards, Support Local Business.
        </h2>
        <p className='font-secondary text-xs font-extralight md:text-sm lg:text-base text-center mx-auto px-1 my-5 w-5/6 lg:w-2/3'>
          Your Adventure, Your Rewards: Uncover Local Treasures, Achieve
          Milestones, and Boost Community Businesses with Every Completed Quest.
        </p>
        <Link
          to='/home'
          className='btn btn-success bg-green text-black font-light rounded-full mt-5'
        >
          Discover Quests
        </Link>
      </div>

      {/* Card Container */}
      <div className='w-3/4 sm:w-11/12 md:w-5/6 lg:w-9/12 2xl:w-5/12 mt-10 bg-neutral-800 rounded-lg overflow-visible z-40'>
        <div className='flex flex-wrap justify-center py-[30px] gap-x-2 gap-y-2 md:gap-x-4 md:gap-y-4 z-50'>
          {questData.slice(0, numberOfCards).map(card => (
            <Link to={`/${card.title}`} key={card.id}>
              <Cards
                key={card.id}
                className='small-card'
                imageUrl={card.imageUrl}
                title={card.title}
                creatorUserName={card.creatorUserName}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
