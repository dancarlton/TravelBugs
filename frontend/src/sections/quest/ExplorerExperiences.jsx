import Carousels from '../../components/Carousels'
import questData from '../../data/questData'

const ExplorerExperiences = () => {
  const top10Quests = questData.filter(quest => quest.tags.includes('Top 10'))

  return (
    <section className='bg-white py-16 pl-32 flex flex-col justify-between'>
      <div className='flex flex-row'>
        <h1 className='text-[48px] text-black font-title mr-6 font-thin mb-6'>
          My Explorers experiences
        </h1>
      </div>
      <div className='flex flex-col carousel px-0'>
        <Carousels quests={top10Quests} className='square-card' />
      </div>
    </section>
  )
}

export default ExplorerExperiences
