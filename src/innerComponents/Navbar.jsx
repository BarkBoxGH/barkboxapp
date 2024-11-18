import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone, faBars, faMessage, faInbox } from "@fortawesome/free-solid-svg-icons";
import MapLocation from "./MapLocation";
import ClickToCall from "./ClickToCall";
import { useState } from "react";
import { Link } from "react-router-dom";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div id="Navbar" className="h-[10%] flex justify-between items-center p-4 border shadow-md bg-white fixed top-0 left-0 right-0 z-10 px-[5%]">
            {/* Logo */}
            <Link to="/" className="flex items-center">
                <h1 className="text-[1.5em] font-extrabold text-[#1E3A8A]">BARKBOX</h1>
            </Link>

            {/* Mobile Menu Icon */}
            <button className="lg:hidden" onClick={toggleMenu}>
                <FontAwesomeIcon icon={faBars} className="text-[1.8em] text-[#1E3A8A]" />
            </button>

            {/* Navigation Links - Hidden on mobile and visible on desktop */}
            <ul
                id="nav-ul"
                className={`${
                    isOpen ? "flex" : "hidden"
                } lg:flex flex-col lg:flex-row justify-between items-center w-full lg:w-[20%] font-semibold text-[#333] absolute lg:static top-[10%] bg-white lg:bg-transparent p-4 lg:p-0 shadow-md lg:shadow-none z-10 space-y-4 lg:space-y-0 lg:space-x-6`}
            >
                <li className="hover:text-[#1E3A8A] transition-colors"><Link to="/">Home</Link></li>
                <li className="hover:text-[#1E3A8A] transition-colors"><Link to="/viewservices">Services</Link></li>
                <li className="hover:text-[#1E3A8A] transition-colors"><Link to="">About</Link></li>
            </ul>

            <Link to="/viewservices">
                <button className="p-[0.6em] bg-[#1E3A8A] text-white rounded-md text-[1em] font-bold hover:bg-[#334D89] transition-colors">
                    Book an Appointment
                </button>
            </Link>

            {/* Icons - Hidden on mobile and visible on desktop */}
            <ul
                id="nav-icons"
                className="hidden lg:flex justify-between items-center gap-6 w-[10%]"
            >
                <MapLocation />
                <FontAwesomeIcon icon={faEnvelope} className="text-[1.3em] cursor-pointer text-[#1E3A8A] hover:text-[#334D89] transition-colors"/>
                <ClickToCall />
            </ul>
        </div>
    );
};

export default Navbar;
