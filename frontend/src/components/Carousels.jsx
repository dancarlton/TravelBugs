import PropTypes from 'prop-types'
import Cards from './Cards'

const Carousels = ({ quests, className }) => {
  return (
    <div className='carousel w-screen flex flex-grow'>
      {quests && quests.map(card => (
        <div key={card.id} className='carousel-item w-70 mr-0 mb-8'>
          <Cards
            title={card.title}
            imageUrl={card.imageUrl}
            creatorUserName={card.creatorUserName}
            className={`${className} mr-2`}
          />
        </div>
      ))}
    </div>
  )
}

Carousels.propTypes = {
  quests: PropTypes.array,
  className: PropTypes.string,
}

export default Carousels
