import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
  //state for wheteher menu is opened or closed
  const [menuToggle, setMenuToggle] = useState(false);
  //function to toggle menu
  const toggleMenuFunc = () => {
    setMenuToggle(!menuToggle);
  }
  return (
    <div className="bg-[white] h-[7%] flex py-[1em] px-[0.5em] z-1 w-full lg:w-[100vw] lg:h-[10%] fixed">
      <h1 className="font-extrabold text-[2em] mr-[70%]">logo</h1>
      

      <FontAwesomeIcon icon={faBars} className="font-bold text-[2em]" onClick={toggleMenuFunc} />

      {menuToggle && (
        <ul className="absolute z-1 bg-[#A8DEF8] text-[black] flex flex-col gap-[1.8em] w-[45%] py-[1em] pl-[5%] text-[1.2em] font-semibold right-10 mt-[10%] lg:h-auto lg:mt-[3%] lg:w-[25%]">
        <Link><li className="text-[1.5em]">Home</li></Link>
        <Link><li className="text-[1.5em]">Shop</li></Link>
        <Link><li className="text-[1.5em]">Vets</li></Link>
        <Link><li className="text-[1.5em]">Grooming</li></Link>
        <Link><li className="text-[1.5em]">Training</li></Link>
        <Link><li className="text-[1.5em]">Bark-Alert</li></Link>
      </ul>
      )}

    </div>
  )
}

export default Navbar