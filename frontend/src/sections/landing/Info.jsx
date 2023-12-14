const Info = () => {
  const roleInfo = [
    {
      name: 'Explorer',
      description:
        'Embark on quests to uncover local secrets, earn rewards, and build a vibrant community of like-minded explorers.',
    },
    {
      name: 'Creator',
      description:
        'Craft immersive quests, map out hidden gems and curate unique adventures for Explorers to embark upon.',
    },
    {
      name: 'Provider',
      description:
        'Turn your business into a must-visit destination with exclusive quest rewards and community connections.',
    },
  ]

  return (
    <div
      id='info-section'
      className='scroll-container section space-y-24 mx-8 lg:mx-36 my-32 2xl:mx-80'
    >
      {roleInfo.map((role, index) => (
        <div
          key={role.name}
          className={`flex flex-col lg:flex-row ${
            index % 2 !== 0 ? 'lg:flex-row-reverse' : ''
          } items-center`}
        >
          <div className='flex flex-col items-center lg:items-start space-y-6 w-full lg:w-5/12  md:px-8 lg:px-10 my-1/2 mb-8 lg:mb-0'>
            <h1 className='font-title text-4xl lg:text-5xl tracking-wider font-semibold'>
              {role.name}
            </h1>
            <p className='font-secondary text-center lg:text-start text-xs  lg:px-0 md:text-base lg:text-lg font-thin text-gray-500'>
              {role.description}
            </p>
            <div className='flex flex-row space-x-2'>
              <button className='btn btn-success bg-green text-black rounded-lg  h-0 md:w-32'>
                Try Now
              </button>
              <button className='btn btn-secondary bg-transparent border-transparent'>
                Learn More
              </button>
            </div>
          </div>
          <button className='w-full lg:w-7/12 px-4 md:px-10 lg:px-6 '>
            <img
              src={`/sections/${role.name.toLowerCase()}.jpg`}
              alt={`Image of a ${role.name}`}
              className='w-full h-80 lg:h-96 rounded-md object-cover'
            />
          </button>
        </div>
      ))}
    </div>
  )
}

export default Info
