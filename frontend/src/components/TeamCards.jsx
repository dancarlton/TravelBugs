import carlPhoto from '../assets/images/team/willsmith-christmas.png'

const TeamCards = () => {
  return (
    <div className='card w-64 glass rounded-xl'>
      <figure>
        <img
          src={carlPhoto}
          alt='carl!'
          className='w-full h-36 object-cover'
        />
      </figure>
      <div className='card-body items-center'>
        <h2 className='card-title font-title text-xl'>Dan Carlton</h2>
        <p className="text-green font-secondary">CEO & Chief Engineer</p>
        <p className='text-xs text-center text-gray-400 mb-4 font-secondary'>
          Lead Developer and visionary behind TravelBugs, driving innovation in
          travel technology
        </p>
        <div className='card-actions'>
          <a
            href='https://www.linkedin.com/in/dan-carlton/'
            title='LinkedIn'
            className='filter: invert brightness(60%)'
          >
            <img
              src='/socials/linkedin.png'
              alt='LinkedIn'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
          <a
            href='https://instagram.com/dancarlton'
            title='Instagram'
            className='filter: invert brightness(60%);'
          >
            <img
              src='/socials/instagram.png'
              alt='Instagram'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
          <a
            href='https://twitter.com/dancarlton_'
            title='Twitter'
            className='filter: invert brightness(60%);'
          >
            <img
              src='/socials/twitter.png'
              alt='Twitter'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
          <a
            href='https://www.tiktok.com/@dankarlton'
            title='Tik Tok'
            className='filter: invert brightness(60%);'
          >
            <img
              src='/socials/tik-tok.png'
              alt='Tik Tok'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default TeamCards
