import { Link } from "react-router-dom"

const CreatorSignup = () => {
  return (
    <section className='jeep-background lg:h-full relative flex flex-col items-center'>

      {/* Two Overlays */}
      <div className='half-overlay rotate-180 opacity-90 top-0 left-0 right-0 h-3/4'></div>
      <div className='half-overlay opacity-70 top-0 left-0 right-0 bottom-0 '></div>

      {/* Text, Button & Arrow */}
      <div className='text-center py-28 px-8 mt-28 relative z-10'>
        <h1 className='font-title text-3xl md:text-5xl lg:text-7xl leading-none md:leading-snug lg:leading-[88px]'>
          Become a Quest Creator
        </h1>
        <h3 className='font-title text-lg md:text-xl mt-4 lg:mb-4'>
          Income opportunities coming soon...
        </h3>
        <div className='flex flex-col items-center justify-center'>
          <Link to='/signup' className='btn btn-success bg-green text-black font-light rounded-full mt-5 flex items-center justify-center'>
            Sign Up
            <img
              src='/icons/right-arrow.png'
              alt='Right Arrow'
              className=' h-4 w-4'
            />
          </Link>
          
        </div>
      </div>
    </section>
  )
}

export default CreatorSignup
