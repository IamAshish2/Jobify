import React, { useEffect, useState } from "react";
import Profile from "../../assets/profile.jpg";
import { getUser } from "../../Service/service";
import { useNavigate, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { toast } from "react-toastify";

const EditUserProfile = ({ editProfile }) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserById = async () => {
      try {
        const response = await getUser();
        setUser(response);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserById();
  }, [id]);

  const [formData, setFormData] = useState({
    name: "",
    jobTitle: "",
    location: "",
    bio: "",
    profilePicture: Profile,
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name,
        jobTitle: user.jobTitle,
        location: user.location,
        bio: user.bio,
        profilePicture: user.profilePicture || Profile,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    editProfile(formData);
    toast.success("Edited Successfully!");
    navigate("/profile");
  };

  const handleBack = () => {
    navigate("/profile")
  }

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
     
      <div className="flex items-center mb-6">
        <button onClick={handleBack} className="text-gray-600 hover:text-gray-900">
          <BiArrowBack className="h-6 w-6" />
        </button>
        <h2 className="text-2xl font-semibold text-gray-900 ml-2">Edit Profile</h2>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            type="text"
            name="jobTitle"
            id="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="location"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formData.location}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="bio"
          >
            Bio
          </label>
          <textarea
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            rows="4"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-sm font-medium text-gray-700"
            htmlFor="profilePicture"
          >
            Profile Picture
          </label>
          <div className="mt-1 flex items-center">
            <img
              src={formData.profilePicture}
              alt="Profile Preview"
              className="h-16 w-16 rounded-full object-cover mr-4 border border-gray-300"
            />
            <input
              type="file"
              name="profilePicture"
              id="profilePicture"
              accept="image/*"
              onChange={handleImageChange}
              className="mt-1 block"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUserProfile;
