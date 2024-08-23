import React, { useEffect, useState } from "react";
import { createBrowserRouter } from "react-router-dom";
import { useLoaderData, useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/Spinner";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import EditJobPage from "./EditJobPage";

const JobPage = ({ deleteJob }) => {
  const { id } = useParams();
  const [job, setJob] = useState({});
  const [loading, setLoading] = useState(true);
  let [isEditing, setIsEditing] = useState(false);
  const navigate = useNavigate();

  const handleDeleteJob = (jobId) => {
    deleteJob(jobId);
    toast.success("Job Deleted Successfully!");
    navigate("/jobs");
  };

  useEffect(() => {
    try {
      const fetchJob = async () => {
        const res = await axios.get(`http://localhost:8000/jobsData/${id}`);
        setJob(res.data);
      };
      fetchJob();
    } catch (er) {
      console.log("error fetching data", err);
    } finally {
      setLoading(false);
    }
  }, []);

  loading ? <Spinner /> : "";

  return (
    <>
      {!isEditing && (
        <>
          <section>
            <div className={`container m-auto py-6 px-6`}>
              <Link
                to="/jobs"
                className="text-indigo-500 hover:text-indigo-600 flex items-center"
              >
                <FaArrowLeft className="mr-2"></FaArrowLeft> Back to Job
                Listings
              </Link>
            </div>
          </section>
          <section className="bg-indigo-50">
            <div className="container m-auto py-10 px-6">
              <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                <main>
                  <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                    <div className="text-gray-500 mb-4">{job.type}</div>
                    <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                    <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                      <FaMapMarker className="text-lg text-orange-700 mr-2"></FaMapMarker>
                      <p className="text-orange-700">{job.location}</p>
                    </div>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-indigo-800 text-lg font-bold mb-6">
                      Job Description
                    </h3>

                    <p className="mb-4">{job.description}</p>

                    <h3 className="text-indigo-800 text-lg font-bold mb-2">
                      Salary
                    </h3>

                    <p className="mb-4">{job.salary} / Year</p>
                  </div>
                </main>

                {/* <!-- Sidebar --> */}
                <aside>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-6">Company Info</h3>

                    {job.company && (
                      <>
                        {" "}
                        <h2 className="text-2xl">{job.company.name}</h2>
                        <p className="my-2">{job.company.description}</p>
                        <hr className="my-4" />
                        <h3 className="text-xl">Contact Email:</h3>
                        <p className="my-2 bg-indigo-100 p-2 font-bold">
                          {job.company.contactEmail}
                        </p>
                        <h3 className="text-xl">Contact Phone:</h3>
                        <p className="my-2 bg-indigo-100 p-2 font-bold">
                          {" "}
                          {job.company.contactPhone}
                        </p>
                      </>
                    )}
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                    <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                    <button
                      onClick={() => {
                        setIsEditing((prev) => !prev);
                      }}
                      className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                      Edit Job
                    </button>
                    <button
                      onClick={() => {
                        handleDeleteJob(job.id);
                      }}
                      className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                    >
                      Delete Job
                    </button>
                  </div>
                </aside>
              </div>
            </div>
          </section>
        </>
      )}
      ;
      {isEditing && (
        <div className="absolute top-0 left-0 w-full h-full bg-white z-50">
          <EditJobPage job={job}  onCancel={() => setIsEditing(false)}/>
        </div>
      )}
    </>
  );
};

// const jobLoader = async ({ params }) => {
//   const res = await axios.get(`http://localhost:8000/jobsData/${params.id}`);
//   return await res.data;
// };

export { JobPage as default };
