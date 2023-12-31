import questionImage from '../../assets/images/quest-page/question.jpg'
import trail1 from '/overlays/trail1.svg'
import trail2 from '/overlays/trail2.svg'

const AskMeAnything = () => {
  return (
    <section className='flex lg:px-28 lg:py-6   '>
      <div className='flex flex-col lg:w-3/5 gap-y-0  pl-20 pb-0   '>
        <h1 className='font-title text-4xl font-bold my-6 text-white '>
          Ask me Anything!
        </h1>
        <form action='' className='lg:w-2/3 flex flex-col gap-y-2'>
          {/* Input for the name */}
          <label
            htmlFor='name'
            className='font-secondary font-extrabold text-lg mb-0'
          >
            Your name
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Enter your name'
            className='bg-white font-secondary rounded-lg py-2 px-2 mb-2'
          />

          {/* Input for the travel date */}
          <label
            htmlFor='date'
            className='font-secondary font-extrabold text-lg mb-0'
          >
            Your travel date
          </label>
          <input
            type='date'
            id='date'
            name='date'
            className='bg-white font-secondary rounded-lg py-2 px-2 mb-2'
          />

          {/* Text area for additional help */}
          <label
            htmlFor='help'
            className='font-secondary font-extrabold text-lg mb-0'
          >
            How can I help
          </label>
          <textarea
            id='help'
            name='help'
            rows='4'
            placeholder='Describe your request'
            className='bg-white font-secondary rounded-lg py-2 px-2 mb-6'
          ></textarea>

          {/* Submit button */}
          <button
            type='submit'
            className='btn-primary bg-gray-500 font-secondary rounded-lg py-2 px-2 mb-6'
          >
            Send message
          </button>
        </form>
        <img
          src={trail1}
          alt='Squiggly line'
          className='relative lg:bottom-[500px] lg:right-96 lg:w-[300px] lg:h-[450px] rounded-none shadow-lg -z-10 object-cover hidden lg:block'
        />
      </div>
      <div className='w-2/5 lg:flex flex-col justify-start gap-y-0 hidden'>
        <img
          src={questionImage}
          alt='Dog Raising Hand'
          className='w-full h-auto rounded-lg object-cover object-center'
        />
        <img
          src={trail2}
          alt='Squiggly line'
          className='relative -top-96 lg:left-[450px] lg:w-[196px] lg:h-[507px] rounded-none shadow-lg -z-10 hidden lg:block'
        />
      </div>
    </section>
  )
}

export default AskMeAnything
