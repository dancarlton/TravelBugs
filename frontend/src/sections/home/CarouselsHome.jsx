import PropTypes from 'prop-types';
import Carousels from '../../components/Carousels';
import questTypes from '../../data/questTypes';
import questData from '../../data/questData';

const CarouselsHome = () => {
  // Filter quests for "Top 10" outside the map loop
  const top10Quests = questData.filter(quest => quest.tags.includes('Top 10'));

  return (
    <div className='relative w-full z-10 mt-20 min-h-screen mb-96'>
      {questTypes.slice(0, 5).map(type => {
        const filteredQuests = questData.filter(quest =>
          quest.tags.some(tag => type.tags.includes(tag))
        );

        return (
          <div key={type.id} className='ml-4 md:ml-10 lg:ml-12 mb-8'>
            <h2 className='text-xl font-bold mb-2'>{type.title}</h2>
            <div className='flex flex-col carousel'>
              <Carousels quests={filteredQuests} className='wide-card' context="regular" />
            </div>
          </div>
        );
      })}
      {/* Render Top 10 Quests Carousel */}
      <div className='ml-4 md:ml-10 lg:ml-12 mb-8'>
        <h2 className='text-xl font-bold mb-2'>Top 10 Quests</h2>
        <div className='flex-col carousel'>
          <p className='text-top-quest'>1</p>
          <Carousels quests={top10Quests} className='large-card -mt-5' context="Top 10" />
        </div>
      </div>

    </div>
  );
};

CarouselsHome.propTypes = {
  title: PropTypes.string, // This prop might be unnecessary if not used
};

export default CarouselsHome;
