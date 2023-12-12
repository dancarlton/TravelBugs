import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar fixed'>
      <div className='flex-1'>
        <a className='btn btn-ghost'>
          <img
            src='/src/assets/logos/logo-main.png'
            alt='TravelBugs Main Logo'
            className='left-24 h-8'
          />
        </a>
      </div>
      <div className='flex-none font-secondary h-8'>
        <ul className='menu menu-horizontal px-1 text-sm'>
          <li>
            <a>Sign in</a>
          </li>
          <li className='btn btn-sm rounded-3xl bg-white text-black'>
          <Link to='/signup' className='w-full rounded-3xl'>Sign up</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar
