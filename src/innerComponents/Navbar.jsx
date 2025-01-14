import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faBars, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import MapLocation from "./MapLocation";
import ClickToCall from "./ClickToCall";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem("authToken");
        // if (token) {
        //     setUser({ name: {name}, role: "User" });
        // }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setUser(null);
        toast.success("You have been successfully logged out. See you again soon 🙂");
        navigate("/");
    };

    return (
        <div className="h-[10%] w-full flex items-center justify-between px-4 sm:px-6 lg:px-10 py-2 sm:py-4 bg-gradient-to-r from-white via-gray-100 to-gray-200 shadow-md fixed top-0 left-0 right-0 z-10 overflow-x-hidden overflow-y-hidden">

            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 text-[#1E3A8A]">
                <h1 className="text-[1.5em] sm:text-[1.8em] font-extrabold tracking-wide">
                    BARKBOX
                </h1>
            </Link>

            {/* Mobile Menu Icon */}
            <button
                className="lg:hidden text-[#1E3A8A] text-[1.8em]"
                onClick={()=>setIsOpen(false)}
            >
                <FontAwesomeIcon icon={faBars} />
            </button>

            {/* Navigation Links */}
            <ul
                className={`${
                    isOpen ? "flex" : "hidden"
                } lg:flex flex-col lg:flex-row lg:items-center font-medium text-[#333] bg-white lg:bg-transparent p-6 lg:p-0 shadow-lg lg:shadow-none absolute lg:static top-[10%] right-0 w-[70%] lg:w-auto z-10 space-y-6 lg:space-y-0 lg:space-x-8 rounded-lg lg:rounded-none transition-all duration-300`}
            >
                <li className="hover:text-[#1E3A8A] transition-colors">
                    <Link to="/">Home</Link>
                </li>
                <li className="hover:text-[#1E3A8A] transition-colors">
                    <Link to="/viewservices">Services</Link>
                </li>
                <li className="hover:text-[#1E3A8A] transition-colors">
                    <Link to="/about">About</Link>
                </li>
                <Link to="/viewservices" className="hidden lg:block">
                    <button className="px-5 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#334D89] text-white rounded-lg text-[1em] font-bold shadow-md hover:scale-105 transform transition-all">
                        Book an Appointment
                    </button>
                </Link>
            </ul>

            {/* Icons */}
            <ul className="hidden lg:flex items-center gap-6 text-[#1E3A8A]">
                <MapLocation />
                <FontAwesomeIcon
                    icon={faEnvelope}
                    className="text-[1.3em] cursor-pointer hover:text-[#334D89] transition-colors"
                />
                <ClickToCall />
            </ul>

            {/* User Details */}
            {user ? (
                <div className="flex items-center gap-4">
                    {/* User Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-gray-300 to-gray-400 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                            {user.name[0]}
                        </span>
                    </div>

                    {/* User Info */}
                    <div className="hidden lg:block">
                        <p className="text-gray-800 font-semibold">{user.name}</p>
                        <p className="text-gray-500 text-sm">{user.role}</p>
                    </div>

                    {/* Logout */}
                    <button
                        onClick={handleLogout}
                        className="text-[#1E3A8A] hover:text-[#334D89] transition-colors"
                        title="Logout"
                    >
                        <FontAwesomeIcon icon={faRightFromBracket} className="text-[1.5em]" />
                    </button>
                </div>
            ) : null}
        </div>
    );
};

export default Navbar;
