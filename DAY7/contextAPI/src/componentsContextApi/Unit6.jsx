import React, { useContext } from 'react'
import { UserContext } from '../App'
const Unit6 = () => {
  const user=useContext(UserContext)
  console.log(user);
  
  return (
    <div className='box'>
      Unit6
    </div>
  )
}

export default Unit6
