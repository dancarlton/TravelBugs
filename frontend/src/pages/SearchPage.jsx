import Badge from '../components/Badge'
import Header from '../layouts/Header'

const SearchPage = () => {
  return (
    <main>
      <Header />
      <section className='stars-background h-full w-full relative flex flex-col items-center'>
        <div className='mt-32 w-full px-6 md:px-20 lg:px-60 flex flex-col items-center'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-title font-medium tracking-widest mb-10 sm:w-9/12 md:w-full lg:w-11/12 text-center leading-8 '>
            Discover The <span className='font-boldest'>Perfect Quest</span> With An Effortless Search And Selection
          </h1>
          <div className='flex items-center w-11/12'>
            <img
              src='/icons/search.png'
              alt='Search Icon'
              className='absolute w-4 h-4 mx-5'
            />
            <input
              type='text'
              className='w-full h-10 pl-12 pr-5 text-md font-secondary font-normal leading-7 bg-[#3A3A3A] rounded-full border border-white outline-none focus:bg-white focus:border-white hover:bg-[#3A3A3A] hover:border-[#CACACA]'
              placeholder='What are you looking to do?'

            />
          </div>

          <div className='flex w-full items-center justify-between mt-6'>
            <div className='flex flex-wrap justify-center gap-x-2 gap-y-4'>
              <Badge />

            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default SearchPage
