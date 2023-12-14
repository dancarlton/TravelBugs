import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='absolute w-full flex justify-between items-center'>
      <div className='flex-1 bg-opacity-0'>
        <Link to='/' className='btn btn-ghost'>
          <img
            src='/public/icons/logos/logo-main.png'
            alt='TravelBugs Main Logo'
            className='h-8'
          />
        </Link>
      </div>
      <nav className='flex-none'>
        <ul className='menu menu-horizontal p-0'>
          <li>
            <Link to='/signin'>Sign in</Link>
          </li>
          <li>
            <Link
              to='/signup'
              className='btn btn-sm rounded-3xl bg-white text-black'
            >
              Sign up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
