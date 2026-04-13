import React, { use } from 'react'
import Unit3 from './Unit3'

const Unit2 = ({user}) => {
  return (
    <div className='box'>
      hy {user} u r in Unit2
      <Unit3 user={user}/>
    </div>
  )
}

export default Unit2
