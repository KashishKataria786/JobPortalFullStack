import { useNavigate } from "react-router-dom";

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <div className="flex items-center justify-center min-h-screen bg-red-50 px-4">
      <div className="text-center max-w-md">
        <div className="text-6xl font-bold text-red-600 mb-2">401</div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Unauthorized Access</h2>
        <p className="text-gray-600 mb-6">
          You don’t have permission to view this page. Please login with appropriate credentials or contact admin.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => navigate("/")}
            className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          >
            Back to Home
          </button>
          <button
            onClick={() => navigate("/login")}
            className="px-5 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
          >
            Login Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
