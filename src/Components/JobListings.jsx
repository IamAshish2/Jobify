import { useEffect, useState } from "react";
import React from "react";
import JobListing from "./JobListing";
import axios from "axios";
import Spinner from "../Components/Spinner";

const JobListings = ({ isHome = false }) => {
  let [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:8000/jobsData");
        setJobs(response.data);
      } catch (e) {
        console.log("error fetching data" + e);
      } finally {
        setLoading(false);
      }
    };
    fetchJobs();
  }, [jobs]);
  // slice if we are in the home page
  jobs = isHome ? jobs.slice(0, 3) : jobs;

  return (
    <div>
      <section className="bg-blue-50 px-4 py-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
            {isHome ? "Recent Jobs" : "Browse Jobs"}
          </h2>

          {loading ? <Spinner loading={loading} /> : <></>}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobListing key={job.id} job={job} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JobListings;
