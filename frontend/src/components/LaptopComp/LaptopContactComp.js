import React from 'react'
import Image from 'next/image'
import Link from 'next/link';
import ProfileImg from '../../../public/ProfileImg.svg'
import TabQrCode from '../../components/TabQrCode'

import { MdOutlineMail } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RxCalendar } from "react-icons/rx";
import { LuMapPin } from "react-icons/lu";


import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

export default function LaptopContactComp() {
    const email = 'mfurqannasir645@gmail.com'

    const handleMobEmailClick = () => {
        window.location.href = `mailto:${email}`;
    };
  return (
    <div className='w-full h-max flex flex-col'>
        <div className='w-full h-auto pt-[30px] flex flex-col justify-center items-center'>
        
        <div className=' w-[150px] h-[150px] bg-[#3D3D3E] rounded-[15px] flex justify-center items-center'>
            <Image
                src={ProfileImg}
                className='w-[130px] h-[130px]'
            />
        </div>
        <div className='w-full h-auto flex flex-col justify-center items-center'>
            <p className='mt-[15px] font-sans text-[20px] font-[400] text-[white]'>M. Furqan Nasir</p>
            <div className='mt-[20px] w-full h-auto grid grid-cols-2 gap-y-3 gap-x-3'>
                <div className='w-max h-[20px] bg-[#3D3D3E] rounded-[5px] px-[15px] py-[12px] flex justify-center items-center'>
                    <p className=' font-sans text-[12px] font-normal text-[white]'>Web Developer</p>
                </div>
                <div className=' w-max h-[20px] bg-[#3D3D3E] rounded-[5px] px-[15px] py-[12px] flex justify-center items-center'>
                    <p className=' font-sans text-[12px] font-normal text-[white]'>DevOps</p>
                </div>
                <div className='w-max h-[20px] bg-[#3D3D3E] rounded-[5px] px-[15px] py-[12px] flex justify-center items-center'>
                    <p className=' font-sans text-[12px] font-normal text-[white]'>MERN Stack</p>
                </div>
                <div className='w-auto h-full' >
                    <TabQrCode/>
                </div>
            </div>
            <div className='mt-[30px] w-5/6 h-[2px] bg-[#3D3D3E] rounded-[10px]'/>
        </div>

        </div> 

        <div className='w-full h-auto mt-[15px]'>

            <div className='w-full h-[60px] flex '>
                <div className=' flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                            <MdOutlineMail className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='ml-[10px] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>EMAIL</p>
                        <p 
                            className='font-sans text-[14px] font-[400] text-white mt-[2px]'
                            onClick={handleMobEmailClick}
                        >mfurqannasir...</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[60px] flex'>
                <div className='flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                            <IoPhonePortraitOutline className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='ml-[10px] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>PHONE</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>(+92) 335 7585343</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[60px] flex'>
                <div className=' flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                        <RxCalendar className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='ml-[10px] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>BIRTHDAY</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>June 25,2002</p>
                    </div>
                </div>
            </div>

            <div className=' w-full h-[70px] flex'>
                <div className='flex justify-center items-center'>
                    <div className='w-auto h-auto p-[1px] flex justify-center items-center rounded-[10px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_0px_25px_10px_#1f2024]'>
                        <div className='w-[40px] h-[40px] bg-[#23252C] rounded-[10px] flex justify-center items-center'>
                            <LuMapPin className='w-[20px] h-[20px] text-[#d8ae59]'/>
                        </div>
                    </div>
                </div>
                <div className='ml-[10px] flex justify-start items-center'>
                    <div className='w-auto h-[40px]'>
                        <p className='font-sans text-[12px] font-[500] text-[#757575]'>LOCATION</p>
                        <p className=' font-sans text-[14px] font-[400] text-white mt-[2px]'>Islamabad, Pakistan</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='w-full h-auto mt-[5px] flex flex-col justify-center items-center'>
            <div className='mb-[10px] w-5/6 h-[2px] bg-[#3D3D3E] rounded-[10px]'/>
            <div className='w-4/6 h-auto flex justify-between items-center'>
                <Link 
                    href={"https://www.facebook.com/profile.php?id=100009237026250"}
                    passHref={true}
                >
                    <FaFacebook className='w-[20px] h-[20px] text-[#949496] hover:text-[#d8ae59]'/>
                </Link>
                <Link 
                    href={"https://x.com/MFurqanNasir786?t=_6iYudlSOVvszlo0dhtaSg&s=09"}
                    passHref={true}
                >
                    <FaTwitter className='w-[20px] h-[20px] text-[#949496] hover:text-[#d8ae59]'/>
                </Link>
                <Link 
                    href={"https://www.instagram.com/mfurqannasir24?igsh=MXE4azk2cXJrYmZqOA=="}
                    passHref={true}
                >
                    <FaInstagram className='w-[20px] h-[20px] text-[#949496] hover:text-[#d8ae59]'/>
                </Link>
                <Link 
                    href={"https://github.com/MFurqan007"}
                    passHref={true}
                >
                    <FaGithub className='w-[20px] h-[20px] text-[#949496] hover:text-[#d8ae59]'/>
                </Link>
                <Link 
                    href={"https://www.linkedin.com/in/muhammad-furqan-nasir-779562244"}
                    // href={"https://youtu.be/Zl-a07anm_8"}
                    passHref={true}
                >
                    <FaLinkedinIn className='w-[20px] h-[20px] text-[#949496] hover:text-[#d8ae59]'/>
                </Link>
            </div>
        </div>

    </div>
  )
}
