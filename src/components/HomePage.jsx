import { Link } from "react-router-dom"
import Navbar from "./Navbar"
import dogFace from "../assets/happydogface.png"
import homeBg from "../assets/homeBg.png"
import AboutShop from "./AboutShop"
import OurServices from "./OurServices"
const HomePage = () => {
  return (
    <div>
      <section className="h-[100vh]  overflow-hidden bg-cover bg-center m-0 p-0 lg:grid lg:grid-cols-2 px-[5%]" style={{ backgroundImage: `url(${homeBg})` }}>
        <Navbar />
        <div className="pt-[20%] h-[50%] lg:w-[100%] lg:order-last lg:h-[100%] w-[100%]">
        
        <img className="" src={dogFace} />
      
        </div>
        <div className="flex flex-col lg:w-[100%] lg:mt-[30%]">
          <h1 className="text-center font-extrabold text-[4em]">BarkBox</h1>
          <p className="w-[70%] text-center ml-[15%] text-[1.5em]">Your one-stop-shop to a memorable journey with your best furry friend.</p>
          <Link to="/status" className="py-[0.5em] text-center w-[40%] ml-auto mr-auto mt-[5%] rounded-full bg-[#A8DEF8] text-[1.3em] font-bold shadow-xl">Get Started</Link>
        </div>
      </section>
      <AboutShop/>
      <OurServices/>
      
    </div>




  )
}

export default HomePage

