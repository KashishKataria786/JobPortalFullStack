import { useEffect, useState } from "react";
import useAuthHook from "../../components/customhooks/useAuthHook.jsx"
import Layout from "../../components/Layout/Layout.jsx"
import { toast } from "react-toastify";
const UserSavedJobs = () => {
    const {user, token}= useAuthHook();
    const id= user?._id;
    const [savedJobs,setSavedJobs] = useState([]);

    const getSavedJobs= async()=>{
        try {
            const jobs= await axios.get(`${import.meta.env.VITE_USER_URL}/saved-jobs`, { headers: {
          Authorization: `${localStorage.getItem("token")}`,
        }
    }
    )
            console.log(jobs?.data?.success);
        } catch (error) {
            toast.error("Cannnot Get Saved Jobs");
            return;
        }
    }
    useEffect(()=>{
        getSavedJobs();
    },[])

  return (
    <Layout>
        <h1>Saved jobs Page</h1>
    </Layout>
  )
}

export default UserSavedJobs
