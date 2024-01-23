import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Tag from '../../components/Tags';

const QuestTitle = ({ match }) => { // Assuming 'match' is passed as a prop
  const [quest, setQuest] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuest = async () => {
      try {
        setIsLoading(true);
        const questId = match.params.questId; // Ensure questId is correctly obtained
        const response = await axios.get(`/api/quests/${questId}`);
        setQuest(response.data);
        setIsLoading(false);
      } catch (err) {
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchQuest();
  }, [match.params.questId]);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!quest) return <div>No quest found.</div>;

  const transformedTags = quest.tags.map((tag, index) => ({
    id: index,
    title: tag,
  }));

  const ratingStars = rating => {
    const MAX_STARS = 5;
    let stars = [];
    for (let i = 0; i < MAX_STARS; i++) {
      if (i < Math.floor(rating)) {
        stars.push(<img key={i} src='/icons/star.png' alt='star' className='inline-block w-4 h-4' />);
      } else if (i === Math.floor(rating) && rating % 1 !== 0) {
        stars.push(<img key={i} src='/icons/star-half.png' alt='Half Star' className='inline-block w-4 h-4' />);
      } else {
        stars.push(<img key={i} src='/icons/star.png' alt='Empty Star' className='inline-block w-4 h-4 grayscale opacity-50' />);
      }
    }
    return stars;
  };

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

      {/* title contents */}
      <div className='py-5 px-6 lg:px-36 flex flex-col text-black z-10 min-h-[55vh]' >
      <div className='flex flex-col lg:flex-row justify-between lg:mr-12'>
        {/* quest tags & ratings */}
          <div className='gap-x-2 flex flex-col items-center mb-4 lg:mb-0'>
            <Tag tagData={transformedTags} customStyle='search-tag' />
          </div>
        <div className='flex flex-col items-center mb-10'>

          <div className='flex gap-x-3 items-center lg:pr-12'>
            {ratingStars(quest.overallRating)}
            <img
              src='/icons/bookmark-empty.png'
              alt='Bookmark Icon'
              className='w-6 h-6'
            />
            <img
              src='/icons/share.png'
              alt='Bookmark Icon'
              className='w-6 h-6'
            />
            <img
              src='/icons/heart-empty.png'
              alt='Heart Icon'
              className='w-6 h-6'
            />
          </div>
        </div>
      </div>

        {/* quest title, description, button, avatar, and rating total */}
        <div className='flex flex-col lg:flex-row lg:justify-between lg:items-start pb-1'>
          <div className='flex flex-col gap-y-8 lg:w-3/5 h-1/2'>
            <h1 className='text-4xl lg:text-7xl'>{quest.title}</h1>
            <p className='text-lg w-full'>{quest.description}</p>
            <button className='bg-green text-black font-secondary btn btn-circle w-36 '>
              <img src='/icons/play.png' alt='Play Button' className='w-4' />
              Start Quest
            </button>
          </div>
          <div className='w-2/5'>

          <div className='avatar flex items-center gap-x-4 justify-center align-middle  mt-6 lg:mt-20'>
            <div className='w-24 rounded-full bg-gray-300'>
              <img src={quest.creatorProfilePic} />
            </div>
            <h3 className='font-secondary font-extrabold text-xl text-gray-400 whitespace-nowrap'>
              + {quest.ratingTotal.toLocaleString()}
            </h3>
          </div>
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
