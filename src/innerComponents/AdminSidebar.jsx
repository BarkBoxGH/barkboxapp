import { faBorderAll, faCalendar, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AdminSidebar = () => {
  const location = useLocation(); // To highlight the active menu item

  return (
    <div className="bg-white shadow-lg h-full px-6 pt-10">
      {/* Logo */}
      <div className="mb-10 text-center">
        <Link to="/" className="text-center">
          <h1 className="text-2xl font-extrabold text-blue-900 tracking-wide">BARKBOX</h1>
        </Link>
      </div>

      {/* Menu */}
      <nav className="flex flex-col gap-4">
        <Link to="/admin/dashboard">
          <button
            className={`flex items-center gap-4 w-full p-3 rounded-lg font-semibold ${
              location.pathname === '/admin/dashboard'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-gray-100 text-blue-900 hover:bg-blue-200'
            }`}
          >
            <FontAwesomeIcon icon={faBorderAll} className="text-lg" />
            Dashboard
          </button>
        </Link>

        <Link to="/admin/dashboard/appointments">
          <button
            className={`flex items-center gap-4 w-full p-3 rounded-lg font-semibold ${
              location.pathname === '/admin/dashboard/appointments'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-gray-100 text-blue-900 hover:bg-blue-200'
            }`}
          >
            <FontAwesomeIcon icon={faCalendar} className="text-lg" />
            Appointments
          </button>
        </Link>

        <Link to="/admin/dashboard/clients">
          <button
            className={`flex items-center gap-4 w-full p-3 rounded-lg font-semibold ${
              location.pathname === '/admin/dashboard/clients'
                ? 'bg-blue-900 text-white shadow-md'
                : 'bg-gray-100 text-blue-900 hover:bg-blue-200'
            }`}
          >
            <FontAwesomeIcon icon={faUser} className="text-lg" />
            Clients
          </button>
        </Link>
      </nav>
    </div>
  );
};

export default AdminSidebar;
