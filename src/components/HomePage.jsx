import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import heroImg from '../assets/HeaderBg.png'
import dogFace from "../assets/happydogface.png"
import AboutDogs from "./AboutDogs"
import AboutVets from "./AboutVets"
import GsAndTs from "./GsAndTs"
import Footer from "../innerComponents/Footer"

const HomePage = () => {
  return (
    <div>
      <section className="h-[100vh]  overflow-hidden bg-cover bg-center m-0 p-0 lg:grid lg:grid-cols-2" style={{ backgroundImage: `url(${heroImg})` }}>
        <Navbar />
        <div className="pt-[20%] h-[50%] lg:w-[100%] lg:order-last lg:h-[100%] w-[100%]">
        <div className="z-0 w-[70%] h-[80%] bg-[#A8DEF8] ml-[15%] rounded-t-2xl ">
        <img className="h-[100%]" src={dogFace} />
        </div>
          
        </div>
        <div className="flex flex-col lg:w-[100%] lg:mt-[20%]">
          <h1 className="text-center font-extrabold text-[4em]">BarkBox</h1>
          <p className="w-[70%] text-center ml-[15%] text-[1.5em]">Your one-stop-shop to keeping your furry friend happy</p>
          <Link to="/status" className="py-[0.5em] text-center w-[70%] ml-[15%] mt-[5%] rounded-full bg-[#A8DEF8] text-[2em] font-semibold shadow-xl">Get Started</Link>
        </div>
      </section>
      <AboutDogs/>
      <AboutVets/>
      <GsAndTs/>
      <Footer/>
    </div>




  )
}

export default HomePage

