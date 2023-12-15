const SignUp = () => {
  return (
    <main className='map-background lg:h-full relative flex flex-col items-center justify-center h-screen'>
      <div className='full-overlay opacity-90 inset-0 lg:h-full'></div>
      <div className='z-10 text-center w-full px-4 py-6'>
        {' '}
        {/* Ensures the text is centered and has some padding */}
        <div>
          <h1 className='font-title text-4xl font-boldest'>
            Unlock Endless Adventures:
          </h1>
          <h3 className='font-title font-boldest text-3xl'>
            Start Exploring Today!
          </h3>
        </div>
      </div>
      <div className='flex items-center justify-center w-full'>
        {' '}

        <div className='bg-neutral-800 rounded-md shadow-xs w-[551px] h-[484px]'>
          <h3>Sign Up</h3>
        </div>
      </div>
    </main>
  )
}

export default SignUp
