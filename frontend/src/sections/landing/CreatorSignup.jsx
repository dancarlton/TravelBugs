const CreatorSignup = () => {
  return (
    <section className='jeep-background lg:h-full  relative flex flex-col items-center'>

      {/* Two Overlays */}
      <div className='screen-overlay rotate-180 opacity-90 top-0 left-0 right-0 h-3/4'></div>
      <div className='screen-overlay opacity-50 top-0 left-0 right-0 bottom-0 '></div>

      {/* Text, Button & Arrow */}
      <div className='text-center pt-14 px-8 mt-28 relative z-10'>
        <h1 className='font-title text-3xl md:text-5xl lg:text-7xl leading-none md:leading-snug lg:leading-[88px]'>
          Become a Quest Creator
        </h1>
        <h3 className='font-title text-lg md:text-xl mt-4 lg:mb-4'>
          Income opportunities coming soon...
        </h3>
        <div className='flex flex-col items-center justify-center'>
          <button className='btn btn-success bg-green text-black font-light rounded-full mt-5 flex items-center justify-center'>
            Sign Up
            <img
              src='/icons/right-arrow.png'
              alt='Right Arrow'
              className=' h-4 w-4'
            />
          </button>
          {/* <div className='mt-14 md:mt-16 lg:mt-20 h-14 w-14 rounded-full border-2 border-white flex items-center justify-center'>
            <a className="scroll-smooth" href="#info-section">
              <img
                src='/icons/right-arrow.png'
                alt='Down Arrow'
                className='rotate-90 h-6 invert'
              />
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default CreatorSignup
