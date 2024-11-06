import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

const VendorSignUp = () => {
  return (
    <div>
  <section className="lg:h-[100vh]">
    <div className="h-[20%] flex pl-[10%] pt-[20%]">
      <FontAwesomeIcon className="text-[2em] mt-[0.8em] mr-[15%]" icon={faArrowLeftLong} />
      <h1 className="text-[3em] text-center font-bold">Sign Up</h1>
    </div>
    <div className="h-auto rounded-tl-[18%] w-full bg-[#A8DEF8] mb-0 pt-[10%]">
      <form className="h-[100%] w-[80%] ml-auto mr-auto grid grid-rows-6 grid-cols-1 gap-[2em]">
        {/* INPUT FOR BUSINESS NAME */}
        <div className="bg-[white] rounded-xl border pl-[5%]">
          <label htmlFor="businessname" className="text-[1.4em] font-semibold">Business name</label>
          <input type="text" id="businessname" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
        </div>
        {/* INPUT FOR FIRST NAME */}
        <div className="bg-[white] rounded-xl border pl-[5%]">
          <label htmlFor="firstname" className="text-[1.4em] font-semibold">First name</label>
          <input type="text" id="firstname" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
        </div>
        {/* INPUT FOR LAST NAME */}
        <div className="bg-[white] rounded-xl border pl-[5%]">
          <label htmlFor="lastname" className="text-[1.4em] font-semibold">Last name</label>
          <input type="text" id="lastname" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
        </div>
        {/* INPUT FOR EMAIL */}
        <div className="bg-[white] rounded-xl border pl-[5%]">
          <label htmlFor="email" className="text-[1.4em] font-semibold">Email</label>
          <input type="email" id="email" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
        </div>
        {/* INPUT FOR PASSWORD */}
        <div className="bg-[white] rounded-xl border pl-[5%]">
          <label htmlFor="password" className="text-[1.4em] font-semibold">Password</label>
          <input type="password" id="password" className="border-b-4 w-[90%] h-[55%] text-[1.4em] text-[#5c5c5c]"/>
        </div>

        <button className="bg-[black] h-[70%] text-[white] text-[1.5em] font-extrabold">Sign Up</button>


      </form>
    </div>
  </section>
</div>
  )
}

export default VendorSignUp