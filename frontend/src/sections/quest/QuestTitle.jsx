import PropTypes from 'prop-types'
import Tag from '../../components/Tags'

const QuestTitle = ({ quest }) => {
  // Transform tags into the required format
  const transformedTags = quest.tags.map((tag, index) => ({
    id: index, // Assuming no unique ID is available
    title: tag,
  }))

  const ratingStars = rating => {
    const MAX_STARS = 5
    let stars = []
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < Math.floor(rating)) {
        // full stars
        stars.push(
          <img
            key={i}
            src='/icons/star.png'
            alt='star'
            className='inline-block w-4 h-4'
          />
        )
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        // half star
        stars.push(
          <img
            key={i}
            src='/icons/star-half.png'
            alt='Half Star'
            className='inline-block w-4 h-4'
          />
        )
      } else {
        // empty stars
        stars.push(
          <img
            key={i}
            src='/icons/star.png'
            alt='Empty Star'
            className='inline-block w-4 h-4 grayscale opacity-50'
          />
        )
      }
    }
    return stars
  }


  return (
    <section className='flex flex-col bg-white'>
      {/* quest image */}
      <div className='relative ' style={{ maxHeight: '45vh' }}>
        <img
          src={quest.imageUrl}
          alt={quest.imageAlt}
          className='quest-image'
        />
        <div className='quest-overlay'></div>
      </div>

      {/* Title Contents */}
      <div className='py-5 px-6 lg:px-36 w-full flex flex-col text-black z-10 '>
        {/* quest tags & ratings */}
        <div className='flex justify-between items-center mb-6 align-middle gap-y-4'>
          <div className='flex gap-x-2'>
            <Tag tagData={transformedTags} customStyle='search-tag' />
          </div>
          <div className='flex gap-x-3 items-center mr-40'>
            {ratingStars(quest.overallRating)}
            <img src="/icons/bookmark-empty.png" alt="Bookmark Icon" className='w-6 h-6' />
            <img src="/icons/share.png" alt="Bookmark Icon" className='w-6 h-6' />
            <img src="/icons/heart-empty.png" alt="Heart Icon" className='w-6 h-6' />

          </div>
        </div>

        {/* quest title, description, button, avatar, and rating total */}
        <div className='flex justify-between items-start'>
          <div className='flex flex-col gap-y-8 w-3/5'>
            <h1 className='text-6xl mt-12'>{quest.title}</h1>
            <p className='text-lg w-full'>{quest.description}</p>
            <button className='bg-green text-black font-secondary btn btn-circle w-36'>
              <img src='/icons/play.png' alt='Play Button' className='w-4' />
              Start Quest
            </button>
          </div>
          <div className='avatar flex items-center gap-x-4 justify-center align-middle mr-40 mt-20'>
            <div className='w-24 rounded-full bg-gray-300'>
              <img src={quest.creatorProfilePic} />
            </div>
            <h3 className='font-secondary font-extrabold text-xl text-gray-400 whitespace-nowrap'>
              + {quest.ratingTotal.toLocaleString()}
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}

QuestTitle.propTypes = {
  quest: PropTypes.shape({
    imageUrl: PropTypes.string,
    imageAlt: PropTypes.string,
    tags: PropTypes.string,
    overallRating: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    ratingTotal: PropTypes.number,
    creatorProfilePic: PropTypes.string,
  }).isRequired,
}

export default QuestTitle
