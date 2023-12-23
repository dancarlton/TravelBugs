import stockImage from '../../assets/images/quest-page/shaman-dude.jpg'

const QuestContents = () => {
  return (
    <section className='bg-white py-24 px-6 lg:px-32  flex flex-row justify-between items-center'>
      {/* Quest Descriptions */}
      <div className='flex flex-col text-[48px] text-black font-title gap-y-16 mr-6'>
        <h1>Rewards</h1>
        <h1>Itinerary</h1>
        <h1>Planning</h1>
        <h1>Recommend</h1>
        <h1>Directions</h1>
      </div>

      {/* Itinerary  */}
      <div className='flex flex-col text-black font-secondary w-8/12 text-[18px]'>
        <h3 className='px-4 mb-4'>
          Whether you embark on solo adventures, romantic escapades, or create
          cherished family memories, Kathmandu unfolds in countless ways. Forget
          the usual tourist routes—imagine arriving in the heart of Kathmandu by
          bus or airplane, navigating multi-destinations effortlessly with our
          carefully crafted quests by your side. Let's elevate your journey
          together.
        </h3>
        <div className='border-t border-neutral-200'></div>

        <div className='collapse collapse-arrow bg-transparent'>
          <input type='radio' name='my-accordion-2' checked='checked' />
          <div className='collapse-title text-3xl font-medium font-title '>
            Day 1
          </div>
          <div className='collapse-content '>
            <p>
              On this day, you will first visit Tiananmen Square and Chairman
              Mao's Mausoleum. After that, hold your breath at the Forbidden
              City and Temple of Heaven, which will give you an insight into
              what Chinese imperial life is like.
            </p>
          </div>
          <div className='border-t border-neutral-200'></div>
        </div>

        <div className='collapse collapse-arrow bg-transparent '>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-3xl font-medium font-title '>
            Day 2
          </div>
          <div className='collapse-content  flex flex-row justify-between'>
            <p className='w-4/5 pr-24'>On this day, you will first visit Tiananmen Square and Chairman
              Mao's Mausoleum. After that, hold your breath at the Forbidden
              City and Temple of Heaven, which will give you an insight into
              what Chinese imperial life is like.</p>
              <img src={stockImage} alt="Shaman Dude" className='rounded-md h-72 w-72 mr-8'/>
          </div>
          <div className='border-t border-neutral-200'></div>
        </div>
        <div className='collapse collapse-arrow bg-transparent'>
          <input type='radio' name='my-accordion-2' />
          <div className='collapse-title text-3xl font-medium font-title '>
            Day 3
          </div>
          <div className='collapse-content '>
            <p>On this day, you will first visit Tiananmen Square and Chairman
              Mao's Mausoleum. After that, hold your breath at the Forbidden
              City and Temple of Heaven, which will give you an insight into
              what Chinese imperial life is like.</p>
          </div>
          <div className='border-t border-neutral-200'></div>
        </div>
      </div>
    </section>
  )
}

export default QuestContents
