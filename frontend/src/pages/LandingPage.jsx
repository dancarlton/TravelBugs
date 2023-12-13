import { useEffect, useState } from 'react';
import Card from '../components/Card'
import dummyData from '../data/dummyData'

const LandingPage = () => {
  const [numberOfCards, setNumberOfCards] = useState(10); //

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1300) {
        setNumberOfCards(12); // 10 cards for large screens
      } else if (window.innerWidth >= 1000) {
        setNumberOfCards(8); // 8 cards for smaller screens
      } else if (window.innerWidth >= 767) {
        setNumberOfCards(6); // 8 cards for smaller screens
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='earth-background flex flex-col pt-20 items-center'>
      <h1 className='font-title text-center text-2xl md:text-4xl lg:text-5xl font-bold'>
        Explore Locally. Thrive Globally:
      </h1>
      <h2 className='font-title text-xl md:text-3xl lg:text-4xl font-medium text-center'>
        Embark on Adventures, Earn Rewards, Support Local Business.
      </h2>
      <p className='font-secondary text-xs font-extralight md:text-sm lg:text-base text-center mx-auto my-5 w-5/6 lg:w-1/2'>
        Your Adventure, Your Rewards: Uncover Local Treasures, Achieve
        Milestones, and Boost Community Businesses with Every Completed Quest.
      </p>
      <button className='btn btn-success sm:btn-sm md:btn-md bg-green text-black font-light rounded-full'>
        Discover Quests
      </button>

      <div
        className='absolute md:w-5/6 lg:w-9/12 mt-[300px] bg-neutral-800
        rounded-lg hiddenOnMobile overflow-hidden'
      >
        <div className='flex flex-wrap justify-center py-[30px] gap-x-4 gap-y-4'>
          {dummyData.slice(0, numberOfCards).map(card => (
            <Card
              key={card.id}
              title={card.title}
              imageUrl={card.imageUrl}
              className='small-card'
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default LandingPage
