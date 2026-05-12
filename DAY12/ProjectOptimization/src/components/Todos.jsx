import React, { useEffect, useState } from 'react'
import useMyFetch from '../Hooks/useMyFetch'

const Todos = () => {
const url="https://jsonplaceholder.typicode.com/posts"
   const {data,loading,err}= useMyFetch(url)
   console.log(data,loading,err);
   if(loading) return<div>Loading..............</div>
   
  return (
    <div>
      
    </div>
  )
}

export default Todos
