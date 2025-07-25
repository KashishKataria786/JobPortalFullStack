import React from "react";
import { BiSearch } from "react-icons/bi";
import useAuthHook from "../customhooks/useAuthHook";
import AuthCard from "../auth/AuthCard";

const JobPageHeroSection = () => {
    const {user}= useAuthHook();
  return (
    <div className="grid grid-cols-4"> 
        <AuthCard/>
        <div className="bg-white  rounded-md p-6 mb-6 col-span-3">
      {/* Headline */}
      <div className="text-left space-y-2 mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Explore Your Next Opportunity</h1>
        <p className="text-gray-600 text-sm">
          Find jobs that match your skills and interests. Filter by location, job type, and more.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center border border-gray-300 rounded-md px-3 py-2 w-full md:w-1/2">
          <BiSearch className="text-xl text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search jobs by title, company..."
            className="outline-none w-full text-sm"
          />
        </div>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-auto">
          <option>All Job Types</option>
          <option>Full-time</option>
          <option>Part-time</option>
          <option>Internship</option>
        </select>
        <select className="border border-gray-300 rounded-md px-3 py-2 text-sm w-full md:w-auto">
          <option>All Locations</option>
          <option>Remote</option>
          <option>On-site</option>
          <option>Hybrid</option>
        </select>
        <button className="bg-blue-500 text-white px-5 py-2 rounded-md text-sm hover:bg-blue-600">
          Search
        </button>
      </div>
    </div>
    
    </div>
  );
};

export default JobPageHeroSection;
