import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import MainLayout from "./Layouts/MainLayout";
import JobsPage from "./Pages/JobsPage";
import NotFoundPage from "./Pages/NotFoundPage";
import JobPage from "./Pages/JobPage";
import AddJobPage from "./Pages/AddJobPage";
import Profile from "./Pages/User/Profile";
import Login from "./Pages/auth/Login";
import Signup from "./Pages/auth/Signup";
import EditUserProfile from "./Pages/User/EditUserProfile";
import AccountSettings from "./Pages/User/AccountSettings";
import { addJob, editProfile, deleteJob } from "./Service/service";
import RedirectIfAuthenticated from "./Protected/RedirectIfAuthenticated";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={
            <RedirectIfAuthenticated>
              <Login />
            </RedirectIfAuthenticated>
          }
        />
        <Route
          path="/signup"
          element={
            <RedirectIfAuthenticated>
              <Signup />
            </RedirectIfAuthenticated>
          }
        />

        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobPage deleteJob={deleteJob} />} />
          <Route
            path="add-job"
            element={<AddJobPage addJobSubmit={addJob} />}
          />
          <Route path="profile" element={<Profile />} />
          <Route
            path="profile/edit/:id"
            element={<EditUserProfile editProfile={editProfile} />}
          />
          <Route path="profile/settings" element={<AccountSettings />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}

export default App;
