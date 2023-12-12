import React from 'react'

const Card = () => {
  return (
    <div className='relative h-[256px] w-[181px]'>
        <img
          src='/src/assets/images/quest1.jpg'
          alt=''
            className='w-full h-auto'
        />
        <div class='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50'></div>
      </div>
  )
}

export default Card
