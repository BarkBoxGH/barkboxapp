import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from "react-toastify";
const Status = () => {
    const navigate = useNavigate();
    //state for selected radio button
    const [selectedStatus,setSelectedStatus]=useState();

    //func to set selected status on radio click
    const handleRadioChange=(event)=>{
        setSelectedStatus(event.target.value);
    }

    //conditional routing for selected status
    const routeTo=()=>{
        if(selectedStatus==="vendor"){
            navigate("/vendorsignup");
        }
        else if(selectedStatus==="user"){
            navigate("/signup");
        }
       
    }
    return (
        <div>
            <p className="h-[90%] w-[90%] ml-auto mr-auto mt-[0.5em] text-[1.5em]">Pick a status to let us know the type of account you would like to sign up for.</p>
            <section className="h-[90vh] p-[10%] grid grid-cols-1 grid-rows-2">
                
                <div className="border-[5px] border-[#A8DEF8] rounded-3xl h-[90%] p-[1em] ">
                    {/* Vendor Status Radio Btn */}
                    <div className="flex  items-center mb-[10%]">
                        <input 
                        value="vendor" 
                        onChange={handleRadioChange}
                        name="statusRadio"id="vendorRadio" type="radio" className="h-[2em] w-[2em] border-[white] border-[1px] mr-[1em]" />
                        <label htmlFor="vendorRadio" className="text-[2em] font-bold">I am a vendor</label>
                    </div>
                    <p className="text-[1.5em] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorea</p>
                </div>

                {/* User Status Radio Btn */}
                <div className="border-[5px] border-[#A8DEF8] rounded-3xl h-[90%] p-[1em] ">

                    <div className="flex  items-center mb-[10%]">
                        <input value="user"
                        name="statusRadio"
                        onChange={handleRadioChange}
                        id="userRadio" type="radio" className="h-[2em] w-[2em] border-[white] border-[1px] mr-[1em]" />
                        <label htmlFor="userRadio" className="text-[2em] font-bold">I am a user</label>
                    </div>
                    <p className="text-[1.5em] text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae dolorea</p>
                </div>
                <button onClick={routeTo} className="p-[0.5em] h-[100%] bg-[#A8DEF8] text-center text-[1.5em] mb-[1em] font-extrabold text-[black] lg:h-[100%] rounded-lg lg:text-[2em]" type="submit">Continue</button>

                <Link to="/" className="text-[1.5em] text-center text-[blue]">Go back to home</Link>

            </section>
        </div>
    )
}

export default Status