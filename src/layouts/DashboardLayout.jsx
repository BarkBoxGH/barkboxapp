import React from 'react';
import AdminSidebar from '../innerComponents/AdminSidebar';
import AdminNavbar from '../innerComponents/AdminNavbar';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div className="h-screen flex">
            {/* Sidebar */}
            <aside className="w-64 text-white z-10">
                <AdminSidebar />
            </aside>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col">
                {/* Navbar */}
                <header className="h-16 bg-white shadow flex items-center px-6">
                    <AdminNavbar />
                </header>

                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-100 overflow-y-auto">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;
