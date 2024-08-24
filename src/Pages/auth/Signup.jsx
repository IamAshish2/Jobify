import React from "react";
import signupPhoto from "../../assets/signup.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Sign Up
          </h2>
          <form className="space-y-8">
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                placeholder="Enter Your Username"
              />
            </div>
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                placeholder="Enter Your Email"
              />
            </div>
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Enter Your Password"
              />
            </div>
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                placeholder="Confirm Your Password"
              />
            </div>
            <div>
              <select className="w-full p-2 text-center font-bold text-indigo-500" name="role" id="role">
                <option value="company">Company</option>
                <option value="user">User</option>
              </select>
            </div>
            <button
              className="w-full p-5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
            <p>
              Already have an account?{" "}
              <Link className="text-blue-500 font-bold underline" to={"/login"}>
                Login
              </Link>
            </p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="hidden lg:flex lg:w-1/2 bg-cover bg-right"
        style={{
          backgroundImage: `url(${signupPhoto})`,
          backgroundPosition: "top",
        }}
      ></div>
    </div>
  );
};

export default Signup;
