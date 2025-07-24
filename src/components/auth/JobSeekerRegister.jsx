import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // If using React Router

const JobSeekerRegister = ({recruiter}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setRole(recruiter === true ? "jobseeker" : "recruiter");
  }, [recruiter]);

  const handleRegistration = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !cpassword || !phoneno || !role) {
      toast.error("Missing Input Fields");
      return;
    }

    if (cpassword !== password) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const user = await axios.post(`${import.meta.env.VITE_AUTH_URL}/register-user`, {
        name: name,
        email: email,
        password: password,
        phone: phoneno,
        role: role
      });
      
      toast.success("Registration Successful");
      navigate('/dashboard');
    } catch (error) {
      toast.error("Cannot Register the Candidate");
    }
  };

  return (
     <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20">
        <div className="w-full max-w-md mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Job Seeker Registration</h2>

          <form className="space-y-5">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input
                type="tel"
                placeholder="9876543210"
                className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-blue-600"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Re-enter password"
                  className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm text-blue-600"
                >
                  {showConfirm ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
  );
};

export default JobSeekerRegister;
