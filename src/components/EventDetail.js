import React from 'react'
import { useLocation } from 'react-router-dom'

const EventDetail = () => {
    const route = useLocation();
    const {des} = route.state;
    // console.log("Description",des)
  return (
    <div>
      <p style = {{marginTop:"150px",fontWeight:"bold"}}>{des}</p>
    </div>
  )
}

export default EventDetail
