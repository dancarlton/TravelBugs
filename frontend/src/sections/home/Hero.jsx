import dummyData from '/src/data/dummyData.js'
import Card from '/src/components/Card.jsx'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='earth-background h-1'>
      <div className='screen-overlay absolute top-0 left-0 right-0 bottom-0 z-10'></div>

      {/* Text & Button */}
      <div className='z-20 relative items-start mt-10 mx-5 md:mt-32 lg:mt-40'>
        <div className='z-10 mb-10'>
          <h1 className='font-title2 text-4xl md:text-4xl lg:text-5xl font-extrabold'>
            DISCOVER NEW HORIZONS
          </h1>
          <h2 className='font-secondary2 text-xl md:text-3xl lg:text-4xl font-extrabold'>
            ERAofEXPLORATION
          </h2>
          <p className='font-secondary text-xs font-extralight md:text-sm lg:text-base my-5 w-5/6 lg:w-2/3'>
            Embark on a journey in your local area to begin earning rewards.
          </p>
          <Link
            to='/home'
            className='btn btn-success bg-green text-black font-light rounded-full mt-5 h-5'
          >
            AI Travel Guide
          </Link>
          <Link
            to='/home'
            className='btn btn-ghost text-white border-white font-light rounded-full mt-5 h-5'
          >
            More info
          </Link>
        </div>
        <Link></Link>
        {/* Trending Now */}
        <h3 className='font-title font-bold my-1'>Trending Now</h3>
        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {dummyData.slice(0, 6).map(card => (
              <Card
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                className='wide-card mr-3'
              />
            ))}
          </div>
        </div>
        {/* Hiking */}
        <h3 className='font-title font-bold my-1'>Hiking</h3>
        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {dummyData.slice(0, 6).map(card => (
              <Card
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                className='wide-card mr-3'
              />
            ))}
          </div>
        </div>
        {/* Date Night */}
        <h3 className='font-title font-bold my-1'>Date Night</h3>
        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {dummyData.slice(0, 6).map(card => (
              <Card
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                className='wide-card mr-3'
              />
            ))}
          </div>
        </div>
        {/* 21+ */}
        <h3 className='font-title font-bold my-1'>21+</h3>
        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {dummyData.slice(0, 6).map(card => (
              <Card
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                className='wide-card mr-3'
              />
            ))}
          </div>
        </div>
        {/* Historic */}
        <h3 className='font-title font-bold my-1'>Historic</h3>
        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {dummyData.slice(0, 6).map(card => (
              <Card
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                className='wide-card mr-3'
              />
            ))}
          </div>
        </div>
        {/* Top 10 Quests Near You */}
        <h3 className='font-title font-bold my-1'>Top 10 Quests Near You</h3>
        <div className='carousel rounded-box'>
          <div className='carousel-item'>
            {dummyData.slice(0, 6).map(card => (
              <Card
                key={card.id}
                title={card.title}
                imageUrl={card.imageUrl}
                className='large-card mr-3'
              />
            ))}
          </div>
        </div>
      </div>

      {/* Card Container */}
    </section>
  )
}

export default Hero
