import { Link } from 'react-router-dom'

const MobileSignup = () => {
  return (
    <div className='cave-background flex flex-col items-center justify-center'>
      <div className='full-overlay opacity-60'></div>
      <div className='z-10 text-center w-full px-4 py-6'>
        <div className='flex flex-col gap-y-6 '>
          <Link to='/' className='btn btn-ghost'>
            <img
              src='/icons/logos/logo-main.png'
              alt='TravelBugs Main Logo'
              className='h-14'
            />
          </Link>
          <h1 className='font-title text-white text-xl '>Create an Account</h1>
        </div>
        {/* /************************************
                        Auths
         ************************************/}

        <div className='flex flex-col gap-y-4'>
          <button className='rounded-xl w-full bg-green h-14 text-black tracking-wide'>
            Continue with Email
          </button>
          <button className='rounded-xl w-full bg-white h-14 text-black tracking-wide'>
            Continue with Google
          </button>
          <button className='rounded-xl w-full bg-white h-14 text-black tracking-wide'>
            Continue with Apple
          </button>
          <button className='rounded-xl w-full bg-white h-14 text-black tracking-wide'>
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  )
}

export default MobileSignup
