import {
  BrowserRouter as Router,
  Routes,
  Route,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import EditJobPage from "./Pages/EditJobPage";
import axios from "axios";

function App() {
  //add job
  const addJob = async (newJob) => {
    const res = await axios.post("http://localhost:8000/jobsData", newJob);
  };

  // delete  job request
  const deleteJob = async (id) => {
    const res = await axios.delete(`http://localhost:8000/jobsData/${id}`);
  };
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route 
            path="jobs/:id"
            element={<JobPage deleteJob={deleteJob} />}
          />
          <Route
            path="add-job"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
