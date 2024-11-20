import { faPen, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import { apiGetAppts } from '../services/getAppts'; // Ensure this is the correct path
import { useNavigate } from 'react-router-dom';

const AdminAppts = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const fetchAppts = async () => {
    try {
      // const token = localStorage.getItem('authToken');
      // if (!token) {
      //   console.log('No token found');
      //   toast.error('Oops! It seems you are not logged in. Please log in.');
      //   navigate("/admin/login");
      //   return;
      // }
      // Invoke the API function
      const fetchedAppts = await apiGetAppts(); 
      console.log('Fetched appts:', fetchedAppts);
      
      // Assuming `fetchedAppts.data` contains the appointment array
      setAppointments(fetchedAppts.data);
    } catch (error) {
      console.error('Error fetching appointments:', error.response ? error.response.data : error.message);
      toast.error('Error fetching appointments');
    } finally {
      setLoading(false); // Always stop loading, whether the request succeeds or fails
    }
  };

  useEffect(() => {
    fetchAppts(); // Fetch appointments on component mount
  }, []);

  return (
    <div className="h-[100vh] flex flex-col p-4 bg-gray-50">
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-gray-800">Upcoming Appointments</h1>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F4F6] text-black">
            <tr>
              <th className="py-2 px-4 border">Owner's Name</th>
              <th className="py-2 px-4 border">Pet's Name</th>
              <th className="py-2 px-4 border">Date</th>
              <th className="py-2 px-4 border">Time</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  Loading Appointments...
                </td>
              </tr>
            ) : appointments.length > 0 ? (
              appointments.map((appt, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-gray-200`}
                >
                  <td className="py-2 px-4 border">{appt.petOwner.firstName + ' ' + appt.petOwner.lastName}</td>
                  <td className="py-2 px-4 border">{appt.petName}</td>
                  <td className="py-2 px-4 border">{new Date(appt.appointmentDate).toLocaleDateString()}</td>
                  <td className="py-2 px-4 border">{appt.appointmentTime}</td>
                  <td className="py-2 px-4 border text-center">
                    <div className="flex space-x-2">
                      <button>
                        <FontAwesomeIcon icon={faPen} className="text-[orange]" />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faTrash} className="text-[red]" />
                      </button>
                      <button>
                        <FontAwesomeIcon icon={faCheck} className="text-[green]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4">
                  No appointments found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminAppts;
