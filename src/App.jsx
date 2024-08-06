import React, { useEffect, useState } from 'react'
import SideBar from './components/SideBar'
import Main from './components/Main'
import Footer from './components/Footer'

function App() {
  const NASA_KEY=import.meta.env.VITE_NASA_API_KEY;

  const [apiData, setApiData] = useState();
  const [showModal, setShowModal] = useState(false)


  function handleToggleModal() {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchAPIData() {
      const url = 'https://api.nasa.gov/planetary/apod'+`?api_key=${NASA_KEY}`;
      const today = (new Date()).toDateString()
      const localKey = `NASA-${today}`
      if (localStorage.getItem(localKey)) {
        const apiData = JSON.parse(localStorage.getItem(localKey))
        setApiData(apiData)
        return
      }

      try {
        const res = await fetch(url)
        const apiData = await res.json()
        localStorage.setItem(localKey, JSON.stringify(apiData))
        setApiData(apiData)
      } catch (err) {
        console.log(err)
      }

    }
    fetchAPIData();
  }, [])

  return (
    <>
      {apiData ? (<Main apiData={apiData}></Main>) : (
        <div className='loadingState'>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      {showModal && (<SideBar apiData={apiData} handleToggleModal={handleToggleModal}></SideBar>)}
      {apiData && (<Footer apiData={apiData} showModal={showModal} handleToggleModal={handleToggleModal}></Footer>)}
    </>
  )
}

export default App