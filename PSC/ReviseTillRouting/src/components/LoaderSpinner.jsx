import React from 'react'
import { Audio } from 'react-loader-spinner'
const LoaderSpinner = () => {
  return (
     <Audio 
      height="80"
      width="80"
      color="#4fa94d"
      ariaLabel="audio-loading"
      wrapperStyle={{}}
      wrapperClass="wrapper-class"
      visible={true}
    />
  )
}

export default LoaderSpinner
