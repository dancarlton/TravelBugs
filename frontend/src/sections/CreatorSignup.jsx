import rightArrow from '../assets/images/icons/right-arrow.png'

const CreatorSignup = () => {
  return (
    <section className='jeep-background bg-left relative flex justify-center items-center h-screen'>
      <div className='screen-overlay rotate-180 absolute top-0 left-0 right-0 bottom-0'></div>

      {/* Text & Button */}
      <div className='text-center px-4'>
        <h1 className='font-title text-4xl md:text-6xl lg:text-7xl leading-none md:leading-snug lg:leading-[88px]'>
          Become a Quest Creator
        </h1>
        <h3 className='font-title text-sm md:text-xl mt-4'>
          Income opportunities coming soon...
        </h3>
        <button className='btn btn-success bg-green text-black font-light rounded-full mt-5 items-center justify-center'>
          Sign Up
          <img src={rightArrow} alt='Right Arrow' className='ml-2 h-4 w-4' />
        </button>
      </div>
    </section>
  );
};

export default CreatorSignup;
