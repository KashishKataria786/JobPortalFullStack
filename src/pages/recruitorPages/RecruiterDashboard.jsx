import useAuthHook from '../../components/customhooks/useAuthHook.jsx'
import Layout from '../../components/Layout/Layout.jsx'

const RecruiterDashboard = () => {

  const {user,role, LogOut}= useAuthHook();

  return (
    <Layout>
      Recruiter Dashboard
      {JSON.stringify(user)}
      <button onClick={LogOut}>Logout</button>
      {role==='jobseeker'?<h1>Jobseeker</h1> :<h1>Recruitor</h1>}
    </Layout>
  )
}

export default RecruiterDashboard
