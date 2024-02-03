import React from 'react'
import { LiaBriefcaseSolid } from "react-icons/lia";
import Circle from '../../../public/Circle.svg'
import Image from 'next/image'

export default function TRCExperience() {
  return (
    <div className='w-full h-auto'>
        {/* First Item */}
        <div className='w-full h-auto flex'>
            <div className='w-auto flex flex-col justify-start items-center pt-4 px-2 h-auto'>
                
                <div className='w-auto h-auto p-[1px] rounded-[10px] bg-gradient-to-br from-[#4b4a4a] from-[30%] to-[#23252C] to-[50%] shadow-[0px_0px_10px_1px_#1f2024]'>
                    <div className='w-[50px] h-[50px] flex justify-center items-center rounded-[10px] bg-[#23252C]'>
                        <LiaBriefcaseSolid className='text-[25px] text-[#d8ae59]'/>
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
                <p className='font-sans text-[24px] font-[700] text-[white]'>Experience</p>
                <p className='mt-8 font-sans text-[16px] font-[600] text-[white]'>React Developer Intern</p>
                <div className='w-3/4 h-auto flex justify-between'>
                    <p className='font-sans text-[16px] font-[500] text-[#d8ae59]'>Plural Dynamics</p>
                    <p className='font-sans italic text-[14px] font-[500] text-[#d8ae59]'>Apr'23 - July'23</p>
                </div>

                <p className='font-sans text-[16px] text-[#b6b6b6]'>
                Proficient in modern frontend tools (Vite, Webpack, npm) for collaborative development. Key role in creating an intuitive repair services platform with React.js, Tailwind CSS, Ant Design, and Reactstrap, implementing React Router v6, Axios, and effective state management for optimal performance and user experience.
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
            </div>
            <div className='w-auto h-auto flex flex-col justify-start'>
                <p className='mt-3.5 font-sans text-[16px] font-[600] text-[white]'>Product Based Teams</p>
                <div className='w-3/4 h-auto flex justify-between'>
                    <p className='font-sans text-[16px] font-[500] text-[#d8ae59]'>GrabTasks</p>
                    <p className='font-sans italic text-[14px] font-[500] text-[#d8ae59]'>Jun'23 - Oct'23</p>
                </div>
                <p className='font-sans text-[16px] text-[#b6b6b6]'>
                Web Pages of a product aimed at developing a platform that promotes skill based hiring by providing various areas
for candidates to build their portfolio and companies to hire them based on their niche.
                </p>
                <div className='w-3/4 mt-[10px] h-auto flex justify-between'>
                    <p className='font-sans text-[16px] font-[500] text-[#d8ae59]'>Auxi</p>
                    <p className='font-sans italic text-[14px] font-[500] text-[#d8ae59]'>Sept'21 - Jun'22</p>
                </div>
                <p className='font-sans text-[16px] text-[#b6b6b6]'>
                Product that aims at enhancing student life at the university by providing a platform where students can see their
time table, connect to the photocopier, place orders in the cafeteria etc.
                </p>
            </div>
        </div>

    </div>
  )
}
