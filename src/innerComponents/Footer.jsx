import instaLogo from "../assets/instaLogo.jpg"
import fbLogo from "../assets/fbLogo.png"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="h-[50vh] w-full mt-[30%] pt-[30%] grid grid-cols-1 grid-rows-3">
        <div className="flex justify-center"> <h1 className="font-extrabold text-[2em] text-center">logo</h1></div>
        {/* logos */}
        <div className="border grid grid-rows-1 grid-cols-3 justify-center py-[1em] px-[2em] gap-x-[1em]">
            <ul>
                <li className="h-[100%]">
                    
                </li>
            </ul>
            <ul>
                <li className="h-[100%]">
                   
                </li>
            </ul>
            <ul>
                <li className="h-[100%]"></li>
            </ul>
        </div>
        <div className=" grid grid-cols-2">
            <div>
                <ul>
                    <li className="text-[1.2em]"><Link to="">Home</Link></li>
                    <li className="text-[1.2em]"><Link to="">Privacy Policy</Link></li>
                    <li className="text-[1.2em]"><Link to="">Contact Us</Link></li>
                    <li className="text-[1.2em]"><Link to="">FAQs</Link></li>
                </ul>
            </div>
            <div className="text-right">
                <ul>
                <li className="text-[1.2em]"><Link to="">Vets</Link></li>
                <li className="text-[1.2em]"><Link to="">Groomer</Link></li>
                <li className="text-[1.2em]"><Link to="">Trainers</Link></li>
                <li className="text-[1.2em]"><Link to="">Bark-Alert</Link></li>
                </ul>
            </div>
            </div>
    </div>
  )
}

export default Footer