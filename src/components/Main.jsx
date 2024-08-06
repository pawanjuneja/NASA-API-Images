import React from 'react'

export default function (props) {
  const {apiData} = props

  return (
    <div className='imgContainer'>
        <img src={apiData?.hdurl} alt={apiData?.title} 
        className='bgImage'/>
    </div>
  )
}