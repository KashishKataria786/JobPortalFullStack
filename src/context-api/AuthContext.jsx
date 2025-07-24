import { jwtDecode } from 'jwt-decode';
import { createContext, useEffect, useState } from "react";
import {     useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState(null);
  const [loggedin, setLoggedin] = useState(null);
  const [loading, setLoading] = useState(true); 
  const Navigate = useNavigate();
  useEffect(() => {
    try {
      const token = localStorage.getItem('token');
      if (!token) throw new Error("No token found");

      const decoded = jwtDecode(token);
      if (decoded.exp * 1000 < Date.now()) {
        throw new Error("Token expired");
      }
      setUser(decoded);
      setRole(decoded?.role || null);
      setLoggedin(true);
    } 
    catch (err) {
      setUser(null);
      setRole(null);
    //   setLoggedin(false);
    //   localStorage.removeItem('token');
    } finally {
      setLoading(false); 
    }
  }, []);

  const LogOut = () => {
    localStorage.removeItem('token');
    setUser(null);
    setRole(null);
    setLoggedin(false);
    Navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ user, role, loggedin, loading, LogOut }}>
      {children}
    </AuthContext.Provider>
  );
};
