import { Navigate } from "react-router-dom";
import useAuthHook from "../customhooks/useAuthHook"
import PageTransitionSpinner from "./PageTransitionSpinner";

const RoleProtectedRoutes = ({ children, allowedRoles}) => {
    const {role, loading} = useAuthHook();
    if(loading)return <PageTransitionSpinner/>

    if(!role){
        return <Navigate to='/login'/>
    }
    if(!allowedRoles.includes(role)){
        return <Navigate to='/unauthorized'/>
    }
    return children
}

export default RoleProtectedRoutes
