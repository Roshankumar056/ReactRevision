import React, { useRef } from 'react'
const FileUpload = () => {

    const fileRef=useRef(null)

    const handelFileInput=()=>{
        console.log(fileRef.current.click());
        
    }
  return (
    <div>
        <h1>Upload file</h1>
      <input ref={fileRef} style={{display:"none"}} type="file" />
      <button onClick={handelFileInput}>Upload File</button>
    </div>
  )
}

export default FileUpload
