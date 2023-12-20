import { Link } from "react-router-dom"
import PropTypes from 'prop-types'
import dummyData from "../data/dummyData"


const Carousels = ({ questTitle }) => {
  return (
    <div className="z-20">
      <h3 className='font-title text-lg font-bold mb-2 relative'>
       {/* Needs to be pulled form database */}
        {questTitle}
      </h3>
      <div className='carousel w-screen'>
        {dummyData.slice(0, 6).map(card => (
          <div key={card.id} className='carousel-item w-70 mr-0 mb-8'>
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

Carousels.propTypes = {
  questTitle: PropTypes.string,
  creatorUserName: PropTypes.string,
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Carousels
