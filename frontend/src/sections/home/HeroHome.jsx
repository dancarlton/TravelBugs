import { Link } from 'react-router-dom'

const HeroHome = () => {
  return (
    <section className='relative flex '>
      <div className='earth-background absolute top-0 left-0 right-0 h-1/2 w-full'>
        <div className='half-overlay'></div>
      </div>

      {/* Text & Button */}
      <div className='items-start mt-28 lg:mt-32 ml-4 md:ml-10 lg:ml-12 z-10'>
        <div>
          <h1 className='font-title2 text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-wide'>
            DISCOVER NEW HORIZONS
          </h1>
          <h2 className='font-secondary2 text-xl md:text-3xl lg:text-4xl font-thin tracking-tighter'>
            ERAofEXPLORATION
          </h2>
          <p className='font-secondary text-xs font-extralight md:text-sm lg:text-base my-5 w-5/6 lg:w-2/3'>
            Embark on a journey in your local area to begin earning rewards.
          </p>
          <Link
            to='/home'
            className='btn btn-sm btn-success bg-green text-black font-light rounded-full mr-4 '
          >
            AI Travel Guide
          </Link>
          <Link
            to='/home'
            className='btn btn-sm btn-ghost text-white border-white font-light rounded-full mt-5 h-5'
          >
            More info
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
