import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import { ToastContainer } from 'react-toastify'


function App() {

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path ="/" element={<Homepage/>}/>
    </Routes>
    </>
  )
}

export default App
