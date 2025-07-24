import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout/Layout.jsx";

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(-1); // Go back to the last visited page
    }, 3000);

    return () => clearTimeout(timeout); // Cleanup
  }, [navigate]);

  return (
   <Layout>
     <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="text-center">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">404</h1>
        <p className="text-xl text-gray-800 mb-2">Oops! Page not found</p>
        <p className="text-gray-600 mb-6">You will be redirected shortly...</p>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
        >
          Go Back Now
        </button>
      </div>
    </div>
   </Layout>
  );
};

export default PageNotFound;
