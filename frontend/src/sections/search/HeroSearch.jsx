import Tags from '../../components/Tags'
import questTypes from '../../data/questTypes'

const HeroSearch = () => {

  const visibleTags = questTypes.slice(0, 10)
  return (
    <section className='relative flex '>
      <div className='stars-background absolute top-0 left-0 right-0'></div>

      {/* Text & Button */}
      <div className=' mt-28 lg:mt-32 z-10'>
        <div className='flex flex-col items-center'>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-title font-medium tracking-widest mb-10 w-10/12 lg:w-8/12 text-center leading-8'>
            Discover The <span className='font-boldest'>Perfect Quest </span>
            With An Effortless Search And Selection
          </h1>
          <div className='flex items-center w-3/4'>
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
          {/* Tags */}
          <div className='flex flex-row mt-6 w-7/12 md:w-5/12 lg:w-8/12'>
            <div className='justify-center gap-x-0 w-full'>
              <Tags customStyle='search-Tag' tagData={visibleTags} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSearch
