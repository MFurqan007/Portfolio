import React from 'react'

import Link from 'next/link';

import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
export default function TabSocialMediaCard() {
  return (
    <div className='w-full h-auto mt-[15px]'>
        <div className='w-[180px] h-auto flex justify-between items-center'>
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
            passHref={true}
        >
            <FaLinkedinIn className='w-[20px] h-[20px] text-[#949496] hover:text-[#d8ae59]'/>
        </Link>
        </div>
    </div>
  )
}
