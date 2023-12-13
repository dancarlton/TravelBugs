import PropTypes from 'prop-types';

const Card = ({className, imageUrl, title}) => {
  return (
      <div className={`${className}`}>
        <img src={imageUrl} alt={title} className={className} />
      </div>
  )
}
  // Hard Coded
    // <div className='relative'>
    //   <img
    //     src='/src/assets/images/quests/quest1.jpg'
    //     alt=''
    //     className='w-full h-full rounded-lg'
    //   />
    //   <div className='absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 rounded-lg'></div>
    // </div>

    Card.propTypes = {
      className: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    };

export default Card
