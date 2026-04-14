import React, { useEffect, useState } from 'react'
import "../Styles/Users.css"
import { Link } from 'react-router-dom'
const Users = () => {
    const[users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((res)=>res.json())
        .then((data)=>setUsers(data));
        
        
    },[])
  return (
    <div className='users-list-container'>
        <h1 className='title'>Users</h1>
        <ul className='users-list'>
      {users.map((user)=>(
        <li className='user-item' key={user.id}>
            <strong>{user.name}</strong>
            <span>{user.email}</span>
            <button className='detail-btn'>
                <Link to={`/users/${user.id}`}>View Details</Link>
                </button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Users
