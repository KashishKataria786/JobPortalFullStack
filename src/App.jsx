import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import { ToastContainer } from 'react-toastify'
import Registerpage from './pages/auth/Registerpage.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'


function App() {

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path ="/" element={<Homepage/>}/>
      <Route path ="/register" element={<Registerpage/>}/>
      <Route path ="/login" element={<LoginPage/>}/>

    </Routes>
    </>
  )
}

export default App
