import React from "react";

const AdminDashboard = () => {

  

  return (
    <section className="min-h-screen flex flex-col px-6 py-4 bg-gray-100">
      {/* Navbar Section */}
      <div className="h-[8%] w-full flex items-center justify-between bg-white p-4 rounded-xl shadow-md mb-6">
        <h1 className="font-extrabold text-2xl text-[#1E3A8A]">Dashboard</h1>
        
      </div>

      {/* Greeting Card */}
      <div className="bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6] text-white w-full rounded-xl flex flex-col px-8 py-6 mb-6 shadow-lg">
        <h1 className="font-extrabold text-4xl mb-2">
          Good day,{" "}
          <span className="text-yellow-300">Dr. Sackey Veterinary Clinic</span>
        </h1>
        <p className="text-lg font-medium">
          Wishing you a productive and joyful day at work!
        </p>
      </div>

      {/* Statistics Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Appointments Card */}
        <div className="border rounded-xl shadow-lg bg-white p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Appointments</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Today's Appointments</p>
            <p className="text-3xl font-bold text-[#1E3A8A]">12</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Total This Month</p>
            <p className="text-3xl font-bold text-[#1E3A8A]">78</p>
          </div>
        </div>

        {/* Consultations Card */}
        <div className="border rounded-xl shadow-lg bg-white p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Consultations</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Today</p>
            <p className="text-3xl font-bold text-[#1E3A8A]">5</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Pending Follow-ups</p>
            <p className="text-3xl font-bold text-[#1E3A8A]">15</p>
          </div>
        </div>

        {/* Clients Card */}
        <div className="border rounded-xl shadow-lg bg-white p-6 flex flex-col gap-4">
          <h2 className="text-xl font-semibold text-gray-700">Clients</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">New This Week</p>
            <p className="text-3xl font-bold text-[#1E3A8A]">7</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Total Clients</p>
            <p className="text-3xl font-bold text-[#1E3A8A]">145</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
