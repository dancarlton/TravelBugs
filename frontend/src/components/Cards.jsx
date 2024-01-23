import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ className, coverPhoto, questName, questCreator }) => {
  const [ quest, setQuest] = useState(null)

  useEffect(() => {
    const fetchQuest = async () => {
      const response = await fetch('https://localhost:3000/api/quests/')
      const json = await response.json()

      if (response.ok) {
          setQuest(json)
      }

    }
    fetchQuest()
  }, [])

  const formattedTitle = questName ? questName.replace(/\s+/g, '-').toLowerCase() : '';

  return (
    <Link to={`/quest/${questCreator}/${formattedTitle}`}>
      <div className={`${className}`}>
        <img title={questName} src={coverPhoto} alt={questName} className={className} />
      </div>
    </Link>
  )
}

Cards.propTypes = {
  questCreator: PropTypes.string,
  className: PropTypes.string,
  coverPhoto: PropTypes.string,
  questName: PropTypes.string,
  context: PropTypes.string,
}

export default Cards
