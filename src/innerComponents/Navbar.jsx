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
        if (token) {
            // Fetch user data based on the token or set user state
            setUser({ name: "User's Name", role: "User" }); // Example data
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        setUser(null)
        toast.success("You have been successfully logged out. See you soon 🙂");
        navigate("/");
    };

    return (
        <div id="Navbar" className="h-[10%] flex items-center justify-between p-4 bg-white shadow-md fixed top-0 left-0 right-0 z-10">
            {/* Logo */}
            <Link to="/" className="flex items-center text-[#1E3A8A]">
                <h1 className="text-[1.5em] font-extrabold">BARKBOX</h1>
            </Link>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="text-[1.8em] text-[#1E3A8A]" />
            </button>

            {/* Navigation Links */}
            <ul
                id="nav-ul"
                className={`${isOpen ? "flex" : "hidden"
                    } lg:flex flex-col lg:flex-row lg:items-center font-semibold text-[#333] absolute lg:static top-[10%] bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none z-10 space-y-4 lg:space-y-0 lg:space-x-6`}
            >
                <li className="hover:text-[#1E3A8A] transition-colors"><Link to="/">Home</Link></li>
                <li className="hover:text-[#1E3A8A] transition-colors"><Link to="/viewservices">Services</Link></li>
                <li className="hover:text-[#1E3A8A] transition-colors"><Link to="/about">About</Link></li>
            </ul>

            {/* Book an Appointment Button */}
            <Link to="/viewservices" className="hidden lg:inline-block">
                <button className="px-4 py-2 bg-[#1E3A8A] text-white rounded-md text-[1em] font-bold hover:bg-[#334D89] transition-colors">
                    Book an Appointment
                </button>
            </Link>

            {/* Icons */}
            <ul
                id="nav-icons"
                className="hidden lg:flex items-center gap-4 text-[#1E3A8A]"
            >
                <MapLocation />
                <FontAwesomeIcon icon={faEnvelope} className="text-[1.3em] cursor-pointer hover:text-[#334D89] transition-colors" />
                <ClickToCall />
            </ul>

            {/* User Details */}
            {user ? (
                <div className="flex items-center gap-4">
                    {/* User Avatar */}
                    <div className="w-10 h-10 rounded-full bg-gray-200 border-2 border-gray-300 flex items-center justify-center">
                        <span className="text-gray-500 text-xl font-bold">A</span>
                    </div>

                    {/* User Info */}
                    <div className="hidden lg:block">
                        <p className="text-gray-800 font-semibold">{user.name}</p>
                        <p className="text-gray-600 text-sm">{user.role}</p>
                    </div>

                    {/* Logout Icon */}
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
