import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Badge = ({ badgeData, customStyle }) => {
  return (
    <div className="badge-container">
      {badgeData.map(item => (
        <Link to={`${item.title}`} key={item.id} className={`${customStyle}`}>
          {item.title}
        </Link>
      ))}
    </div>
  )
}


Badge.propTypes = {
  badgeData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  customStyle: PropTypes.string.isRequired,
}

export default Badge
