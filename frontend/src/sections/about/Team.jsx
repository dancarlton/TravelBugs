import TeamCards from '../../components/TeamCards'

const Team = () => {
  return (
    <section className='flex flex-col items-center justify-center my-12'>
      <div className='flex flex-col items-center justify-center text-center w-screen lg:w-full mt-32'>
        <h1 className='font-title text-4xl mb-8 font-bold'>Our Team</h1>
        <p className='font-secondary text-gray-500 w-2/3 mb-8'>
          Meet the creative minds and dedicated professionals behind our
          success. Our team comprises diverse talents driven by passion,
          innovation, and a commitment to excellence. Get to know the
          individuals propelling us forward every day.
        </p>
      </div>
      <div className='flex flex-row mx-2 space-x-4'>
        <TeamCards />
        <TeamCards />
        <TeamCards />
        <TeamCards />
      </div>
    </section>
  )
}

export default Team
