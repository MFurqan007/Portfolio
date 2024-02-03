import React from 'react'
import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { LuMapPin } from "react-icons/lu";

export default function TabContactCard() {
  return (
    <div className='w-full h-auto border-[1px] py-[10px] border-r-0 border-l-0 border-t-[#383838] border-b-[#383838] mt-[10px]'>
        <div className='w-full h-auto flex flex-col md:grid md:grid-cols-2 md:gap-6 justify-between items-center'>
        
            <div className=' w-full h-[70px] flex '>
                <div className='basis-[15%] mr-[2%] flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                            <MdOutlineMail className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>EMAIL</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>mfurqannasir645@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[70px] flex'>
                <div className='basis-[15%] mr-[2%] flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                            <IoPhonePortraitOutline className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>PHONE</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>(+92) 335 7585343</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[70px] flex'>
                <div className='basis-[15%] mr-[2%] flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                        <RxCalendar className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>BIRTHDAY</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>June 25,2002</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[70px] flex'>
                <div className='basis-[15%] mr-[2%] flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                            <LuMapPin className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='basis-[50%] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>LOCATION</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>

        </div>
        
    </div>
  )
}
