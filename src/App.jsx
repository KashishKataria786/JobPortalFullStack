import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage.jsx'
import { ToastContainer } from 'react-toastify'
import Registerpage from './pages/auth/Registerpage.jsx'
import LoginPage from './pages/auth/LoginPage.jsx'
import RecruiterDashboard from './pages/recruitorPages/RecruiterDashboard.jsx'
import Unauthorized from './components/ui/Unauthorized.jsx'
import RoleProtectedRoutes from './components/ui/RoleProtectedRoutes.jsx'
import PageNotFound from './pages/PageNotFound.jsx'
import JobsPage from './pages/JobsPage.jsx'
import UserSavedJobs from './pages/jobseekerPages/UserSavedJobs.jsx'
import JobSeekerDashboard from './pages/jobseekerPages/JobSeekerDashboard.jsx'

function App() {

  return (
    <>
    <ToastContainer/>
    <Routes>
      <Route path ="/" element={<Homepage/>}/>
      <Route path ="/register" element={<Registerpage/>}/>
      <Route path ="/login" element={<LoginPage/>}/>
      <Route path ='/jobs' element={<JobsPage/>}/>
      <Route path ='/saved-jobs' element={<UserSavedJobs/>}/>
      
      <Route path ='/jobseeker/dashboard' element={<RoleProtectedRoutes allowedRoles={['jobseeker']}><JobSeekerDashboard/></RoleProtectedRoutes>}/>
      <Route path ='/recruiter/dashboard'element={
        <RoleProtectedRoutes allowedRoles={['recruiter']}><RecruiterDashboard/>
          </RoleProtectedRoutes>}/>
      <Route path ="/unauthorized" element={<Unauthorized/>}/>
      <Route path ="*" element={<PageNotFound/>}/>

    </Routes>
    </>
  )
}

export default App
