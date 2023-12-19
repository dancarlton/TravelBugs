import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Tag = ({ tagData, customStyle }) => {
  return (
    <div className="tag-container">
      {tagData.map(item => (
        <Link to={`${item.title}`} key={item.id} className={`${customStyle}`}>
          {item.title}
        </Link>
      ))}
    </div>
  )
}


Tag.propTypes = {
  tagData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  customStyle: PropTypes.string.isRequired,
}

export default Tag
