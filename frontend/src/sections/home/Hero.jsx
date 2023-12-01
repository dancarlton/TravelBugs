import dummyData from '/src/data/dummyData.js'
import Card from '/src/components/Card.jsx'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='earth-background relative flex h-1'>
      <div className='screen-overlay relative top-0 left-0 right-0 bottom-0'></div>

      {/* Text & Button */}
      <div className=' items-start mt-10  md:mt-32 lg:mt-32 ml-12 z-10'>
        <div className='mb-24'>
          <h1 className='font-title2 text-4xl md:text-4xl lg:text-7xl font-extrabold tracking-wide'>
            DISCOVER NEW HORIZONS
          </h1>
          <h2 className='font-secondary2 text-xl md:text-3xl lg:text-4xl font-thin tracking-tighter'>
            ERAofEXPLORATION
          </h2>
          <p className='font-secondary text-xs font-extralight md:text-sm lg:text-base my-5 w-5/6 lg:w-2/3'>
            Embark on a journey in your local area to begin earning rewards.
          </p>
          <Link
            to='/home'
            className='btn btn-sm btn-success bg-green text-black font-light rounded-full mr-4 '
          >
            AI Travel Guide
          </Link>
          <Link
            to='/home'
            className='btn btn-sm btn-ghost text-white border-white font-light rounded-full mt-5 h-5'
          >
            More info
          </Link>
        </div>
        {/* Carousel */}
        <div className='z-20 flex-col '>
          {/* Trending Now */}

          <h3 className='font-title text-lg font-bold mb-2 relative'>Trending Now</h3>
          <div className='carousel  rounded-box mb-8'>
            <div className='carousel-item flex-auto'>
              {dummyData.slice(0, 6).map(card => (
                <Link to={`/${card.title}`} key={card.id}>
                  <Card
                    title={card.title}
                    imageUrl={card.imageUrl}
                    className='wide-card mr-3'
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Hiking */}
          <h3 className='font-title text-lg font-bold mb-2'>Hiking</h3>
          <div className='carousel rounded-box mb-8'>
            <div className='carousel-item'>
              {dummyData.slice(0, 6).map(card => (
                <Link to={`/${card.title}`} key={card.id}>
                  <Card
                    title={card.title}
                    imageUrl={card.imageUrl}
                    className='wide-card mr-3'
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Date Night */}
          <h3 className='font-title text-lg font-bold mb-2'>Date Night</h3>
          <div className='carousel rounded-box mb-8'>
            <div className='carousel-item'>
              {dummyData.slice(0, 6).map(card => (
                <Link to={`/${card.title}`} key={card.id}>
                  <Card
                    title={card.title}
                    imageUrl={card.imageUrl}
                    className='wide-card mr-3'
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* 21+ */}
          <h3 className='font-title text-lg font-bold mb-2'>21+</h3>
          <div className='carousel rounded-box mb-8'>
            <div className='carousel-item'>
              {dummyData.slice(0, 6).map(card => (
                <Link to={`/${card.title}`} key={card.id}>
                  <Card
                    title={card.title}
                    imageUrl={card.imageUrl}
                    className='wide-card mr-3'
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Historic */}
          <h3 className='font-title text-lg font-bold mb-2'>Historic</h3>
          <div className='carousel rounded-box mb-8'>
            <div className='carousel-item'>
              {dummyData.slice(0, 6).map(card => (
                <Link to={`/${card.title}`} key={card.id}>
                  <Card
                    title={card.title}
                    imageUrl={card.imageUrl}
                    className='wide-card mr-3'
                  />
                </Link>
              ))}
            </div>
          </div>
          {/* Top 10 Quests Near You */}
          <h3 className='font-title text-lg font-bold mb-2'>
            Top 10 Quests Near You
          </h3>
          <div className='carousel rounded-box mb-8'>
            <div className='carousel-item'>
              {dummyData.slice(0, 10).map((card, index) => (
                <div className='relative' key={card.id}>
                  {/* Number Overlay */}
                  <p className='text-top-quest'>{index + 1}</p>
                  <Link>
                    <Card
                      title={card.title}
                      imageUrl={card.imageUrl}
                      className='large-card mr-3'
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Container */}
    </section>
  )
}

export default Hero
