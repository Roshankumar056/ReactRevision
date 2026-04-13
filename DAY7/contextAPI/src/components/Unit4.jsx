import React from 'react'
import Unit5 from './Unit5'

const Unit4 = ({user}) => {
  return (
    <div className='box'>
     hy {user} u r in  Unit4
      <Unit5 user={user}/>
    </div>
  )
}

export default Unit4
