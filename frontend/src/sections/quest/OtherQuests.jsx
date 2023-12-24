import Carousels from "../../components/Carousels"
import questData from "../../data/questData"


const OtherQuests = () => {
    const top10Quests = questData.filter(quest => quest.tags.includes('Historic'))

    return (
      <section className='py-16 pl-8 lg:pl-32 flex flex-col justify-between'>
        <div className='flex flex-row'>
        <h1 className='text-3xl lg:text-[48px] text-white font-title mr-6 font-thin mb-6'>
            Other quests you may like
          </h1>
        </div>
        <div className='flex flex-col carousel px-0'>
          <Carousels quests={top10Quests} className='square-card' />
        </div>
      </section>
    )
  }

export default OtherQuests
