import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const RecruiterRegister = ({ recruiter }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCpassword] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [role, setRole] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setRole(recruiter === true ? "recruiter" : "jobseeker");
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
    <div className="flex flex-col justify-center px-6 sm:px-12 lg:px-20  bg-white">
      <div className="w-full max-w-md mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Recruiter Registration</h2>

        <form className="space-y-5" onSubmit={handleRegistration}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={phoneno}
              onChange={(e) => setPhoneno(e.target.value)}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              placeholder="Re-enter password"
              value={cpassword}
              onChange={(e) => setCpassword(e.target.value)}
              className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              required
            />
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

export default RecruiterRegister;
