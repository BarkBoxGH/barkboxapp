import { faBorderAll, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import ConfirmModal from '../components/LogoutConfirmModal'; // Import the modal component
import aboutVet from '../assets/aboutVet.jpg';

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isModalOpen, setIsModalOpen] = useState(false); // State to control modal visibility

  const handleLogout = () => {
    setIsModalOpen(true); // Open the modal when logout button is clicked
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem("authToken");
    toast.success("You have been successfully logged out. See you soon 🙂");
    setIsModalOpen(false); // Close the modal
    navigate("/"); // Navigate to homepage
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal without logging out
  };

  return (
    <div className="bg-white shadow-lg h-full flex flex-col justify-between px-6 pt-10 ">
      {/* Logo */}
      <div>
        <div className="mb-[1em] lg:mb-6 text-center">
          <Link to="/" className="text-center">
            <h1 className="text-2xl font-extrabold text-blue-900 tracking-wide">BARKBOX</h1>
          </Link>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-4 h-[60%] flex-grow">
          <Link to="/admin/dashboard">
            <button
              className={`flex items-center gap-4 w-full p-3 rounded-lg font-semibold ${
                location.pathname === "/admin/dashboard"
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-gray-100 text-blue-900 hover:bg-blue-200"
              }`}
            >
              <FontAwesomeIcon icon={faBorderAll} className="text-lg" />
              Dashboard
            </button>
          </Link>

          <Link to="/admin/dashboard/appointments">
            <button
              className={`flex items-center gap-4 w-full p-3 rounded-lg font-semibold ${
                location.pathname === "/admin/dashboard/appointments"
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-gray-100 text-blue-900 hover:bg-blue-200"
              }`}
            >
              <FontAwesomeIcon icon={faCalendar} className="text-lg" />
              Appointments
            </button>
          </Link>

          <Link to="/admin/dashboard/clients">
            <button
              className={`flex items-center gap-4 w-full p-3 rounded-lg font-semibold ${
                location.pathname === "/admin/dashboard/clients"
                  ? "bg-blue-900 text-white shadow-md"
                  : "bg-gray-100 text-blue-900 hover:bg-blue-200"
              }`}
            >
              <FontAwesomeIcon icon={faUser} className="text-lg" />
              Clients
            </button>
          </Link>
        </nav>
      </div>

      {/* Profile Details Card */}
      <div className="bg-gray-100 mb-[2em] p-6 mt-4 rounded-lg shadow-md flex flex-col items-center">
     
        <img
          src={aboutVet}
          alt="Admin Profile"
          className="w-24 h-24 rounded-full border-4 border-blue-900 mb-4"
        />
        <h3 className="text-blue-900 font-semibold text-lg text-center">Dr Sackey Vet Clinic</h3>
        <p className="text-sm text-gray-600 text-center mb-[0.5em]">Vendor</p>

        <button
        onClick={handleLogout}
        className="text-white bg-[#1E3A8A] px-4 py-2 rounded-lg font-medium hover:bg-[#3B82F6] transition mb-[1em]"
      >
        Logout
      </button>
      </div>
      

      {/* Confirm Logout Modal */}
      <ConfirmModal
        isOpen={isModalOpen}
        onConfirm={handleConfirmLogout}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default AdminSidebar;
