import { Link } from 'react-router-dom'

const MobileLogin = () => {
  return (
    <main className='cave-background flex flex-col items-center justify-center h-screen py-12'>
      <div className='full-overlay opacity-90'></div>

      {/* Logo on top */}
      <div className='z-10 text-center w-full absolute top-0 left-0 right-0'>
        <div className='flex flex-col items-center justify-center mt-28'>
          {' '}
          {/* Increased padding here */}
          <Link to='/' className='btn btn-ghost'>
            <img
              src='/logos/logo-main.png'
              alt='TravelBugs Main Logo'
              className='h-20'
            />
          </Link>
          <h1 className='font-title text-white text-2xl mt-12'>
            Create an Account
          </h1>
        </div>
      </div>

      {/* Buttons in the middle */}
      <div className='z-10 w-full px-4 py-6 absolute'>
        <div className='flex flex-col gap-y-4'>
          <button className='flex items-center justify-center rounded-xl w-full bg-green h-14 text-black tracking-wide text-xl font-light'>
            <img
              src='/socials/mail.png'
              alt='Apple'
              className='h-5 w-5 mr-2 '
            />
            Continue with Email
          </button>
          <button className='flex items-center justify-center rounded-xl w-full border-white border-2 bg-transparent h-14 text-white tracking-wide text-xl font-light'>
            <img
              src='/socials/google.png'
              alt='Apple'
              className='h-5 w-5 mr-2 filter invert'
            />
            Continue with Google
          </button>
          <button className='flex items-center justify-center rounded-xl w-full border-white border-2 bg-transparent h-14 text-white tracking-wide text-xl font-light'>
            <img
              src='/socials/apple.png'
              alt='Apple'
              className='h-5 w-5 mr-2 filter invert'
            />
            Continue with Apple
          </button>
          <button className='flex items-center justify-center rounded-xl w-full border-white border-2 bg-transparent h-14 text-white tracking-wide text-xl font-light'>
            <img
              src='/socials/facebook.png'
              alt='Apple'
              className='h-5 w-5 mr-2 filter invert'
            />
            Continue with Facebook
          </button>
        </div>
      </div>

      {/* Terms at the bottom */}
      <h5 className='text-sm text-center text-white px-8 absolute bottom-40 z-10'>
        {' '}
        {/* Decreased bottom margin here */}
        By continuing, you agree to the{' '}
        <span className='font-bold'>
          <a href=''>Privacy Policy</a>
        </span>{' '}
        and{' '}
        <span className='font-bold'>
          <a href=''>Terms & Conditions</a>
        </span>
      </h5>

      {/* Login Link */}
      <div className='text-center mb-10 text-lg absolute bottom-0 right-0 left-0 z-10'>
        <Link to='/login' className='text-white'>
          Have an account?{' '}
          <span className='text-green underline font-bold'>
            <a href=''>Log In</a>
          </span>
        </Link>
      </div>
    </main>
  )
}

export default MobileLogin
