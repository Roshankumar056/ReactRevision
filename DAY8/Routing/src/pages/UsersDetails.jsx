import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "../Styles/UsersDetails.css"
import { MoveLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const UsersDetails = () => {
    const[user,setUser]=useState(null)
    const navigate=useNavigate()
    
   const{userId}= useParams()
   
    
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((res)=>res.json())
        .then((data)=>setUser(data));
        
    },[])
  return (
    user &&(
    <div className="user-details">
        <MoveLeft onClick={()=>navigate("/users")} style={{color:"red"}}/>
      <h1>{user.name}</h1>

      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <h3>📍 Address</h3>
      <p>{user.address.street}, {user.address.suite}</p>
      <p>{user.address.city} - {user.address.zipcode}</p>
      <p><strong>Geo:</strong> {user.address.geo.lat}, {user.address.geo.lng}</p>

      <h3>🏢 Company</h3>
      <p><strong>Name:</strong> {user.company.name}</p>
      <p><strong>CatchPhrase:</strong> {user.company.catchPhrase}</p>
      <p><strong>BS:</strong> {user.company.bs}</p>
    </div>
    )
  )
}

export default UsersDetails
