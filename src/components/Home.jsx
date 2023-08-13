import React from 'react';
import HeroImage from '../assets/hero.png';
import {MdOutlineArrowRight} from "react-icons/md";

const Home = () => {
  return (
    <div name="home"className= "h-screen w-full bg-gradient-to-b via-black from-black to-cyan-800"> 
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>Hi! I'm Muhammad Raihan Maulana</h2>
                <p className='text-gray-300 py-4 max-w-md'>
                    Laman ini dibuat untuk memenuhi Tugas Khusus Oprec Staf IT Dev OH 2023
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-green-500 to-blue-700 cursor-pointer'>
                        About
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineArrowRight size={25} className='ml-1' />
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full'/>
            </div>
        </div>
    </div>
  )
}

export default Home