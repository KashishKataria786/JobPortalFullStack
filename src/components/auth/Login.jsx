import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import LoadingSpinner from "../ui/LoadingSpinner";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email,setEmail]= useState('');
  const [password,setPassword]= useState('');
  const navigate=useNavigate();
  const [loading,setLoading]= useState(false);

  const handleLogin=async(e)=>{
    e.preventDefault();
    setLoading(true);
    if(!email || !password){
      toast.error("Missing Credentials");
      setLoading(false);
      return;
    }
    try {
      const user = await axios.post(`${import.meta.env.VITE_AUTH_URL}/login-user`, {
        email:email,
        password:password
      })
      
      if(user?.data?.success===false){
        toast.error(user?.data?.message);
        setLoading(false);
        return;
      }
      toast.success("Loggin In!");
      localStorage.setItem("token",user?.data?.token);
      navigate('/jobs ')
    } catch (error) {
      toast.error("Error During Loging In!");
      setLoading(false);
      return;
    } finally{
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen grid md:grid-cols-2 bg-white text-left">
      {/* Left Image / Branding */}
      <div className="hidden md:flex items-center justify-center bg-blue-50">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/online-job-search-5015545-4185620.png"
          alt="Login Illustration"
          className="max-w-md"
        />
      </div>

      {/* Right Login Form */}
      <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Login</h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-3 text-sm text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-blue-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-600 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            >
              {loading?<div className="flex items-center justify-center gap-2"><LoadingSpinner/><span>Logging In</span></div>:"Sign in"}
            </button>
          </form>

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a href="/register" className="text-blue-600 hover:underline font-medium">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
