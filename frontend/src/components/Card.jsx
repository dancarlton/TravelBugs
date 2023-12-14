import PropTypes from 'prop-types'

const Card = ({ className, imageUrl, title }) => {
  return (
    <div className={`${className}`}>
      <img src={imageUrl} alt={title} className={className} />
    </div>
  )
}

Card.propTypes = {
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Card
