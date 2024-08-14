import React from 'react'
import Group_4 from '../SB photos/Group 4.jpg'

function Carousel() {
  return (
    <>
     <div className="w-full h-auto overflow-hidden">
      <img
        src={Group_4}
        alt="Description"
        className="w-full h-auto object-cover"
      />
    </div>
    </>
  )
}

export default Carousel