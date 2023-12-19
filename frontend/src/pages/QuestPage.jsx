import { useParams } from 'react-router-dom'
import NavBar from '../layouts/NavBar'
import questData from '../data/questData'
import QuestTitle from '../sections/quest/QuestTitle'
import Footer from '../layouts/Footer'

const QuestPage = () => {
  const { creatorUserName, formattedTitle } = useParams()

  const quest = questData.find(
    quest =>
      quest.creatorUserName === creatorUserName &&
      quest.title.replace(/\s+/g, '-').toLowerCase() === formattedTitle
  )

  if (!quest) {
    return <div>Quest not found</div>
  }

  return (
    <main className='bg-white h-screen'>
      <NavBar />
      <QuestTitle quest={quest} />


        <Footer />
    </main>
  )
}

export default QuestPage
