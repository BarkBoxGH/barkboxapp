import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


const VendorLogin = () => {
  const navigate = useNavigate();
  return (
    <div>
      <section className="h-[100vh] bg-[#A8DEF8] py-[3%] px-[15%]">
        <div className="w-[75%] bg-white rounded-3xl z-1 flex flex-col pt-[3%] px-[5%] ml-auto mr-auto h-[80%]">
          <div className="h-[10%] mb-[0.5em] flex">
            <FontAwesomeIcon icon={faArrowLeftLong} onClick={()=>navigate("/vendorsignup")} className="hover:cursor-pointer text-[1.5em] mt-[0.5em] mr-[5%]" />
            <h1 className="text-[1.8em] font-bold">Log Into Your Account</h1>
          </div>
          
          <div className="h-[10%] w-[80%] ml-auto mr-auto flex justify-center items-center gap-x-[5%] mb-[5%]">
            <button onClick="" className="w-[50%] ml-auto mr-auto h-full border flex pt-[0.3em]">
              <img src="" className="h-[1.5em] ml-[10%] mr-[5%]" alt="Google" />
              <p>Sign In with Google</p>
            </button>
            {/* <button className="w-full h-full border flex pt-[0.3em]">
              <img src={appleIcon} className="h-[1.5em] ml-[10%] mr-[5%]" alt="Apple" />
              <p>Sign up with Apple</p>
            </button> */}
          </div>
          {/* <hr className="w-[80%] ml-auto mr-auto" />
          <h2 className="font-semibold bg-white text-center mt-[-0.8em] w-[10%] h-[5%] ml-auto mr-auto mb-[0.5em]">OR</h2> */}
          <form onSubmit="" className="h-[100%]">
            <div className="h-auto w-[80%] flex flex-col gap-y-[1em] ml-auto mr-auto">
              <div className="h-[100%] w-[80%] ml-auto mr-auto pb-[1em] pl-[0.5em]">
                <input
                  type="email" 
                  name="email"
                  placeholder="Email"
                  className="h-[80%] border-b-2 w-[90%]"
                />
              </div>
              <div className="h-[100%] w-[80%] ml-auto mr-auto pb-[1em] pl-[0.5em]">
                <input
                  type=""
                  name="password"
                  placeholder="Password"
                  className="h-[80%] border-b-2 w-[90%]"
                />
                {/* <div className="mt-[-1.4em] ml-[85%]">
                  {showPass ? (
                    <FontAwesomeIcon icon={faEye} onClick={toggleVisibility} className="text-[#0d8a2e] cursor-pointer" />
                  ) : (
                    <FontAwesomeIcon icon={faEyeSlash} onClick={toggleVisibility} className="text-[#0d8a2e] cursor-pointer" />
                  )}
                </div> */}
                
                <button 
                  type="submit" 
                  disabled=""// Disable button when loading
                  className="mt-[5%] h-[20%] w-full border bg-[#A8DEF8] text-center text-[black] font-bold py-[0.5em]"
                >
                  Log In
                </button>
                <p className="mt-[5%] mb-[5%] text-center">
                  Don't have an account? <Link to="/vendorsignup" className="font-semibold">Sign Up</Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default VendorLogin;
