import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import statusBg from "../assets/statusBg.mp4";

const Status = () => {
    const navigate = useNavigate();
    const [selectedStatus, setSelectedStatus] = useState();

    const handleRadioChange = (event) => {
        setSelectedStatus(event.target.value);
    };

    const routeTo = () => {
        if (selectedStatus === "vendor") {
            navigate("/vendorsignup");
        } else if (selectedStatus === "user") {
            navigate("/usersignup");
        }
    };

    return (
        <section className="h-[100vh] relative">
            <Navbar />
            <div className="h-full relative overflow-hidden">
                {/* Video Background */}
                <video autoPlay loop muted playsInline className="absolute top-0 left-0 w-full h-full object-cover -z-10">
                    <source src={statusBg} type="video/mp4" />
                </video>

                {/* Dark Overlay */}
                <div className="bg-black opacity-50 absolute top-[10%] left-0 w-full h-full z-10"></div>

                {/* Overlay Content */}
                <div className="relative z-20 flex items-center justify-start h-full pl-[5%]">
                    <div className="bg-[white] h-[70%] mt-[5%] w-[40%] ml-[5%] mr-auto border p-[2%] rounded-lg shadow-lg">
                        <h1 className="text-[1.2em] font-extrabold mb-[0.7em]">LOGO</h1>
                        <h2 className="text-[2em] text-black font-bold">Create an account with us.</h2>
                        <p className="text-[1em] mb-[1em] text-black">
                            What type of account would you like to create?
                        </p>

                        <div className="h-[17%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                            <input
                                type="radio"
                                value="vendor"
                                id="vendorStat"
                                name="statusradio"
                                onChange={handleRadioChange}
                                className="accent-[#A8DEF8]"
                            />
                            <label className="text-black ml-[1em] text-[1.2em]" htmlFor="vendorStat">
                                I am a vendor
                            </label>
                            <p className="text-[0.8em] ml-[2em]">
                                I want to sell dogs, dog care supplies and products.
                            </p>
                        </div>

                        <div className="h-[17%] w-[90%] border shadow-md rounded-md py-[0.5em] px-[0.5em] mb-[2em]">
                            <input
                                type="radio"
                                value="user"
                                id="userStat"
                                name="statusradio"
                                onChange={handleRadioChange}
                                className="accent-[#A8DEF8]"
                            />
                            <label className="text-black ml-[1em] text-[1.2em]" htmlFor="userStat">
                                I am a user/viewer
                            </label>
                            <p className="text-[0.8em] ml-[2em]">
                                I want to buy dogs, dog supplies and products.
                            </p>
                        </div>

                        <div>
                            <button
                                onClick={routeTo}
                                className="h-[10%] w-[90%] font-extrabold border shadow-md rounded-md py-[0.5em] bg-[black] text-white text-center"
                            >
                                Continue
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Status;
