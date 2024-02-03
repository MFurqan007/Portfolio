import React from 'react'

import TACImdoing from './TACImdoing';
import TACWorkedWith from './TACWorkedWith';

export default function TabAboutComp() {
  return (
    <div className='w-full h-auto'>
      <div className=''>
       
        <p className='mt-[15px] font-sans text-[16px] font-[300] text-[#b6b6b6]'>🚀 Greetings! I'm a seasoned web developer passionate about creating exceptional digital experiences. With expertise spanning React, Next.js, Node.js, and more, I bring a holistic approach to web development, crafting seamless solutions from stunning websites to robust applications.</p>
        <p className='mt-[10px] font-sans text-[16px] font-[300] text-[#b6b6b6]'>My commitment to clear communication, tailored solutions, efficiency, and innovative problem-solving sets me apart. Whether you're a startup, enterprise, or anything in between, I'm here to transform your digital vision into reality. Let's collaborate and turn your ideas into a successful, feature-rich reality. Feel free to message me, and together, we can embark on an exciting journey of innovation and success!</p>
      </div>
      <div className=' mt-[20px]'>
        <div className='w-auto h-auto pt-[5px]'>
          <p className='font-sans text-[21px] font-[700] text-[white]'>What I'm Doing</p>
        </div>
        <TACImdoing/>  
      </div>
      {/* Feature Additional Needed: 
        Referals Tab
      */}
      <div className='w-full mt-[20px]'>
        <div className='w-auto h-auto pt-[5px]'>
          <p className='font-sans text-[21px] font-[700] text-[white]'>Worked With</p>
        </div>
        <TACWorkedWith/>
      </div>
    </div>
  )
}
