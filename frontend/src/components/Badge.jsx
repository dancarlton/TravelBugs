
import { Link } from "react-router-dom"
import questTypes from "../data/questTypes"



const Badge = () => {
  return (
    <div>
      {questTypes.map((quest) => (
        <Link to={`${quest.title}`} key={quest.id} className='btn btn-sm btn-ghost text-white border-white font-light rounded-full mt-5 h-5'
        >
          {quest.title}
        </Link>
      ))}


    </div>
  )
}

export default Badge
