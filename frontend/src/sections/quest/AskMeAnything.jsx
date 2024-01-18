import questionImage from '../../assets/images/quest-page/question.jpg'

const AskMeAnything = () => {
  return (
    <section className='flex lg:px-28 py-6 bg-dark'>
      <div className='flex flex-col w-full lg:w-3/5 gap-y-0 px-12 md:px-20 pb-0'>
        <h1 className='font-title text-4xl font-bold my-6 text-white'>
          Ask me Anything!
        </h1>
        <form action='' className='lg:w-2/3 flex flex-col gap-y-2'>
          {/* Input for the name */}
          <label
            htmlFor='name'
            className='font-secondary font-extrabold text-lg mb-0 text-white'
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
            className='font-secondary font-extrabold text-lg mb-0 text-white'
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
            className='font-secondary font-extrabold text-lg mb-0 text-white'
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
            className='bg-gray-500 text-white font-secondary rounded-lg py-2 px-2 mb-6'
          >
            Send message
          </button>
        </form>
      </div>
      <div className='w-2/5 lg:flex flex-col justify-center items-center lg:items-end gap-y-0 hidden'>
        <img
          src={questionImage}
          alt='Dog Raising Hand'
          className='w-full h-auto rounded-lg object-cover object-center shadow-lg'
        />
      </div>
    </section>
  )
}

export default AskMeAnything
