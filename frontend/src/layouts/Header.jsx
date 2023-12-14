import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='navbar absolute'>
      <div className='flex-1'>
        <a className='btn btn-ghost'>
          <img
            src='/public/icons/logos/logo-main.png'
            alt='TravelBugs Main Logo'
            className='left-24 max-sm:h-8 h-full'
          />
        </a>
      </div>
      <nav className='flex-none font-secondary h-8'>
        <ul className='menu menu-horizontal px-1 text-sm'>
          <li>
            <a>Sign in</a>
          </li>
          <li className='btn btn-sm xs:btn-xs rounded-3xl bg-white text-black'>
          <Link to='/signup' className='w-full rounded-3xl'>Sign up</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
