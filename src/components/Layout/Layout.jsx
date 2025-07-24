import { useLocation } from "react-router-dom"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import { useEffect, useState } from "react";
import PageTransitionSpinner from "../ui/PageTransitionSpinner.jsx";

const Layout = ({children}) => {

  const Location = useLocation();
  const [loading,setLoading]= useState(false);
  useEffect(()=>{
    setLoading(true);
    const timeout = setTimeout(()=>{
      setLoading(false);
    },1000)

    return  ()=>clearTimeout(timeout);
  },[location])

  return (
    <>
    {loading&&<PageTransitionSpinner/>}
    <Header/>
    <main className="min-h-screen">
        {children}
    </main>
    <Footer/>
    </>
  )
}

export default Layout
