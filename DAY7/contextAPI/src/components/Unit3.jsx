import React from 'react'
import Unit4 from './Unit4'

const Unit3 = ({user}) => {
  return (
    <div className='box'>
      hy {user} u r in Unit3
      <Unit4 user={user} />
    </div>
  )
}

export default Unit3
