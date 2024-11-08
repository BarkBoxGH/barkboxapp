import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import userSideDog from "../assets/userSideDog.svg"
const UserSignUp = () => {
    const navigate = useNavigate();
  return (
    <div>
    <section className="h-[100vh] bg-[#A8DEF8] py-[3%] px-[15%]">
      <div className=" h-[100%] bg-white w-[100%] rounded-3xl flex">
        <div className="w-[50%] rounded-3xl">
        <img src={userSideDog} className=""/>
        </div>
        <div className="w-[50%] bg-[white] rounded-3xl z-10 flex flex-col pt-[3%] px-[5%] ml-auto mr-auto">
          <div className="h-[10%] mb-[0.5em] flex">
            <button className="mr-[5%]">
            <FontAwesomeIcon icon={faArrowLeftLong} onClick={()=>navigate("/status")} className="text-[1.5em] mt-[0.5em] mr-[5%]" />
            </button>
            <h1 className="text-[1.8em] font-bold">Create Account - User</h1>
          </div>
          {/* <div className="h-[10%] flex justify-center items-center gap-x-[5%] mb-[5%]">
            <button onClick="" className="w-[70%] h-[100%] border flex pt-[0.3em] hover:cursor-pointer ml-auto mr-auto">
              <img src="" className="h-[1.5em] ml-[10%] mr-[5%]" alt="Google" />
              <p>Sign up with Google</p>
            </button>
            {/* <button className="w-[100%] h-[100%] border flex pt-[0.3em]">
              <img src={appleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Apple" />
              <p>Sign Up with Apple</p>
            </button> 
          </div>
          <hr />
          <h2 className="font-semibold bg-[white] text-center mt-[-0.8em] w-[10%] h-[5%] ml-auto mr-auto mb-[0.5em]">OR</h2> */}
          <form onSubmit="" className="mt-[10%] h-[100%]">
            <div className="grid grid-rows-4 grid-cols-1 h-auto gap-y-[1em] w-[70%] ml-auto mr-auto">
          
              <div className="h-[100%] pb-[1em] pl-[0.5em]">
                <input type="email" id="email" name="email" placeholder="Email" className="w-[100%] h-[80%] border-b-2" />
              </div>
              <div className="h-[100%] pb-[1em] pl-[0.5em]">
                <div className="flex h-[100%]">
                  <input type="" id="password" name="password" placeholder="Password" className="w-[100%] h-[80%] border-b-2" />
                  <FontAwesomeIcon icon="" onClick="" className="ml-[-1.5em] text-[black] mt-[-0.3em] cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <button type="submit" disabled="" className="mt-[5%] mb-[3%] h-[20%] border bg-[#A8DEF8] text-center text-[black] rounded-lg py-[0.6em] font-bold w-[70%] ml-auto mr-auto">
                Create Account
              </button>
              <p className="text-center">Already have an account? <Link to="/userlogin" className="underline text-[black]">Log In</Link></p>
            </div>
          </form>
        </div>
      </div>
    </section>
  </div>
  )
}

export default UserSignUp