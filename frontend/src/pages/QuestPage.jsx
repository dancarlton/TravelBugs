import { useParams } from 'react-router-dom'
import NavBar from '../layouts/NavBar'
import questData from '../data/questData'
import QuestTitle from '../sections/quest/QuestTitle'
import Footer from '../layouts/Footer'
import QuestContents from '../sections/quest/QuestContents'
import { useEffect } from 'react'
import AskMeAnything from '../sections/quest/AskMeAnything'
import ExplorerExperiences from '../sections/quest/ExplorerExperiences'
import OtherQuests from '../sections/quest/OtherQuests'

const QuestPage = () => {
  const { creatorUserName, formattedTitle } = useParams()

  useEffect(() => {
    window.scrollTo(0,0)
  },[creatorUserName, formattedTitle])

  const quest = questData.find(
    quest =>
      quest.creatorUserName === creatorUserName &&
      quest.title.replace(/\s+/g, '-').toLowerCase() === formattedTitle
  )

  if (!quest) {
    return <div>Quest not found</div>
  }


  return (
    <main className='bg-white max-h-screen flex flex-col' style={{ backgroundColor: 'white' }}>
      <NavBar />

      <QuestTitle quest={quest} />
      <QuestContents />
      <AskMeAnything />
      <ExplorerExperiences />
      <OtherQuests />

      <Footer />
    </main>
  )
}

export default QuestPage
