import { useState } from "react";
import { useNavigate } from "react-router-dom";
import signUpBg from "../assets/signUpBg.png"
import { Link } from "react-router-dom";

const SignUp = () => {
  //state to navigate 
  const navigate = useNavigate;
  //state to store form data
  const [formdata,setFormData]=useState({
      firstname:'',
      lastname:'',
      email:'',
      password:'',
      role:'user'
  })
  //func to handle formsubmit
  const handleSubmit=(event)=>{
      event.preventDefault;

      try {
          
      } catch (error) {
          
      }
  }
 
return (
  <section id="" className="h-[100vh] overflow-hidden bg-cover bg-center m-0 p-0 lg:grid lg:grid-rows-2" style={{backgroundImage:`url(${signUpBg})`}} >
        <div className="h-[25%] mb-[5%] lg:h-[60%] ">

        </div>
      <div className="p-[5%] h-[100%] w-full  lg:lg:w-[90%] lg:ml-[5%] mt-[-10%] lg:pt-[1em]">
          <form className="h-[100%] w-full flex flex-col lg:h-[100%]" onSubmit={handleSubmit}>

             <div className="h-[11%] mb-[1em] lg:h-[100%] lg:mb-[5%]">
             <label htmlFor="firstname" className="text-[1.5em]">Enter your firstname</label>
             <input type="text" id="firstname" className="h-[60%] w-[100%] border-[3px] rounded-2xl lg:h-[100%]"/>
             </div>

             <div className="h-[11%] mb-[1em] lg:h-[100%] lg:mb-[5%]">
             <label htmlFor="lastname" className="text-[1.5em]">Enter your lastname</label>
             <input type="text" id="lastname" className="h-[60%] w-[100%] border-[3px] rounded-2xl lg:h-[100%]"/>
             </div>

             <div className="h-[11%] mb-[1em] lg:h-[100%] lg:mb-[5%]">
             <label htmlFor="email" className="text-[1.5em]">Enter your email</label>
             <input type="email" id="email" className="h-[60%] w-[100%] border-[3px] rounded-2xl lg:h-[100%]"/>
             </div>

             <div className="h-[11%] mb-[1em] lg:h-[100%] lg:mb-[5%]">
             <label htmlFor="password" className="text-[1.5em]">Enter your password</label>
             <input type="password" id="password" className="h-[60%] w-[100%] border-[3px] rounded-2xl lg:h-[100%]"/>
             </div>

             <button className="p-[0.5em] h-[8%] bg-[#A8DEF8] text-[1.5em] font-extrabold text-[black] lg:h-[100%] mt-[1em] rounded-lg lg:text-[2em]" type="submit">Create Account</button>
             <p className="text-center text-[1.5em]">Already have an account? <Link to="/login" className="text-[blue]">Log In</Link></p>
          </form>
      </div>
  </section>
)
}

export default SignUp;