

const AboutLayout = ({h1Text, imageSrc, h3Text,pText,buttonText}) => {
  return (
    <section className="h-[90vh] w-[90%] ml-[5%] lg:h-[80vh]">
        <h1 className="text-[1.9em] mt-[15%] text-center font-bold lg:text-[2em] lg:mb-[2em]">{h1Text}</h1>
        <div className=" h-[90%] grid grid-rows-4 grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:border-[5px]">
          <div className="h-[100%] ml-auto mr-auto mt-[20%] lg:h-[100%] lg:border-[5px] lg:mt-0">
          <img src={imageSrc} alt="" className="border-[5px] h-[100%]" />
          </div>
          <div className="h-[100%] mt-[40%] lg:border-[5px] lg:mt-0 lg:py-[5%] lg:px-[5%] ">
            <h3 className="text-[2em] font-semibold mb-[1em] text-center lg:border lg:mt-[1em] lg:text-[1.8em]">{h3Text}</h3>
            <p className="text-[1.5em] text-center lg:text-[1.5em]">{pText} </p>
            <button className="p-[1em] bg-[#A8DEF8] w-[70%] ml-[15%] mt-[5%] h-[40%] rounded-full text-[1.5em] font-extrabold lg:h-[20%] lg:p-[0.5em]">{buttonText}</button>
          </div>
        </div>


      </section>
  )
}

export default AboutLayout