import { useState } from "react"
import Layout from "../../components/Layout/Layout.jsx"
import JobSeekerRegister from "../../components/auth/JobSeekerRegister.jsx"
import RecruitorRegister from "../../components/auth/RecruitorRegister.jsx";
const Registerpage = () => {
    const [recruiter, setRecruiter]= useState(false);
  return (
    <Layout>
       <div className="min-h-screen h-full grid md:grid-cols-2 bg-white">
      {/* Illustration Side */}
      <div className="hidden md:flex items-center justify-center bg-blue-50">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-5015545-4185620.png  "
          alt="Register Illustration"
          className="max-w-md"
        />
      </div>

      {/* Form Side */}
      
      
     <div className="flex flex-col justify-center items-center text-left">
       {
        recruiter?<RecruitorRegister/>:<JobSeekerRegister/>
      }
      <p className="mt-6 text-center text-sm text-gray-600">
                {recruiter?"Looking for a job instead?":"Are you a Recruiter?"}{" "}
                <button onClick={()=>setRecruiter(!recruiter)} className="text-blue-600 hover:underline font-medium">
                  Register here
                </button>
      </p>
     </div>
    </div>
    </Layout>
  )
}

export default Registerpage
