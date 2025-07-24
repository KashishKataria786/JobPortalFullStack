const PageTransitionSpinner = ({
  size = "w-8 h-8",
  color = "text-blue-500",
  bg = "bg-white",
}) => {
  return (
    <div className={`fixed inset-0 z-50 flex flex-col items-center justify-center opacity-90 ${bg}`}>
      <div
        className={`animate-spin rounded-full border-4 border-t-transparent ${size} ${color} border-current`}
      />
      {/* <h1 className="my-2 text-xl font-semibold text-blue-800">Loading...</h1> */}
      <div className="text-3xl animate-pulse font-bold text-blue-600">
          Offverse<span className="text-gray-800">Jobs</span>
        </div>
    </div>
  );
};

export default PageTransitionSpinner;