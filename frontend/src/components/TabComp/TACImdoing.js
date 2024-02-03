import React from 'react'
import { PiCodeBold } from "react-icons/pi";
import { LuMonitorCheck } from "react-icons/lu";
import { BsDatabaseCheck } from "react-icons/bs";
import { CgInfinity } from "react-icons/cg";

export default function TACImdoing() {
  return (
    <div className='w-full h-auto py-4 flex gap-5 flex-col justify-start items-center lg:grid lg:grid-cols-2 lg:gap-5'>
          
        <div className='w-auto h-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#4b4a4a] from-[25%] to-[#23252C] to-[50%] shadow-[0px_5px_20px_10px_#1f2024]'>
            <div className='w-[480px] h-[100px] lg:w-[325px] lg:h-[150px] bg-[#23252C] rounded-[10px] p-[10px] flex'>
                <div className=' basis-[20%] py-[5px] flex justify-center items-start lg:items-center lg:py-0'>
                    <PiCodeBold className='text-[#d8ae59] text-[45px]'/>
                </div>    
                <div className=' basis-[80%] py-[5px] lg:py-0 lg:ml-[15px] lg:flex lg:flex-col lg:justify-center lg:items-start'>
                    <p className='font-sans text-[19px] font-[700] text-[white]'>Web Development</p>
                    <p className='font-sans text-[14px] font-[400] text-[#b6b6b6]'>Bridging the gap between design and functionality to create web solutions. </p>
                </div>
            </div>
        </div>

        <div className='w-auto h-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#4b4a4a] from-[25%] to-[#23252C] to-[50%] shadow-[0px_5px_20px_10px_#1f2024]'>
            <div className='w-[480px] h-[100px] lg:w-[325px] lg:h-[150px] bg-[#23252C] rounded-[10px] p-[10px] flex'>
                <div className=' basis-[20%] py-[5px] flex justify-center items-start lg:items-center lg:py-0'>
                    <LuMonitorCheck className='text-[#d8ae59] text-[45px]'/>
                </div>    
                <div className=' basis-[80%] py-[5px] lg:py-0 lg:ml-[15px] lg:flex lg:flex-col lg:justify-center lg:items-start'>
                    <p className='font-sans text-[19px] font-[700] text-[white]'>Front-end Technologies</p>
                    <p className='font-sans text-[14px] font-[400] text-[#b6b6b6]'>Crafting responsive websites using frontend technologies like React, Next.js, and Vue.js.</p>
                </div>
            </div>
        </div>

        <div className='w-auto h-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#4b4a4a] from-[25%] to-[#23252C] to-[50%] shadow-[0px_5px_20px_10px_#1f2024]'>
            <div className='w-[480px] h-[100px] lg:w-[325px] lg:h-[150px] bg-[#23252C] rounded-[10px] p-[10px] flex'>
                <div className=' basis-[20%] py-[5px] flex justify-center items-start lg:items-center lg:py-0'>
                    <BsDatabaseCheck className='text-[#d8ae59] text-[45px]'/>
                </div>    
                <div className=' basis-[80%] py-[5px] lg:py-0 lg:ml-[15px] lg:flex lg:flex-col lg:justify-center lg:items-start'>
                    <p className='font-sans text-[19px] font-[700] text-[white]'>Back-end Technologies</p>
                    <p className='font-sans text-[14px] font-[400] text-[#b6b6b6]'>Proficient backend development using Python, Node.js and Express. </p>
                </div>
            </div>
        </div>

        <div className=' w-auto h-auto p-[2px] rounded-[10px] bg-gradient-to-br from-[#4b4a4a] from-[25%] to-[#23252C] to-[50%] shadow-[0px_5px_20px_10px_#1f2024]'>
            <div className=' w-[480px] h-[100px] lg:w-[325px] lg:h-[150px] bg-[#23252C] rounded-[10px] p-[10px] flex'>
                <div className=' basis-[20%] py-[5px] flex justify-center items-start lg:items-center lg:py-0'>
                    <CgInfinity className='text-[#ac71b9] text-[45px]'/>
                </div>    
                <div className=' basis-[80%] py-[5px] lg:py-0 lg:ml-[15px] lg:flex lg:flex-col lg:justify-center lg:items-start'>
                    <p className='font-sans text-[19px] font-[700] text-[white]'>DevOps Expertise</p>
                    <p className='font-sans text-[14px] font-[400] text-[#b6b6b6]'>Implementing efficient DevOps practices to ensure seamless deployment and scalability.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
