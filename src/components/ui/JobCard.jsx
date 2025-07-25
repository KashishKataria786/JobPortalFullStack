import { BiBookmarkAlt, BiLocationPlus } from "react-icons/bi";
import { SlCalender, SlShareAlt } from "react-icons/sl";
import { TiArrowBack } from "react-icons/ti";
import useAuthHook from "../customhooks/useAuthHook";
import { useNavigate } from "react-router-dom";

const JobCard = ({data}) => {
    const {user}= useAuthHook();
    const Navigate  = useNavigate();
  return (
    <div className="bg-white p-5 rounded-md  flex flex-col space-y-4 justify-between shadow-sm hover:shadow-xl">
        {/* Upper portion */}
        <div className="flex justify-between items-start text-left ">
            <div>
            <img className="h-[50px] w-[50px]" src={data?.company_logo ? data?.company_logo : `https://avatar.iran.liara.run/username?username${data?.company}`} alt="image"/>
        </div>
        <div className="flex gap-2 ">
            <h1 className="py-1 px-2 font-semibold text-sm text-gray-700 bg-orange-200 rounded-md ">Employee</h1>
            <SlShareAlt/>
            <BiBookmarkAlt/>
        </div>
        </div>
        {/* Mid portion */}
        <div className="text-left space-y-2 ">
            <h1 className="text-xl ">{data?.company}</h1>
            <h2 className="text-2xl">{data?.job_position}</h2>
                <ul className="flex gap-2 ">
                    {
                        data?.requirements?.map((item,index)=>{
                            return(
                               <li key={index} className="px-2 py-1 bg-green-200 rounded-sm text-[12px] ">{item}</li> 
    
                            )
                        })
                    }
                </ul>
        </div>
        {/* lower portion */}
        <div  className="space-y-2">
            <h1 className="font-light text-xl text-left my-2">100-200/yr</h1>
            <div className="flex items-center justify-between text-gray-500 font-semibold text-sm">
                <div className="flex gap-2 items-center">
                    <SlCalender/> <span>40hr/wk</span>
                </div>
                <div className="flex gap-2 items-center">
                    <BiLocationPlus/>
                    <h1>{data?.workMode}</h1>
                </div>
                <div className="flex gap-2 items-center">
                    <TiArrowBack/>
                    <h1>{data?.jobType}</h1>
                </div>
            </div>
            
            {!user? <button
              className="w-full bg-blue-500 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
            onClick={()=>Navigate('/login')}
            >Log in To View Full details
            </button>:<div className="flex items-center justify-between  grid grid-cols-2 gap-2 ">
                <button className="px-2 py-2 rounded-sm bg-blue-500 hover:shadow-sm hover:opacity-90 text-white font-semibold">Vew Details</button>
                <button className="px-2 py-2 rounded-sm bg-blue-500 hover:shadow-sm hover:opacity-90 text-white font-semibold">Save jobs</button>
            </div>}
        </div>
    </div>
  );
};

export default JobCard;
