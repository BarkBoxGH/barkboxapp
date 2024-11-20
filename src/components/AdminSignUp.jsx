import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiSignup } from "../services/auth";
import { toast } from "react-toastify";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons"; // Importing eye icons from react-icons
import adminSide from "../assets/adminSide.svg";
import adminSide2 from "../assets/adminSide2.svg";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AdminSignUp = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to track password visibility

    const handleSignup = async (event) => {
        event.preventDefault();
        setIsLoading(true);

        const form = event.target;
        const formData = new FormData(form);

        const data = {
            firstName: formData.get("firstName"),
            lastName: formData.get("lastName"),
            email: formData.get("email"),
            password: formData.get("password"),
            role: "vendor",
            storeName: formData.get("storeName"),
            storeDescription: formData.get("storeDescription"),
            storeLocation: formData.get("storeLocation"),
            storeContact: formData.get("storeContact")
        };

        try {
            const response = await apiSignup(data);
            if (response.status === 200 || response.status === 201) {
                console.log("Successfully Signed Up");
                navigate("/admin/login");
                toast.success("You have been successfully signed up! Welcome");
            }
        } catch (error) {
            if (error.response && error.response.status === 409) {
                toast.error("This account already exists. Go ahead and log in.");
            } else {
                console.log("Failed to sign up");
                toast.error("Oops! We couldn't sign you up. Please try again.");
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
            <div className="w-full max-w-7xl h-[80%] grid grid-cols-3 items-center">
                {/* Left bird illustration */}
                <div className="justify-center items-center lg:block">
                    <img src={adminSide} alt="Bird illustration" className="w-80 h-80" />
                </div>

                {/* Form container */}
                <div className="h-[90%] bg-white shadow-md rounded-3xl px-8 py-10 text-center flex flex-col justify-center relative">
                    {/* BarkBox Header */}
                    <div className="w-12 h-12 mx-auto mb-4">
                        <h3 className="font-bold text-[1.5em] text-center">BarkBox</h3>
                    </div>

                    {/* Title */}
                    <h2 className="text-2xl font-semibold mb-2 text-center">Register as a Service</h2>
                    {/* <p className="text-gray-600 mb-6"></p> */}

                    {/* Sign Up Form */}
                    <form onSubmit={handleSignup}>
                        <div className="flex gap-x-[1em]">
                            <input
                                type="text"
                                name="firstName"
                                placeholder="First Name"
                                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
                            />
                            <input
                                type="text"
                                name="lastName"
                                placeholder="Last Name"
                                className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
                            />
                        </div>
                        <input
                            type="email"
                            name="email"
                            placeholder="E-mail"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
                        />

                        <input
                            type="text"
                            name="storeName"
                            placeholder="Store Name"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <input
                            type="text"
                            name="storeDescription"
                            placeholder="Store Description"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <input
                            type="text"
                            name="storeLocation"
                            placeholder="Store Location"
                            className="w-full border border-gray-300 rounded-md py-2 px-4 mb-4 focus:outline-none focus:ring focus:border-blue-500"
                        />
                        <input
                            type="text"
                            name="storeContact"
                            placeholder="Store Contact"
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
                                {showPassword ? <FontAwesomeIcon icon={faEyeSlash} className="mb-[1em]" /> : <FontAwesomeIcon icon={faEye} className="mb-[1em]" />} {/* Display the appropriate icon */}
                            </button>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#1E3A8A] text-white rounded-md py-2 font-semibold hover:bg-[#1E3A8A] transition-colors"
                            disabled={isLoading} // Disable button while loading
                        >
                            {isLoading ? "Creating Account..." : "Sign Up"}
                        </button>
                    </form>

                    {/* Log in link */}
                    <p className="text-gray-600 mt-4">
                        Already have an account?{" "}
                        <Link to="/admin/login" className="text-[#1E3A8A] hover:underline">
                            Log in
                        </Link>
                    </p>
                </div>

                {/* Right bird illustration */}
                <div className="flex justify-center items-center lg:block">
                    <img
                        src={adminSide2} // Right bird image placeholder
                        alt="Bird illustration"
                        className="w-80 h-80"
                    />
                </div>
            </div>
        </section>
    );
}

export default AdminSignUp