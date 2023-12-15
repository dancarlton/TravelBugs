import { Link } from "react-router-dom"
import dummyData from "../data/dummyData"


const Carousel = ({ questTitle }) => {
  return (
    <div className="z-20">
      <h3 className='font-title text-lg font-bold mb-2 relative'>
       {/* Needs to be pulled form database */}
        {questTitle}
      </h3>
      <div className='carousel w-screen'>
        {dummyData.slice(0, 6).map(card => (
          <div key={card.id} className='carousel-item w-full mr-0 mb-8'>
            <Link to={`/${card.title}`} key={card.id}>
              <div>
                <img
                  src={card.imageUrl}
                  alt={card.title}
                  key={card.id}
                  className='wide-card mr-3'
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel
