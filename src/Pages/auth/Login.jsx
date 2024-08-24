import React from 'react';
import loginPhoto from '../../assets/signin.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-8">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">Login</h2>
          <form className="space-y-8">
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
            <button
              className="w-full p-5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Login
            </button>
            <p>Don't have an account? <Link className='text-blue-500 font-bold underline' to={"/signup"}>Sign up</Link></p>
          </form>
        </div>
      </div>

      {/* Image Section */}
      <div
        className="hidden  lg:flex lg:w-1/2 bg-cover bg-right"
        style={{
          backgroundImage: `url(${loginPhoto})`,
          backgroundPosition:top,

        }}
      ></div>
    </div>
  );
};

export default Login;
