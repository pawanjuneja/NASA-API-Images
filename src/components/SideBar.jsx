import React from 'react'

export default function SideBar(props) {
    const {handleToggleModal, apiData} = props;
  return (
    <div className='sidebar'>
        <div className='bgOverlay' onClick={() => {
            handleToggleModal()
        }}></div>
        <div className='sidebarContents'>
            <h2>{apiData.title}</h2>
            <div className='descriptionContainer'>
                <p className='descriptionTitle'>{apiData?.date}</p>
                <p>{apiData.explanation}</p>
            </div>
            <button onClick={() => {
                handleToggleModal()
            }}>
                <i className='fa-solid fa-arrow-right' />
            </button>
        </div>
    </div>
  )
}
