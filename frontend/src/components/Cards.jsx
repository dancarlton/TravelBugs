import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Cards = ({ className, imageUrl, title, creatorUserName }) => {
  // const [ quests, setQuests] = useState(null)

  // useEffect(() => {
  //   const fetchQuest = async () => {
  //     const response = await fetch('https://localhost:3000/api/quests/')
  //     const json = await response.json()

  //     if (response.ok) {
  //         setQuests(json)
  //     }

  //   }
  //   fetchQuest()
  // }, [])

  const formattedTitle = title.replace(/\s+/g, '-').toLowerCase()

  return (
    <Link to={`/quest/${creatorUserName}/${formattedTitle}`}>
      <div className={`${className}`}>
        <img title={title} src={imageUrl} alt={title} className={className} />
      </div>
    </Link>
  )
}

Cards.propTypes = {
  creatorUserName: PropTypes.string,
  className: PropTypes.string,
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  context: PropTypes.string,
}

export default Cards
