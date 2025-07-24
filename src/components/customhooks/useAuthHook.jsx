import { jwtDecode } from "jwt-decode";
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuthHook = ()=>{
    const [token,setToken] =useState(null);
    const [user,setUser] = useState(null);
    const [loading, setLoading]= useState(true);
    const [role,setRole]= useState(null);
    const navigate = useNavigate();
    useEffect(()=>{
        const storedToken = localStorage.getItem("token");
        if(storedToken){
            try {
                const decodedToken =jwtDecode(storedToken);
                setUser(decodedToken);
                setToken(storedToken);
                setRole(decodedToken.role);
            } catch (error) {
                    console.error("Invalid token", err);
                    localStorage.removeItem("token");
                    setUser(null);
                    setToken(null);
                    setRole(null);
            }
        }
        setLoading(false);
    },[])

    const LogOut = ()=>{
        localStorage.removeItem('token');
        setUser(null);
        setToken(null);
        setRole(null);
        navigate('/login');
    }

    return { user, role, token, LogOut, loading}

}

export default useAuthHook;