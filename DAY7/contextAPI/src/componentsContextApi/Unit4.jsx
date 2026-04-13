import React, { useContext } from 'react'
import Unit5 from '../componentsContextApi/Unit5'
import { UserContext } from '../App'

const Unit4 = () => {
const user=useContext(UserContext)
  return (
    <div className='box'>
      congrats {user} u r in Unit4
      <Unit5/>
    </div>
  )
}

export default Unit4
