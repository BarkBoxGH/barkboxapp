import { faCartPlus, faPaw } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AboutShop = () => {
  return (
    <div>
        <section className="h-[100vh] px-[5%] pt-[5%]">
            <div className='h-[80%] px-[10%] '>
            <div className="h-[30%] ">
                <p className='text-center'>Our Shop</p>
                <h1 className='text-[1.8em] font-extrabold text-center '>Shop our products</h1>
                <p className='text-center w-[40%] ml-auto mr-auto text-[1em] '>Buy the best dog care supplies from verified vendors, at the best prices and have them delivered to you.</p>
            </div>
            <div className='flex h-[70%] mt-[1em]'>
                <div className=' h-[80%] w-[20%] flex-col p-[1em] rounded-2xl shadow-lg mr-[2em] ml-[5%]'>
                    <img src='' alt="product image" className='h-[80%] '/>
                    <div className='flex'>
                    <div className='h-[20%] w-[70%]'>
                        <h3>Product name</h3>
                        <p>Price</p>
                    </div>
                    <FontAwesomeIcon icon={faCartPlus} className='text-[1.5em] ml-[10%] mt-[0.3em]'/>
                    </div>

                </div>
                <div className=' h-[80%] w-[20%] flex-col p-[1em] rounded-2xl shadow-lg mr-[2em]'>
                    <img src='' alt="product image" className='h-[80%] '/>
                    <div className='flex'>
                    <div className='h-[20%] w-[70%]'>
                        <h3>Product name</h3>
                        <p>Price</p>
                    </div>
                    <FontAwesomeIcon icon={faCartPlus} className='text-[1.5em] ml-[10%] mt-[0.3em]'/>
                    </div>

                </div>
                <div className=' h-[80%] w-[20%] flex-col p-[1em] rounded-2xl shadow-lg mr-[2em]'>
                    <img src='' alt="product image" className='h-[80%] '/>
                    <div className='flex'>
                    <div className='h-[20%] w-[70%]'>
                        <h3>Product name</h3>
                        <p>Price</p>
                    </div>
                    <FontAwesomeIcon icon={faCartPlus} className='text-[1.5em] ml-[10%] mt-[0.3em]'/>
                    </div>

                </div>
                <div className=' h-[80%] w-[20%] flex-col p-[1em] rounded-2xl shadow-lg'>
                    <img src='' alt="product image" className='h-[80%] '/>
                    <div className='flex'>
                    <div className='h-[20%] w-[70%]'>
                        <h3>Product name</h3>
                        <p>Price</p>
                    </div>
                    <FontAwesomeIcon icon={faCartPlus} className='text-[1.5em] ml-[10%] mt-[0.3em]'/>
                    </div>

                </div>
            </div>
            <button className='p-[0.5em] w-[20%] bg-[#A8DEF8] rounded-full ml-[40%]'> Shop Now<FontAwesomeIcon icon={faPaw} className='ml-[1em]'/></button>
            </div>
            
        </section>
    </div>
  )
}

export default AboutShop