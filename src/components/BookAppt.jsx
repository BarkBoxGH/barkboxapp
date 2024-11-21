import React, { useState } from 'react';
import Calendar from 'react-calendar';
import { Link, useNavigate } from 'react-router-dom';
import 'react-calendar/dist/Calendar.css'; // Calendar styles
import Navbar from '../innerComponents/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { apiBookAppt } from '../services/bookappt';
import { toast } from 'react-toastify';

const BookAppt = () => {
    const [showCalendar, setShowCalendar] = useState(true);
    const [selectedTime, setSelectedTime] = useState(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    const navigate = useNavigate();

    const handleShowCalendar = () => setShowCalendar(true);
    const handleShowTimePicker = () => setShowCalendar(false);

    const availableTimes = [
        "11:00", "12:00", 
        "14:00", "15:00",
        "16:00", "17:00",
    ];

    const handleTimeSelect = (time) => {
        const timeRegex = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;
        if (timeRegex.test(time)) {
            setSelectedTime(time);
        } else{
            toast.error("Please select a valid time.");
            console.log("Please select a valid time.");
        }
    };

    const handleDateChange = (date) => {
      const selectedDate = new Date(date);
      const today = new Date();
    
      // Set the time component of the selected date to the current time
      selectedDate.setHours(today.getHours());
      selectedDate.setMinutes(today.getMinutes());
      selectedDate.setSeconds(today.getSeconds());
      selectedDate.setMilliseconds(today.getMilliseconds());
    
      if (selectedDate < today) {
        setError('Appointment date should be in the present or future');
      } else {
        setSelectedDate(date);
      }
    };
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        console.log(error);


    if (!selectedTime || !selectedDate) {
        
        setError('Please select both a date and a time for your appointment.');
        setLoading(false);
        return;
    }
        // Use FormData to gather form inputs
        const formData = new FormData(e.target);

        // Prepare the data to send to the backend
        const appointmentData = JSON.stringify({
            service: "veterinary",
           
            petName: formData.get('petName'),
            appointmentDate: selectedDate.toISOString().split('T')[0],
            appointmentTime: selectedTime,
            notes: formData.get('reason'),
        });
        

        try {
            // Call the API service function
            await apiBookAppt(appointmentData, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                    
                }
            });
            toast.success("You have successfully scheduled an appointment! Check your email.");   
            // Redirect user after successful booking
            navigate('/viewservices');
        } catch (err) {
            console.log(
                error
            )
            setError('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className='h-[100vh] pt-[3em] bg-white'>
                <Navbar />
                <div className='h-[85%] w-[75%] mt-[2em] ml-auto mr-auto border-[5px] pt-[1em] border-[#1E3A8A] rounded-2xl px-[2em] shadow-lg bg-white'>
                    <h1 className='font-bold text-[1.8em] text-center mb-[1em] text-[#1E3A8A]'>Schedule an Appointment</h1>
                    <div className='flex h-[70%] gap-x-[1em]'>
                        <div className='w-[50%] p-[1em]'>
                            <button 
                                onClick={handleShowCalendar} 
                                className={`p-[0.5em] rounded-lg mb-2 font-semibold ${
                                    showCalendar 
                                    ? 'bg-gray-200 text-[#1E3A8A]'  
                                    : 'hover:bg-gray-200 text-[#1E3A8A]'
                                }`}
                            >
                                Select a Date
                            </button>
                            <button 
                                onClick={handleShowTimePicker} 
                                className={`p-[0.5em] rounded-lg font-semibold ${
                                    !showCalendar
                                    ? 'bg-gray-200 text-[#1E3A8A]' 
                                    : 'hover:bg-gray-200 text-[#1E3A8A]'
                                }`}
                            >
                                Select a Time
                            </button>
                            <div className='mt-4'>
                                {showCalendar ? (
                                    <Calendar
                                        onChange={handleDateChange}
                                        value={selectedDate}
                                        tileClassName={({ date }) => {
                                            if (selectedDate.getTime() === date.getTime()) {
                                                return 'bg-[#1E3A8A] text-white rounded-lg';
                                            }
                                            return null;
                                        }}
                                        showNeighboringMonth={false} 
                                        formatDay={(locale, date) => date.getDate()} 
                                        className='text-center'
                                    />
                                ) : (
                                    <div>
                                        <h2 className='text-center font-semibold mb-[2em] text-[#1E3A8A]'>Select Appointment Time</h2>
                                        <div className="grid grid-cols-3 grid-rows-2 gap-x-[1em] gap-y-[1em] mb-[2em]">
                                            {availableTimes.map((time, index) => (
                                                <button
                                                    key={index}
                                                    onClick={() => handleTimeSelect(time)}
                                                    className={`px-4 py-2 rounded-md border ${
                                                        selectedTime === time
                                                        ? 'bg-[#1E3A8A] text-white border-[#1E3A8A]'
                                                        : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-100 hover:border-[#1E3A8A]'
                                                    }`}
                                                >
                                                    {time}
                                                </button>
                                            ))}
                                        </div>
                                        <p className='p-[0.5em] bg-[#e2774d80] rounded-lg '>
                                            <FontAwesomeIcon icon={faCircleExclamation} className='mr-[1em] text-red-500' />
                                            All selected times are in GMT
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='w-[50%] p-[1em]'>
                            <h3 className='font-bold text-center text-[#1E3A8A]'>Enter your Details</h3>
                            <form onSubmit={handleSubmit} className='flex flex-col px-[10%] pt-[5%] gap-y-[1em]'>
                                {/* <input 
                                    type="text"
                                    name="ownerName"
                                    placeholder="Enter your name"
                                    className='h-[10%] w-[100%] py-[0.2em] border-b-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none' 
                                /> */}

                                <input 
                                    type="text"
                                    name="petName"
                                    placeholder="Enter your pet's name"
                                    className='h-[10%] w-[100%] py-[0.2em] border-b-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none' 
                                />

                                <input 
                                    type="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    className='h-[10%] w-[100%] py-[0.2em] border-b-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none' 
                                />

                                <input 
                                    type="text"
                                    name="reason"
                                    placeholder="Your reason for visiting"
                                    className='h-[100%] w-[100%] py-[0.2em] border-2 border-gray-300 focus:border-[#1E3A8A] focus:outline-none' 
                                />

                                {error && <p className="text-red-500 text-center">{error}</p>}
                                <div className='flex justify-center'>
                                    <button 
                                        type="submit" 
                                        className="p-[0.6em] bg-[#1E3A8A] text-white rounded-md text-[1em] font-bold transition duration-300"
                                        disabled={loading}
                                    >
                                        {loading ? 'Confirming...' : 'Confirm Appointment'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default BookAppt;
