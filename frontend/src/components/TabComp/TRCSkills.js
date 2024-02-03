import React from 'react'
import P0 from '../SkillBrick/P0'
import P2 from '../SkillBrick/p2'
import P4 from '../SkillBrick/p4'
import P6 from '../SkillBrick/p6'
import P8 from '../SkillBrick/p8'
import P10 from '../SkillBrick/p10'

export default function TRCSkills() {
  return (
    <div className='w-full h-auto py-4'>
        <p className='font-sans text-[24px] font-[700] text-[white]'>My Skills</p>
        <div className='w-full h-auto py-4 flex justify-center items-center'>
            <div className=' w-11/12 p-[1px] h-auto rounded-[20px] bg-gradient-to-br from-[#4b4a4a] from-[30%] to-[#23252C] to-[50%] shadow-[0px_10px_10px_2px_#1f2024]'>
                <div className='w-full h-auto p-6 rounded-[20px] bg-[#23252C]'>
                  {/* Skill 1 */}
                    <div className=' w-full h-auto '>
                      <div className='w-full h-auto flex'>
                        <p className='font-sans text-[16px] font-[600] text-[white]'>Next JS</p>
                        <p className=' ml-[10px] font-sans text-[16px] font-[600] text-[#5e5e5e]'>80%</p>
                      </div>
                      <div className='mt-2 w-full h-auto flex'>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P8 color="#d8ae59"/>
                        <P0 color="#d8ae59"/>
                      </div>
                    </div>

                    {/* Skill 2 */}
                    <div className='mt-4 w-full h-auto'>
                      <div className='w-full h-auto flex'>
                        <p className='font-sans text-[16px] font-[600] text-[white]'>MERN Stack</p>
                        <p className=' ml-[10px] font-sans text-[16px] font-[600] text-[#5e5e5e]'>90%</p>
                      </div>
                      <div className='mt-2 w-full h-auto flex'>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P4 color="#d8ae59"/>
                      </div>
                    </div>

                    {/* Skill 3 */}
                    <div className='mt-4 w-full h-auto'>
                      <div className='w-full h-auto flex'>
                        <p className='font-sans text-[16px] font-[600] text-[white]'>Python, FLask</p>
                        <p className=' ml-[10px] font-sans text-[16px] font-[600] text-[#5e5e5e]'>60%</p>
                      </div>
                      <div className='mt-2 w-full h-auto flex'>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P6 color="#d8ae59"/>
                        <P0 color="#d8ae59"/>
                        <P0 color="#d8ae59"/>
                      </div>
                    </div>

                    {/* Skill 4 */}
                    <div className='mt-4 w-full h-auto '>
                      <div className='w-full h-auto flex'>
                        <p className='font-sans text-[16px] font-[600] text-[white]'>Docker, Kubernetes</p>
                        <p className=' ml-[10px] font-sans text-[16px] font-[600] text-[#5e5e5e]'>70%</p>
                      </div>
                      <div className='mt-2 w-full h-auto flex'>
                        <P10 color="#ac71b9"/>
                        <P10 color="#ac71b9"/>
                        <P10 color="#ac71b9"/>
                        <P10 color="#ac71b9"/>
                        <P2 color="#ac71b9"/>
                        <P0 color="#ac71b9"/>
                      </div>
                    </div>

                    {/* Skill 5 */}
                    <div className='mt-4 w-full h-auto'>
                      <div className='w-full h-auto flex'>
                        <p className='font-sans text-[16px] font-[600] text-[white]'>CI/CD, Github Actions</p>
                        <p className=' ml-[10px] font-sans text-[16px] font-[600] text-[#5e5e5e]'>70%</p>
                      </div>
                      <div className='mt-2 w-full h-auto flex'>
                        <P10 color="#ac71b9"/>
                        <P10 color="#ac71b9"/>
                        <P10 color="#ac71b9"/>
                        <P10 color="#ac71b9"/>
                        <P2 color="#ac71b9"/>
                        <P0 color="#ac71b9"/>
                      </div>
                    </div>

                    {/* Skill 6 */}
                    <div className='mt-4 w-full h-auto'>
                      <div className='w-full h-auto flex'>
                        <p className='font-sans text-[16px] font-[600] text-[white]'>DBMS: MySql</p>
                        <p className=' ml-[10px] font-sans text-[16px] font-[600] text-[#5e5e5e]'>60%</p>
                      </div>
                      <div className='mt-2 w-full h-auto flex'>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P10 color="#d8ae59"/>
                        <P6 color="#d8ae59"/>
                        <P0 color="#d8ae59"/>
                        <P0 color="#d8ae59"/>
                      </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
