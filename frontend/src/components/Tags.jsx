import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Tags = ({ tagData }) => {
  return (
    <div className='tag-container'>
      {tagData.map(item => (
        <Link to={`${item.title}`} key={item.id} className='search-tag'>
          {item.title}
        </Link>
      ))}
    </div>
  )
}

Tags.propTypes = {
  tagData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default Tags
