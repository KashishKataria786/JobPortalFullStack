import { useEffect, useState } from 'react';
import Layout from '../components/Layout/Layout';
import axios from 'axios';
import { toast } from 'react-toastify';
import JobCard from '../components/ui/JobCard';
import JobPageHeroSection from '../components/ui/JobPageHeroSection';

const JobsPage = () => {
  const [jobData, setJobData] = useState([]);
  const [loading, setLoading] = useState(false);

  const GetALLJobsData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${import.meta.env.VITE_JOBS_URL}/get-all-jobs`);
      const jobs = response?.data?.data || [];
      setJobData(jobs);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Error in getting data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    GetALLJobsData();
  }, []);

  return (
    <Layout>
      <JobPageHeroSection />

      <div className="grid grid-cols-4">
        {/* Filter section */}
        <div className="p-4">
          Filter section
        </div>

        {/* Scrollable Job Cards Section */}
        <div
          className="col-span-3 p-6 bg-blue-50 rounded-xl"
          style={{ maxHeight: 'calc(100vh - 150px)', overflowY: 'auto' }} // 👈 scroll only this part
        >
            <h1 className='py-2 text-left text-2xl font-light'>Job for you</h1>
          {loading ? (
            <p className="text-blue-500 text-center">Loading jobs...</p>
          ) : jobData.length === 0 ? (
            <p className="text-gray-500 text-center">No jobs found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobData.map((item, index) => (
                <JobCard key={index} data={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default JobsPage;
