import { Link } from "react-router-dom"
import Navbar from "../innerComponents/Navbar"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import F from "../services/features"
import Home2Bkg from "../assets/Home2Bkg.png"
import pugFinal from "../assets/pugFinal.png"

const HomePage = () => {
  return (
    <div>
      <section id="homeBg" className="h-[100vh] overflow-hidden bg-[#1E3A8A] m-0 p-0 flex justify-content items-center px-[5%]">
        <Navbar />
        <div className="flex flex-col w-[50%] pl-[10%]">
          <h1 className="text-[3em] text-[white] font-bold w-[100%] mb-[0.5em]">Online Vet Booking System</h1>
          <p className="text-[1.2em] text-[white]">Find certified vets near you and schedule an appointment with the click of a button.</p>
          <Link to="/viewservices"><button className="p-[0.6em] border-white border-2 rounded-md text-[1em] font-bold w-[40%] mt-[1em] text-[white]">View our Services</button></Link>
        </div>
        <div className="w-[40%] mt-[20%] h-[100%]">
          <img src={pugFinal} alt="" className=""/>
        </div>
        
      </section>
      <section className="h-[100vh] bg-[white] flex justify-center items-center">
        <div className="w-[60%] h-full bg-no-repeat" style={{ backgroundImage: `url(${Home2Bkg})` }}>

        </div>
        <div className="w-[40%] h-full px-[4em] pt-[10%]">
          <h2 className="text-[2.2em] font-bold mb-[1em]">Ease scheduling pains with a vet booking system</h2>
          <p className="text-[1.1em] mb-[1em]">Empower your patients to book or reschedule appointments online 24/7. Reduce average booking time from 8+ minutes by phone* to just a few clicks.</p>
          <Link to="/viewservs">
            <button className="p-[0.6em] bg-[#1E3A8A] text-[white] rounded-md text-[1em] font-bold ">Book an Appointment</button>
          </Link>
        </div>
      </section>
      <section className="h-[100vh] bg-[#F5F5F5] px-[15%] py-[10%] gap-y-[2em] grid grid-cols-2">
        {F.FEATURES.map((feature, index) => {
              return(
                <div key={index} className="flex flex-col w-[70%] ml-auto mr-auto">
                <span>
                  <FontAwesomeIcon icon={feature.icon} className="text-[2em]"/>
                </span>
                <h3 className="text-[1.3em] font-semibold mt-4">{feature.title}</h3>
                <p className="text-[1em] mt-2">{feature.description}</p>
              </div>
              )

        } 
        )}
      </section>

      
    </div>




  )
}

export default HomePage

