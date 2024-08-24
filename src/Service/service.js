import axios from "axios";

export const getUser = async() => {
    const response = await axios.get("http://localhost:8000/user");
    return response.data;
}

export const getUserById = async(id) => {
    const response = await axios.get(`http://localhost:8000/user/${id}`);
    return response.data;
}