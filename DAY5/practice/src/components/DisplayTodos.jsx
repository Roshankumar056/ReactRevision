import React from 'react'

const DisplayTodos = (props) => {
    const {id,title,completed}=props.data
  return (
   
                       <tr>
            <td>{id}</td>
             <td>{title}</td>
              <td style={{ color: completed ? "green" : "red" }}>
  {completed ? "True" : "False"}
</td>
        </tr>
       
   
   
  )
}

export default DisplayTodos
