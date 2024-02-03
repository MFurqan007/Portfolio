import React from 'react'
import TRCEducation from './TRCEducation'
import TRCExperience from './TRCExperience'
import TRCSkills from './TRCSkills'

export default function TabResumeComp() {
  return (
    <div className='w-full h-auto'>
      <div className='w-full h-auto flex gap-[30px] pr-[50px] py-[5px] justify-end items-center'>
        <a href="/Furqan Resume Dev.pdf" download="Furqan Resume Dev.pdf">
          <div className='w-[150px] h-[30px] shadow-[0px_0px_10px_1px_#e4c383] flex justify-center items-center rounded-[5px] bg-[#d8ae59]'>
            <p className='font-sans text-[16px] font-[500] text-[#383838]'>Developer</p>
          </div>
        </a>
        <a href="/Furqan Resume Dev&DevOps.pdf" download="Furqan Resume Dev&DevOps.pdf">
          <div className='w-[150px] h-[30px] shadow-[0px_0px_10px_1px_#d5a0e0] flex justify-center items-center rounded-[5px] bg-[#ac71b9]'>
            <p className='font-sans text-[16px] font-[500] text-[#383838]'>Dev & DevOps</p>
          </div>
        </a>
      </div>
      <div className='w-full h-auto'>
        <TRCEducation/>
      </div>
      <div className='w-full h-auto'>
        <TRCExperience/>
      </div>
      <div className='w-full h-auto'>
        <TRCSkills/>
      </div>
    </div>
  )
}
