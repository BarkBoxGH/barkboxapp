import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiLogin } from "../services/auth";
import { toast } from "react-toastify";

import loginLeft from "../assets/loginLeft.svg";
import loginRight from "../assets/loginRight.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const handleLogin = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    const form = event.target;
    const formData = new FormData(form);

    const data = {
      email: formData.get("email"),
      password: formData.get("password")
      
    };

    try {
      const response = await apiLogin(data);
      if (response.status === 200) {
        const token = response.data.token; // Assuming the token is in the response data
        const userName = response.data.firstName;

        localStorage.setItem("authToken", token); // Set the authToken to the actual token value
        console.log("Token:", token); // Add this line to log the token
        console.log("Successfully Logged In");
        navigate("/admin/dashboard");
        toast.success("You are now logged in!");
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        toast.error("Invalid email or password. Please try again.");
      } else {
        console.log("Failed to log in");
        toast.error("Oops! We couldn't log you in. Please try again.");
      }
    } finally {
      setIsLoading(false); // End loading
    }
  };

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="h-[100vh] bg-[#F0F8FA] flex items-center justify-center">
      <div className="w-[100%] px-[5%] h-[90%] lg:max-w-7xl lg:h-[80%] grid lg:grid-cols-3 items-center">
        {/* Left bird illustration */}
        <div className="hidden justify-center items-center lg:block">
          <img src={loginLeft} alt="Bird illustration" className="w-[80%] h-[80%]" />
        </div>

        {/* Form container */}
        <div className="h-[60%] lg:h-[90%] bg-white shadow-md rounded-3xl px-8 lg:py-10 text-center flex flex-col justify-center relative">
          {/* BarkBox Header */}
          <div className="w-12 h-12 mx-auto mb-4">
            <h3 className="font-bold text-[1.5em]">BarkBox</h3>
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold mb-2">Welcome Back</h2>
          <p className="text-gray-600 mb-6"></p>

          {/* Login Form */}
          <form onSubmit={handleLogin}>
            <input
              type="email"
              name="email"
              placeholder="E-mail"
              className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
            />

            {/* Password field with eye toggle */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"} // Toggle between 'text' and 'password'
                name="password"
                placeholder="Password"
                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-6 focus:outline-none focus:ring focus:border-blue-500"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility} // Toggle password visibility
                className="absolute right-3 top-1/2 transform -translate-y-1/2"
              >
                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} className="mb-[1em]"/> : <FontAwesomeIcon icon={faEye} className="mb-[1em]"/>} {/* Display the appropriate icon */}
              </button>
            </div>

            <button
              type="submit"
              className="w-full bg-[#1E3A8A] text-white rounded-md py-2 font-semibold hover:bg-[#1E3A8A] transition-colors"
              disabled={isLoading} // Disable button while loading
            >
              {isLoading ? "Logging In..." : "Log In"}
            </button>
          </form>

          {/* Forgot Password and Sign Up links */}
          <div className="text-gray-600 mt-4">
            <Link to="/forgot-password" className="text-[#1E3A8A] hover:underline">
              Forgot your password?
            </Link>
          </div>
          <p className="text-gray-600 mt-2">
            Don't have an account?{" "}
            <Link to="/admin/register" className="text-[#1E3A8A] hover:underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right bird illustration */}
        <div className="hidden flex justify-center items-center lg:block">
          <img
            src={loginRight} // Right bird image placeholder
            alt="Bird illustration"
            className="w-80 h-80"
          />
        </div>
      </div>
    </section>
  );
};

export default AdminLogin;
