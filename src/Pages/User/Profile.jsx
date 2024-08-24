import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/profile.jpg";
import { getUser } from "../../Service/service";

const Profile = () => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    const fetchUser = async () => {
      const response = await getUser();
      setUser(response);
    };
    fetchUser();
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 max-w-md mx-auto">
      <div className="flex items-center">
        <img
          src={profilePicture}
          alt={`${user.name}'s profile`}
          className="h-20 w-20 rounded-full object-cover border-2 border-indigo-500"
        />
        <div className="ml-4">
          <h2 className="text-2xl font-semibold text-gray-900">{user.name}</h2>
          <p className="text-sm text-gray-600">{user.jobTitle}</p>
          <p className="text-sm text-gray-600">{user.location}</p>
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-xl font-medium text-gray-800">About Me</h3>
        <p className="text-sm text-gray-600 mt-2">{user.bio}</p>
      </div>

      <div className="mt-6 flex justify-between">
        <Link
          to={`/profile/edit/${user.id}`}
          className="text-indigo-600 hover:text-indigo-800 text-sm"
        >
          Edit Profile
        </Link>
        <Link
          to="/profile/settings"
          className="text-indigo-600 hover:text-indigo-800 text-sm"
        >
          Account Settings
        </Link>
      </div>
    </div>
  );
};

export default Profile;
