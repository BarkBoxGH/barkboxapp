import React from 'react'
import ourServicesBg from "../assets/ourServicesBg.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquareCheck } from '@fortawesome/free-solid-svg-icons'
import dogHug from "../assets/dogHug.png"
const OurServices = () => {
  return (
    <div>
        <section className='h-[100vh] flex justify-center items-center px-[10%] ' style={{backgroundImage:`url(${ourServicesBg})`}}>
            <div className='border h-full w-[60%]'>
                <img src={dogHug} alt="Image of Dog and Owner" />
            </div>
            <div className='border h-full w-[40%]'>
                <h2 className='text-left mt-[40%] text-[1.3em] w-[70%] ml-auto mr-auto font-extrabold mb-[1em]'>We help you take care of your dogs.</h2>
                <p className='w-[70%] ml-auto mr-auto'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Doloremque fuga quisquam iste est necessitatibus omnis sunt asperiores</p>
                <div className='grid grid-cols-2 grid-rows-2 h-[20%] px-[7%]'>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faSquareCheck} className="text-[#A8DEF8] text-[2em]"/><p>Verternarians</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faSquareCheck} className="text-[#A8DEF8] text-[2em]"/><p>Groomers</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faSquareCheck} className="text-[#A8DEF8] text-[2em]"/><p>Dog Supplies</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        <FontAwesomeIcon icon={faSquareCheck} className="text-[#A8DEF8] text-[2em]"/><p>Trainers</p>
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default OurServices