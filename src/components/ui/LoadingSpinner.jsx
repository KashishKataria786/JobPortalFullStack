
const LoadingSpinner = ({ size = "w-4 h-4", color = "text-blue-200" }) => {
  return (
    <div className={`flex justify-center items-center `}>
      <div className={`animate-spin rounded-full border-4 border-t-transparent   ${size} ${color}`} />
    </div>
  );
};

export default LoadingSpinner;
