import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../Components/Spinner";

const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const fetchJob = async () => {
        const res = await axios.get(`http://localhost:8000/jobsData/${id}`);
        console.log(res.data);
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

  return <div>Hello</div>;
};

export default JobPage;
