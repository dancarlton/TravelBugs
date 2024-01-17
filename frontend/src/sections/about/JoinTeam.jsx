import { Link } from "react-router-dom"

const JoinTeam = () => {
  return (
    <section className="px-32 my-24">
      <div className='flex items-center bg-white rounded-lg overflow-hidden shadow-lg my-10'>
        <div className='bg-gray-800 p-4 flex-1'>
          <h2 className=' font-semibold text-3xl'>Join Our Team</h2>
          <p>
          Do consectetur proident proident id eiusmod deserunt consequat pariatur ad ex velit do Lorem reprehenderit.
          </p>
          <Link
          to=''
          className='btn btn-success bg-green text-black font-light rounded-xl mt-5'
        >
          Explore careers
        </Link>
        </div>
        <div className='flex-1'>
          <img
            src='/public/backgrounds/cave.jpg'
            alt='Descriptive alt text'
            className='object-cover w-full h-fit'
          />
        </div>
      </div>
    </section>
  )
}

export default JoinTeam
