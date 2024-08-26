import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink from react-router-dom
import logo from "../assets/logo.png";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [profileClicked, setProfileClicked] = useState(false);
  const handleClick = () => {
    setProfileClicked(!profileClicked);
  };

  const Links = ({ isActive }) =>
    isActive
      ? "text-white bg-black hover:bg-gray-900 hover:text-white rounded-md px-3 py-2"
      : "text-white hover:bg-gray-900 hover:text-white rounded-md px-3 py-2";

  return (
    <>
      <nav className="bg-indigo-700 border-b border-indigo-500 relative">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            <div className="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
              {/* <!-- Logo --> */}
              <NavLink to="/" className="flex flex-shrink-0 items-center mr-4">
                <img
                  className="h-10 w-auto bg-blue"
                  src={logo}
                  alt="React Jobs"
                />
                <span className="hidden md:block text-white text-2xl font-bold ml-2">
                  React Jobs
                </span>
              </NavLink>
              <div className="md:ml-auto">
                <div className="flex space-x-2">
                  <NavLink to="/" className={Links}>
                    Home
                  </NavLink>
                  <NavLink to="/jobs" className={Links}>
                    Jobs
                  </NavLink>
                  <NavLink to="/add-job" className={Links}>
                    Add Job
                  </NavLink>
                </div>
              </div>
              <CgProfile
                onClick={() => {
                  handleClick();
                }}
                className="text-4xl ml-16 "
              />
            </div>
          </div>
        </div>
      </nav>
      {profileClicked && (
        <div className="w-40 p-2 flex flex-col h-auto rounded-lg absolute right-16 top-16 bg-white shadow-lg border border-gray-200">
          <button
            onClick={() => {
              handleClick();
            }}
            className="p-2 text-left hover:bg-indigo-50 text-indigo-700"
          >
            <Link to="/profile" className=" rounded-xl w-full h-full block">Go To Profile</Link>
          </button>
          <button
            onClick={() => {
              handleClick();
            }}
            className="p-3 text-left hover:bg-indigo-50 text-red-600"
          >
            <Link to="/login" className="w-full h-full block">Logout</Link>
          </button>
        </div>
      )}
    </>
  );
};

export default NavBar;
