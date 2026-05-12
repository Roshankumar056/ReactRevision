import React from 'react'

const Child = ({details,test}) => {
    console.log("Child is render");
    test()
    
  return (
    <div>
        {details.name}
    </div>
  )
}

export default React.memo(Child)
