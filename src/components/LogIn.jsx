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
       <section className="h-[100vh] pt-[2em]">
        <div className="h-[80%] w-[30%] mr-auto ml-auto border-[5px]">
            <form action="" className="h-[100%] w-[100%] flex flex-col">
                <div>
                    <h1 className="text-center text-[1.5em] font-bold">Log Into Your Account</h1>
                </div>
                <div>
                    <input type="text" />
                    <label htmlFor=""></label>
                </div>
            </form>
        </div>
       </section>
      )
}

export default LogIn