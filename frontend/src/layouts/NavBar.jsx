import React from 'react'

const NavBar = () => {
  return (
    <nav className='absolute flex top-0 w-full z-10 bg-opacity-0 shadow-md items-center justify-between'>
      <img
        src='/src/assets/logos/logo-main.png'
        alt='TravelBugs Main Logo'
        className='top-3 left-24 w-20'
      />
      <div className='flex space-x-4'>
        <button>Sign In</button>

        <button>Start your Journey</button>
      </div>
    </nav>
  )
}

export default NavBar
