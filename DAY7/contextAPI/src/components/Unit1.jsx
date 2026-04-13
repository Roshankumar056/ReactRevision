import React from 'react'
import Unit2 from './Unit2'

const Unit1 = ({user}) => {
  return (
    <div className='box'>
     Hy {user} You are in Unit1
      <Unit2 user={user}/>
    </div>
  )
}

export default Unit1
