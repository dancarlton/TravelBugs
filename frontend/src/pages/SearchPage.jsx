import Header from '../layouts/Header'

const SearchPage = () => {
  return (
    <main>
      <Header />
      <section className='relative flex flex-col items-center justify-center text-center min-h-screen'>
        <div className='stars-background absolute top-0 left-0 w-full h-full'></div>
        <div className='mt-32 w-full px-4 md:px-20 lg:px-60'>
          <h1 className='text-5xl font-title font-boldest tracking-widest mb-10'>
            Discover The Perfect Quest With An Effortless Search And Selection
          </h1>
          <div
            className='relative w-full max-w-lg mx-auto'
            style={{
              top: '269px',
              left: '322px',
              position: 'absolute',
              opacity: 1,
            }}
          >
            <input
              type='text'
              className='w-[800px] h-[52px] pl-[52px] pr-5 text-lg font-normal leading-7 bg-[#3A3A3A] rounded-[26px] border border-white outline-none focus:bg-white focus:border-white hover:bg-[#3A3A3A] hover:border-[#CACACA]'
              placeholder='What are you looking to do?'
              style={{ fontFamily: 'Manrope' }}
            />
            <img
              src='/icons/search.png'
              alt='Search Icon'
              className='absolute w-6 h-6'
              style={{ top: '20px', right: '20px' }}
            />
          </div>
          <div className='flex flex-row w-3/4'>
            <div className='text-center'>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
              <span className='badge'>Badge</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SearchPage
