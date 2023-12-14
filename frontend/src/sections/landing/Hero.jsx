import { useEffect, useState } from 'react'
import dummyData from '../../data/dummyData'
import Card from '../../components/Card'
import { Link } from 'react-router-dom'

const Hero = () => {
  const [numberOfCards, setNumberOfCards] = useState(10)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setNumberOfCards(12) // 10 cards for large screens
      } else if (window.innerWidth >= 1000) {
        setNumberOfCards(8) // 8 cards for smaller screens
      } else if (window.innerWidth >= 767) {
        setNumberOfCards(9) // 9 cards for medium screens
      } else if (window.innerWidth >= 300) {
        setNumberOfCards(2)
      } else {
        setNumberOfCards(6)
      }
    }

    window.addEventListener('resize', handleResize)
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className='earth-background lg:h-full section relative flex flex-col items-center z-10'>
      <div className='screen-overlay absolute top-0 left-0 right-0 bottom-0'></div>

      {/* Text & Button */}
      <div className=' relative text-center mt-20 md:mt-32 lg:mt-40 z-10'>
        <h1 className='font-title text-center text-2xl md:text-4xl lg:text-5xl font-bold'>
          Explore Locally. Thrive Globally:
        </h1>
        <h2 className='font-title text-xl md:text-3xl lg:text-4xl font-medium text-center'>
          Embark on Adventures, Earn Rewards, Support Local Business.
        </h2>
        <p className='font-secondary text-xs font-extralight md:text-sm lg:text-base text-center mx-auto my-5 w-5/6 lg:w-2/3'>
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
      <div className='w-3/4 sm:w-11/12 md:w-5/6 lg:w-9/12 mt-10 bg-neutral-800 rounded-lg overflow-visible z-40'>
        <div className='flex flex-wrap justify-center py-[30px] gap-x-4 gap-y-4 z-50'>
          {dummyData.slice(0, numberOfCards).map(card => (
            <Link to={`/${card.title}`} key={card.id}>
              <Card
                title={card.title}
                imageUrl={card.imageUrl}
                className='small-card z-20'
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
