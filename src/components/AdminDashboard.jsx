import React from "react";

const AdminDashboard = () => {
  return (
    <section className="h-[100vh] flex flex-col px-6 py-4">
      {/* Navbar Section */}
      <div className="h-[5%] w-full flex items-center">
        <h1 className="font-semibold text-lg">Dashboard</h1>
      </div>

      {/* Greeting Card */}
      <div className="h-[25%] bg-[#1E3A8A] text-white w-full rounded-xl flex flex-col px-8 py-6 mb-6 shadow-md">
        <h1 className="font-bold text-3xl">Good day, Vet's Name</h1>
        <p className="mt-2">Have a great day at work!</p>
      </div>

      {/* Statistics Section */}
      <div className="flex h-[40%] justify-between gap-6">
        {/* Appointments Card */}
        <div className="border w-[30%] rounded-xl shadow-lg h-full p-6 flex flex-col justify-between bg-white">
          <h2 className="text-xl font-semibold mb-2">Appointments</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Today's Appointments</p>
            <p className="text-2xl font-bold text-[#1E3A8A]">12</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-500">Total This Month</p>
            <p className="text-2xl font-bold text-[#1E3A8A]">78</p>
          </div>
        </div>

        {/* Consultations Card */}
        <div className="border w-[30%] rounded-xl shadow-lg h-full p-6 flex flex-col justify-between bg-white">
          <h2 className="text-xl font-semibold mb-2">Consultations</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">Today</p>
            <p className="text-2xl font-bold text-[#1E3A8A]">5</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-500">Pending Follow-ups</p>
            <p className="text-2xl font-bold text-[#1E3A8A]">15</p>
          </div>
        </div>

        {/* Clients Card */}
        <div className="border w-[30%] rounded-xl shadow-lg h-full p-6 flex flex-col justify-between bg-white">
          <h2 className="text-xl font-semibold mb-2">Clients</h2>
          <div className="flex items-center justify-between">
            <p className="text-gray-500">New This Week</p>
            <p className="text-2xl font-bold text-[#1E3A8A]">7</p>
          </div>
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-500">Total Clients</p>
            <p className="text-2xl font-bold text-[#1E3A8A]">145</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminDashboard;
