import { Link } from 'react-router-dom'

const DesktopSignUp = () => {
  return (
    <>
      {/* Background */}
      {}
      <main className='map-background flex flex-col items-center justify-center h-screen'>
        <div className='flex justify-start z-10'>
          <Link to='/' className='btn btn-ghost'>
            <img
              src='/icons/logos/logo-main.png'
              alt='TravelBugs Main Logo'
              className='h-8'
            />
          </Link>
        </div>
        <div className='full-overlay opacity-90 inset-0 lg:h-full'></div>
        {/* Contents */}
        
        <div className='flex flex-col items-center justify-center w-full h-full z-10 max-sm:hidden'>
          <div className='z-10 text-center w-full px-4 py-6'>
            <h1 className='font-title text-4xl font-boldest'>
              Unlock Endless Adventures:
            </h1>
            <h3 className='font-title font-boldest text-3xl'>
              Start Exploring Today!
            </h3>
          </div>
          {/* Sign Up */}
          <div className='flex items-center justify-center w-full'>
            <div className='bg-neutral-800 rounded-md shadow-xs w-[551px] h-[484px]'>
              <h3 className='font-title text-3xl font-bold text-center py-4'>
                Sign Up
              </h3>
              {/* Email */}
              <div className='flex flex-col items-start px-8 gap-y-6'>
                <div className='flex flex-col gap-y-4 w-full'>
                  <label htmlFor='email' className='font-secondary text-lg'>
                    Enter your email to sign up.
                  </label>
                  <input
                    type='text'
                    id='email'
                    name='email '
                    placeholder='Enter your email'
                    className='rounded-xl w-full bg-white pl-4 h-8 mb-1 -mt-1'
                  />
                  <button className='rounded-xl w-full bg-green h-8 text-black tracking-wide'>
                    Continue
                  </button>
                </div>
                {/* OAuth */}
                <div className='flex flex-col gap-y-4'>
                  <div className='flex flex-col w-full'>
                    <div className='divider divider-secondary text-gray-400 pb-0'>
                      OR
                    </div>
                  </div>
                  <h5 className='text-sm text-center text-gray-500 mt-[-20px] mb-2 px-3'>
                    By continuing, you agree to the updated{' '}
                    <span className='font-bold'>
                      <a href=''>Terms of Sale</a>
                    </span>
                    ,{' '}
                    <span className='font-bold'>
                      <a href=''>Terms of Service</a>
                    </span>
                    , and{' '}
                    <span className='font-bold'>
                      <a href=''>Privacy Policy</a>
                    </span>
                    .
                  </h5>
                  <button className='rounded-xl w-full bg-white h-8 text-black tracking-wide'>
                    Google
                  </button>
                  <button className='rounded-xl w-full bg-white h-8 text-black tracking-wide'>
                    Apple
                  </button>
                  <button className='rounded-xl w-full bg-white h-8 text-black tracking-wide'>
                    Facebook
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default DesktopSignUp
