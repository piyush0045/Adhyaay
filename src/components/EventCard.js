import React from 'react'
import { Link} from 'react-router-dom'

const EventCard = ({name,des,img}) => {
  return (
    <Link style = {{textDecoration:"none", width: 300, height: 200, color: 'white'}} to={`/event/${name}`} state={{des: des}}>
        <img src={img} style={{width: 200, height: 200}}/>
      <p>{name}</p>
    </Link>
  )
}

export default EventCard
