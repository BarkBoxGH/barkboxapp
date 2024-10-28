import { Link } from "react-router-dom"
import Navbar from "./Navbar"

const HomePage = () => {
  return (
    <section id="homeLanding" className="border w-full" >
        <Navbar/>
       <div className="h-[60%]"></div>
       <div className="flex flex-col">
            <h1 className="text-center font-extrabold text-[4em] mt-[-10%]">BarkBox</h1>
            <p className="w-[70%] text-center ml-[15%] text-[1.5em]">Your one-stop-shop to keeping your furry friend happy</p>
            <Link to="" className="py-[0.5em] px-[1.2em] w-[70%] ml-[15%] mt-[5%] rounded-full bg-[#A8DEF8] text-[2em] font-semibold">Create account</Link>
       </div>
    </section>

  )
}

export default HomePage