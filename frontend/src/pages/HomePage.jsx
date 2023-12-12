import React from 'react'
import Card from '../components/Card'

const HomePage = () => {
  return (
    <div className='earth-background flex flex-col pt-28 items-center'>
      <h1 className='font-title text-center text-5xl font-bold'>
        Explore Locally. Thrive Globally:
      </h1>
      <h2 className='font-title text-4xl font-medium text-center'>
        Embark on Adventures, Earn Rewards, Support Local Business.
      </h2>
      <p className='font-secondary text-lg text-center font-bold mx-auto my-6 w-[50%]'>
        Your Adventure, Your Rewards: Uncover Local Treasures, Achieve
        Milestones, and Boost Community Businesses with Every Completed Quest.
      </p>
      <button className='btn btn-success sm:btn-sm md:btn-md bg-green text-black font-extralight rounded-full'>
        Discover Quests
      </button>

      <div className='absolute w-8/12 h-[570px] mt-[300px] bg-gray-900
      rounded-lg p-4'>
        <Card />
      </div>
    </div>
  )
}

export default HomePage
