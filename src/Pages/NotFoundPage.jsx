import React from "react";
import logo from "../assets/logo.png";
import err from "../assets/bg.png";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center w-full min-h-screen bg-gray-100">
      <div className="w-full md:w-[50%] flex flex-col justify-center items-center p-6 md:p-12">
        {/* logo and text */}
        <img className="h-24 md:h-32 mb-6" src={logo} alt="jobify logo" />
        <p className="text-2xl md:text-3xl font-semibold text-center mb-4">
          <strong>404.</strong> That's an error.
        </p>
        <p className="text-center text-gray-700 mb-6">
          The requested URL doesn't exist or was not found on this server.
          <span className="text-gray-500 block mt-1">That's all we know.</span>
        </p>
        <Link
          className="text-blue-800 font-semibold underline hover:text-blue-600"
          to="/"
        >
          Go back to Home
        </Link>
      </div>
      {/* image */}
      <div
        className="w-full md:w-[50%] h-64 md:h-[32rem] bg-cover bg-center"
        style={{
          backgroundImage: `url(${err})`,
        }}
      ></div>
    </div>
  );
};

export default NotFoundPage;
