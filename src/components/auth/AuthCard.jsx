import { useNavigate } from "react-router-dom";
import useAuthHook from "../customhooks/useAuthHook.jsx";

const AuthCard = () => {
  const { user, LogOut } = useAuthHook();
  const navigate = useNavigate();
  if (!user) {
    return (
      <div className="max-w-md mx-5 mt-5 p-6 bg-blue-50 text-blue-700 border space-y-4  flex flex-col justify-center items-center border-blue-200 rounded-lg text-center shadow-sm">
        <h2 className="text-xl font-semibold mb-2">Login First</h2>
        <p className="text-sm">Please <span className="font-semibold underline">login first</span> to view this information.</p>
        <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            onClick={()=>navigate('/login')}
            >Log in 
            </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-5 text-left space-y-3 mx-auto ">
      {/* Profile Section */}
      <div className="flex gap-5 items-center">
        <div className="h-[80px] w-[80px] rounded-full overflow-hidden border-2 border-blue-500 shadow-sm">
          <img
            src="https://avatar.iran.liara.run/public"
            alt="ProfilePic"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-gray-800">{user?.name}</h1>
          <p className="text-sm text-gray-600">{user?.email}</p>
          <span className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full uppercase tracking-wide">
            {user?.role}
          </span>
          <div className="space-x-2">
            <button
            className="mt-2 px-4 py-1.5 bg-pink-600 hover:bg-pink-700 text-white text-sm font-medium rounded-md transition"
      onClick={() =>
        user?.role === 'recruiter'
          ? navigate('/recruiter/dashboard')
          : navigate('/jobseeker/dashboard')
      }
    >
      Go to Dashboard
    </button>
            <button onClick={LogOut} className="mt-2 px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md transition">
                Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthCard;

