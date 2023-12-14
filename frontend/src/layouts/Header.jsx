import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Header = ({ type }) => {
  const headerStyles = {
    home: 'navbar-home',
    landing: 'navbar-landing',
    default: 'navbar',
  }

  const headerClass = headerStyles[type] || headerStyles.default

  return (
    <header
      className={`${headerClass} absolute w-full flex justify-between items-center`}
    >
      <div className='flex-1'>
        <Link to='/' className='btn btn-ghost'>
          <img
            src='/public/icons/logos/logo-main.png'
            alt='TravelBugs Main Logo'
            className='h-8'
          />
        </Link>
      </div>

      {type === 'landing' && (
        // Landing page header layout
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
      )}

      {type === 'home' && (
        // Home header layout
        <div className='navbar bg-base-100'>
          <div className='flex-none gap-2'>
            <div className='form-control'>
              <input
                type='text'
                placeholder='Search'
                className='input input-bordered w-24 md:w-auto'
              />
            </div>
            <div className='dropdown dropdown-end'>
              <div
                tabIndex={0}
                role='button'
                className='btn btn-ghost btn-circle avatar'
              >
                <div className='w-10 rounded-full'>
                  <img
                    alt='Tailwind CSS Navbar component'
                    src='https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg'
                  />
                </div>
              </div>
              <ul
                tabIndex={0}
                className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52'
              >
                <li>
                  <a className='justify-between'>
                    Profile
                    <span className='badge'>New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a>Logout</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {type === 'default' && (
        // Default header layout
        <div>
          
        </div>
      )}
    </header>
  )
}

Header.propTypes = {
  type: PropTypes.oneOf(['home', 'landing', 'default']).isRequired,
}

export default Header
