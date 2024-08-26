import React, { useState } from "react";
import signupPhoto from "../../assets/signup.png";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../../validation/formValidation";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    // Handle form submission, e.g., sending data to an API
    try{
      const response = await axios.post("http://localhost:5079/api/User", data);
      if(response.status === 200){
        alert("User signup successfull");
        navigate("/login");
      }
      console.log(response);
    }catch(err){
      console.log(err);
    }

  };

  return (
    <div className="min-h-screen flex">
      {/* Form Section */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-gray-50 p-4">
        <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            Sign Up
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="text"
                name="UserName"
                placeholder="Enter Your Username"
                {...register("UserName")}
              />
              {errors.UserName && (
                <p className="text-red-600">{errors.UserName.message}</p>
              )}
            </div>
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="email"
                name="Email"
                placeholder="Enter Your Email"
                {...register("Email")}
              />
              {errors.Email && (
                <p className="text-red-600">{errors.Email.message}</p>
              )}
            </div>
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                name="Password"
                placeholder="Enter Your Password"
                {...register("Password")}
              />
              {errors.Password && (
                <p className="text-red-600">{errors.Password.message}</p>
              )}
            </div>
            <div>
              <input
                className="w-full p-5 border border-blue-400 rounded-lg focus:outline-none focus:border-blue-500"
                type="password"
                name="ConformPassword"
                placeholder="Confirm Your Password"
                {...register("ConformPassword")}
              />
              {errors.ConformPassword && (
                <p className="text-red-600">{errors.ConformPassword.message}</p>
              )}
            </div>
            <div className="border border-blue-400">
              <select
                className="w-full p-2 text-center font-bold text-indigo-500"
                name="Role"
                {...register("Role")}
              >
                <option value="company">Company</option>
                <option value="user">User</option>
              </select>
              {errors.Role && (
                <p className="text-red-600">{errors.Role.message}</p>
              )}
            </div>
            <div className="flex flex-col items-center gap-[4px] mt-2 justify-center">
              <div className="flex gap-1">
                <input type="checkbox" {...register("iAgree")} />
                <p>
                  I agree to all{" "}
                  <span className="text-blue-700">Terms and Conditions</span>
                </p>
              </div>
              {errors.iAgree && (
                <p className="text-xs lg:text-sm text-red-600 font-semibold">
                  {errors.iAgree.message}
                </p>
              )}
            </div>
            <button
              className="w-full p-5 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
              type="submit"
            >
              Sign Up
            </button>
            <p className="text-center">
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
