import React from 'react'
import Unit6 from './Unit6'

const Unit5 = ({user}) => {
  return (
    <div className='box'>
    hy {user} u r in Unit5
      <Unit6 user={user}/>
    </div>
  )
}

export default Unit5
