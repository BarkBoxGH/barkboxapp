import { useNavigate } from "react-router-dom";
import { useState } from "react";
import LoginBg from "../assets/LoginBg.png";

const LogIn = () => {
    //state to navigate 
  const navigate = useNavigate;
  //state to store form data
  const [forlgata,setForlgata]=useState({
      email:'',
      password:''
  })
  //func to handle formsubmit
  const handleSubmit=(event)=>{
      event.preventDefault;

      try {
          
      } catch (error) {
          
      }
  }
    return (
        <section id="" className="h-[100vh] overflow-hidden bg-cover bg-right m-0 p-0 lg:grid lg:grid-rows-2" style={{backgroundImage:`url(${LoginBg})`}} >
            <div className="p-[5%] pt-[30%] h-[70%] w-full lg:w-[90%] lg:ml-[5%] lg:pt-[1em] lg:mt-[5%] lg:h-[100%]">
                <form className="h-[100%] w-full flex flex-col lg:h-[70%] lg:grid-rows-3 lg:border-[5px]" onSubmit={handleSubmit}>
      
                   <div className="h-[20%] mb-[1em] lg:h-[100%] lg:mb-[5%]">
                   <label htmlFor="email" className="text-[1.5em]">Enter your email</label>
                   <input type="email" id="email" className="h-[60%] w-[100%] border-[3px] rounded-2xl lg:h-[100%]"/>
                   </div>
      
                   <div className="h-[20%] mb-[1em] lg:h-[100%] lg:mb-[5%]">
                   <label htmlFor="password" className="text-[1.5em]">Enter your password</label>
                   <input type="password" id="password" className="h-[60%] w-[100%] border-[3px] rounded-2xl lg:h-[100%]"/>
                   </div>
      
                   <button className="p-[0.5em] h-[15%] bg-[#A8DEF8] text-[1.5em] font-extrabold text-[black] lg:h-[100%] mt-[1em] rounded-lg lg:text-[2em]" type="submit">Log In</button>
                </form>
            </div>
        </section>
      )
}

export default LogIn