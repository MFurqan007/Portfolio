import React from 'react'
import { IoBookOutline } from "react-icons/io5";
import Circle from '../../../public/Circle.svg'
import Image from 'next/image'

export default function TRCEducation() {
  return (
    <div className='w-full h-auto'>
        {/* First Item */}
        <div className='w-full h-auto flex'>
            <div className='w-auto flex flex-col justify-start items-center pt-4 px-2 h-auto'>
                
                <div className='w-auto h-auto p-[1px] rounded-[10px] bg-gradient-to-br from-[#4b4a4a] from-[30%] to-[#23252C] to-[50%] shadow-[0px_0px_10px_1px_#1f2024]'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center rounded-[10px] bg-[#23252C]'>
                        <IoBookOutline className='text-[25px] text-[#d8ae59]'/>
                    </div>
                </div>
                <div className='w-[2px] h-[30px] bg-[#383838]'/>

                <div className='w-[50px] h-auto flex justify-center items-center'>
                    <div className='w-auto h-auto p-[4px] bg-[#383838] rounded-full'>
                        <Image
                            src={Circle}
                            className='w-[7px] h-[7px]'
                        />
                    </div>
                </div>
                <div className='flex-1 w-[2px] h-auto bg-[#383838]'/>
            </div>
            <div className='w-auto h-auto pt-6 flex flex-col justify-start'>
                <p className='font-sans text-[24px] font-[700] text-[white]'>Education</p>
                <p className='mt-8 font-sans text-[16px] font-[600] text-[white]'>FAST NUCES Islamabad</p>
                <p className='font-sans text-[16px] font-[500] text-[#d8ae59]'>2020-Present</p>
                <p className='font-sans text-[16px] text-[#b6b6b6]'>
                Currently pursuing a Bachelor's in Computer Science at FAST, I am dedicated to acquiring comprehensive knowledge and practical skills in the dynamic field of computer science, eager to contribute to innovative solutions and advancements in technology.
                </p>
            </div>
        </div>
        {/* Second Item */}
        <div className='w-full h-auto flex'>
            <div className='w-auto flex flex-col justify-start items-center px-[9px] h-auto'>
                <div className='w-[2px] h-[20px] bg-[#383838]'/>

                <div className='w-[50px] h-auto flex justify-center items-center'>
                    <div className='w-auto h-auto p-[4px] bg-[#383838] rounded-full'>
                        <Image
                            src={Circle}
                            className='w-[7px] h-[7px]'
                        />
                    </div>
                </div>
                <div className='flex-1 w-[2px] h-auto bg-[#383838]'/>
            </div>
            <div className='w-auto h-auto flex flex-col justify-start'>
                <p className='mt-3.5 font-sans text-[16px] font-[600] text-[white]'>HeadStart School Islamabad</p>
                <p className='font-sans text-[16px] font-[500] text-[#d8ae59]'>2018-2020</p>
                <p className='font-sans text-[16px] text-[#b6b6b6]'>
                Securing grades 1A and 2B in my A levels demonstrates continued academic prowess and adaptability. These results further contribute to my educational journey, showcasing a well-rounded commitment to excellence at Headstart School.
                </p>
            </div>
        </div>
        {/* Third Item */}
        <div className='w-full h-auto flex'>
            <div className='w-auto flex flex-col justify-start items-center px-[9px] h-auto'>
                <div className='w-[2px] h-[20px] bg-[#383838]'/>

                <div className='w-[50px] h-auto flex justify-center items-center'>
                    <div className='w-auto h-auto p-[4px] bg-[#383838] rounded-full'>
                        <Image
                            src={Circle}
                            className='w-[7px] h-[7px]'
                        />
                    </div>
                </div>
            </div>
            <div className='w-auto h-auto flex flex-col justify-start'>
                <p className='mt-3.5 font-sans text-[16px] font-[600] text-[white]'>HeadStart School Islamabad</p>
                <p className='font-sans text-[16px] font-[500] text-[#d8ae59]'>2016-2018</p>
                <p className='font-sans text-[16px] text-[#b6b6b6]'>
                Attaining 2A* and 6A grades during my O levels at Headstart School exemplifies the high academic standards of a typical private school education. This outstanding achievement has earned me a prestigious 100% scholarship for my A levels, reflecting my dedication to academic excellence.
                </p>
            </div>
        </div>
    </div>
  )
}
