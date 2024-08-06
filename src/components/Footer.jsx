import React from 'react'

export default function Footer(props) {
    const {apiData, handleToggleModal} = props
  return (
    <footer>
        <div className='bgGradient'>
            
        </div>
        <div>
            <h1>NASA API Test</h1>
            <h2>
                {apiData.title}
            </h2>
        </div>
        <button onClick={() => {
            handleToggleModal()
        }}>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}
