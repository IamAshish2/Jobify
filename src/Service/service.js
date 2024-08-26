import axios from "axios";

// functions to perform actions at an api endpoint
  //add job
  export const addJob = async (newJob) => {
    const res = await axios.post("http://localhost:8000/jobsData", newJob);
    console.log(res);
};

    // delete  job request
export const deleteJob = async (id) => {
    const res = await axios.delete(`http://localhost:8000/jobsData/${id}`);
    console.log(res);
};

export const editProfile = async(editedProfile) => {
    const res = await axios.put("http://localhost:8000/user",editedProfile);
    console.log(res);
}

// api endpoint access for data fetching
export const getUser = async() => {
    const response = await axios.get("http://localhost:8000/user");
    return response.data;
}

export const getUserById = async(id) => {
    const response = await axios.get(`http://localhost:8000/user/${id}`);
    return response.data;
}

