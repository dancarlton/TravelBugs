const Footer = () => {
  return (
    <footer className='footer footer-center p-10 bg-base-200 text-base-content rounded align-bottom z-30'>
      <nav className='grid grid-flow-col gap-4 text-base'>
        <a className='link link-hover'>About us</a>
        <a className='link link-hover'>Contact</a>
        <a className='link link-hover'>Jobs</a>
        <a className='link link-hover'>Press kit</a>
      </nav>
      <nav>
        {/* Social Media Icons */}
        <div className='grid grid-flow-col gap-4'>
          <a
            href='https://discord.gg/2UaRXmWCyp'
            title='Discord'
            className='filter: invert brightness(90%);'
          >
            <img
              src='/socials/discord.png'
              alt='Discord Logo'
              width='27'
              height='27'
              className='fill-current'
            />
          </a>

          <a
            href='https://www.facebook.com/travelbugs.io'
            title='Facebook'
            className='filter: invert brightness(90%);'
          >
            <img
              src='/socials/facebook.png'
              alt='Facebook'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
          <a
            href='https://instagram.com/travelbugs.io'
            title='Instagram'
            className='filter: invert brightness(90%);'
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
            href='https://twitter.com/travelbugs_io'
            title='Twitter'
            className='filter: invert brightness(90%);'
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
            href='https://www.tiktok.com/@travelbugs.io'
            title='Tik Tok'
            className='filter: invert brightness(90%);'
          >
            <img
              src='/socials/tik-tok.png'
              alt='Tik Tok'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
          <a
            href=''
            title='Telegram'
            className='filter: invert brightness(90%);'
          >
            <img
              src='/socials/telegram.png'
              alt='Telegram'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
          <a
            href='https://github.com/dancarlton/TravelBugs'
            title='GitHub'
            className='filter: invert brightness(90%);'
          >
            <img
              src='/socials/github.png'
              alt='GitHub'
              width='24'
              height='24'
              className='fill-current'
            />
          </a>
        </div>
      </nav>

      <aside>
        <p className='text-xs md:text-sm'>
          Copyright © 2023 - All right reserved by TravelBugs LLC
        </p>
      </aside>
    </footer>
  )
}

export default Footer
