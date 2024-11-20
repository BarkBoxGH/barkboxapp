import { faComment } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState, useEffect } from 'react';
import { apiBookAppt } from '../services/bookappt';
import { apiGetAppts } from '../services/getAppts';
import { toast } from 'react-toastify';

const AdminClients = () => {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchClients = async () => {
    try {
      const fetchedClients = await apiGetAppts();
      console.log("Fetched clients:", fetchedClients);
      setClients(fetchedClients.data);

    } catch (error) {
      console.error('Error fetching clients:', error);
      toast.error('Error fetching clients');
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    fetchClients();
  },[]);

  return (
    <div className="h-[100vh] flex flex-col p-4 bg-gray-50">
      <div className="mb-4">
        <h1 className="font-bold text-2xl text-gray-800">Clients</h1>
      </div>
      <div className="overflow-x-auto bg-white shadow-md rounded-lg">
        <table className="w-full border-collapse">
          <thead className="bg-[#F3F4F6] text-black">
            <tr>
              <th className="py-2 px-4 border">Client's Name</th>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Phone</th>
              <th className="py-2 px-4 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  Loading...
                </td>
              </tr>
            ) : clients.length > 0 ? (
              clients.map((client, index) => (
                <tr
                  key={index}
                  className={`${
                    index % 2 === 0 ? 'bg-gray-100' : 'bg-white'
                  } hover:bg-gray-200`}
                >
                  <td className="py-2 px-4 border">{client.petOwner.firstName}</td>
                  <td className="py-2 px-4 border">{client.petOwner.email}</td>
                  {/* <td className="py-2 px-4 border">{client.phone}</td> */}
                  <td className="py-2 px-4 border text-center">
                    
                    <button>
                        <FontAwesomeIcon icon={faComment} className='bg-blue-600'/>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  No clients found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminClients;
