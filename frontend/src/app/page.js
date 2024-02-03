'use client'
import { useState } from 'react'
import Image from 'next/image'
import ProfileImg from '../../public/ProfileImg.svg'

import MobCard from '../components/MobileCard'

import TabContactCard from '@/components/TabContactCard'
import TabSocialMediaCard from '@/components/TabSocialMediaCard';
import TabQrCode from '../components/TabQrCode'
import TabMenuCard from '../components/TabMenuCard'
import TabAboutComp from '@/components/TabComp/TabAboutComp'
import TabResumeComp from '@/components/TabComp/TabResumeComp'
import TabPortfolioComp from '@/components/TabComp/TabPortfolioComp'
import TabBlogComp from '@/components/TabComp/TabBlogComp'
import TabContactComp from '@/components/TabComp/TabContactComp'
import LaptopContactComp from '@/components/LaptopComp/LaptopContactComp'


export default function Home() {
  const [tabContCard, setTabContCard] = useState(false);
  const [tabContent, setTabContent] = useState("about");

  const handleToggle = () => {
    setTabContCard(!tabContCard)
  }

  const handleClick = (variable) => {
    setTabContent(variable);
  }

  let NormalContCard1 = "w-auto h-auto p-[1px] rounded-tr-[15px] rounded-bl-[15px] bg-gradient-to-br from-[#383838] from-[50%] to-[#23252C] to-[50%] shadow-[0px_10px_15px_2px_#1f2024]";
  let NormalContCard2 = "w-[130px] h-[38px] rounded-tr-[15px] rounded-bl-[15px] bg-[#23252C] flex justify-center items-center"

  let ActiveContCard1 = "w-auto h-auto p-[1px] rounded-tr-[15px] rounded-bl-[15px] bg-gradient-to-br from-[#7e662a] from-[50%] to-[#23252C] to-[50%] shadow-[0px_10px_15px_2px_#1f2024]";
  let ActiveContCard2 = "w-[130px] h-[38px] rounded-tr-[15px] rounded-bl-[15px] bg-[#23252C] flex justify-center items-center bg-gradient-to-r from-[#6b5723] from-5% to-transparent to-[55%]";
  
  // hover:bg-gradient-to-r from-[#6b5723] from-5% to-transparent to-[55%]
  // hover:from-[#7e662a]
  return (
    <>
      <div className='w-[100vw] h-[100vh] bg-[#111111] sm:hidden flex justify-center items-center'>
        <MobCard/>
        {/* <p className='text-white'>Mobile</p> */}
      </div>
      <div className='hidden sm:flex sm:flex-col sm:justify-start sm:items-center sm:w-[100vw] sm:h-auto sm:bg-[#111111] lg:hidden pb-[20px]'>
        <div className='w-5/6 md:w-[700px] auto bg-[#23252C] mt-[50px] pl-[30px] pb-[30px] rounded-[15px] border-[1px] border-[#383838]'>
          <div className='w-full h-[40px] flex justify-between items-start'>
            <div className='w-auto h-full' >
              <TabQrCode/>
            </div>
            <div 
              className= {`${tabContCard ? ActiveContCard1 : NormalContCard1} hover:cursor-pointer`}
              onClick={handleToggle}
            >
              <div className={`${tabContCard ? ActiveContCard2 : NormalContCard2}`}>
                <p className='font-sans text-[13px] font-[500] text-[#d8ae59]'>Show Contacts</p>
              </div>
            </div>
          </div>
          <div className='w-full h-[150px] flex'>
            <div className='basis-1/4 flex justify-start items-center'>
              <div className='w-[100px] h-[100px] bg-[#3D3D3E] rounded-[15px] flex justify-center items-center'>
                <Image
                  src={ProfileImg}
                  className='w-[80px] h-[80px]'
                />
              </div>
            </div>
            <div className='basis-3/4 flex flex-col justify-center items-start'>
              <p className=' font-sans text-[25px] font-semibold text-[white]'>Muhammad Furqan Nasir</p>
              <div className='mt-[10px] w-full h-auto flex justify-start items-center'>
                <div className=' w-max h-[20px] bg-[#3D3D3E] rounded-[5px] px-[15px] py-[12px] flex justify-center items-center'>
                  <p className=' font-sans text-[12px] font-normal text-[white]'>Web Developer</p>
                </div>
                <div className=' w-max h-[20px] bg-[#3D3D3E] ml-[15px] rounded-[5px] px-[15px] py-[12px] flex justify-center items-center'>
                  <p className=' font-sans text-[12px] font-normal text-[white]'>MERN Stack</p>
                </div>
                <div className=' w-max h-[20px] bg-[#3D3D3E] ml-[15px] rounded-[5px] px-[15px] py-[12px] flex justify-center items-center'>
                  <p className=' font-sans text-[12px] font-normal text-[white]'>DevOps</p>
                </div>
              </div>
            </div>
          </div>
          {
            tabContCard? 
            <div className='w-full h-auto pr-[30px] delay-1000'>
              <TabContactCard/>
              <TabSocialMediaCard/>
            </div>
            :
            <></>
          }

        </div>
        <div className='w-5/6 md:w-[700px] h-auto bg-[#23252C] mt-[20px] pl-[30px] pr-[30px] pb-[30px] rounded-[15px] border-[1px] border-[#383838]'>
          <div className='w-auto h-auto mt-[20px] flex justify-between items-center'>
            <div className='w-auto h-auto flex flex-col'>
              <p className='font-sans text-[26px] font-[700] text-[white]'>{tabContent === "about"? tabContent.charAt(0).toUpperCase() + tabContent.slice(1) + " Me" : tabContent.charAt(0).toUpperCase() + tabContent.slice(1)}</p>
              <div className='w-[40px] h-[7px] bg-[#d8ae59] rounded-[15px] mt-[10px]'/>
            </div>
            <div className='w-[40px] h-[40px]'>
              <TabMenuCard 
                tabOption={tabContent}
                tabOptionChange={setTabContent}
              />
            </div>
          </div>
          {
            tabContent === "about"? 
            <TabAboutComp/>
            :
            tabContent === "resume"?
            <TabResumeComp/>
            :
            tabContent === "portfolio"?
            <TabPortfolioComp/>
            :
            tabContent === "blog"?
            <TabBlogComp/>
            :
            tabContent === "contact"?
            <TabContactComp/>
            : 
            <></>
          }
          {/* <div className='w-full h-auto border-2 border-white mt-[10px]'>
            <div className='w-full h-auto border-2 border-red-400'>
              <p className='text-white '>
                I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. I enjoy turning complex problems into simple, beautiful and intuitive designs.
                My job is to build your website so that it is functional and user-friendly but at the same time attractive. Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. My aim is to bring across your message and identity in the most creative way. I created web design for many famous brand companies.
              </p>
            </div>
          </div> */}
        </div>
        {/* <p className='text-white'>Tablet</p> */}
      </div>

      <div className='hidden sm:hidden lg:w-full lg:h-auto lg:py-[30px] lg:bg-[#111111] lg:flex lg:justify-center lg:items-center'>
        <div className='w-[1100px] h-auto flex justify-between'>
          <div className='basis-[28%] h-max bg-[#23252C] p-[20px] rounded-[20px] border-[1px] border-[#383838]'>
            <LaptopContactComp/>
          </div>
          <div className='basis-[70%] h-auto bg-[#23252C] pb-[30px] rounded-[20px] border-[1px] border-[#383838]'>
            <div className='w-auto h-auto flex justify-between items-start mb-[30px]'>
              <div className='mt-[40px] ml-[40px] w-auto h-auto flex flex-col'>
                <p className='font-sans text-[26px] font-[700] text-[white]'>{tabContent === "about"? tabContent.charAt(0).toUpperCase() + tabContent.slice(1) + " Me" : tabContent.charAt(0).toUpperCase() + tabContent.slice(1)}</p>
                <div className='w-[40px] h-[7px] bg-[#d8ae59] rounded-[15px] mt-[10px]'/>
              </div>
              <div className='w-[400px] h-[50px] flex justify-between items-center px-[45px] bg-[#2e2d2d] border-[1px] rounded-bl-[20px] rounded-tr-[20px] border-r-0 border-t-0 border-l-[#383838] border-b-[#383838]'>
                <p 
                  className={`font-sans text-[18px] font-[600] ${tabContent == "about"? "text-[#d8ae59]":"hover:text-white hover:cursor-pointer text-[#7f7f81]"}`}
                  onClick={() => handleClick('about')}
                >About</p>
                <p 
                  className={`font-sans text-[18px] font-[600] ${tabContent == "resume"? "text-[#d8ae59]":"hover:text-white hover:cursor-pointer text-[#7f7f81]"}`}
                  onClick={() => handleClick('resume')}
                >Resume</p>
                <p 
                  className={`font-sans text-[18px] font-[600] ${tabContent == "portfolio"? "text-[#d8ae59]":"hover:text-white hover:cursor-pointer text-[#7f7f81]"}`}
                  onClick={() => handleClick('portfolio')}
                >Portfolio</p>
              </div>
            </div>
            {
              tabContent === "about"? 
              <div className='w-auto h-auto px-[40px]'>
                <TabAboutComp/>
              </div>
              :
              tabContent === "resume"?
              <div className='w-auto h-auto px-[40px]'>
                <TabResumeComp/>
              </div>
              :
              tabContent === "portfolio"?
              <div className='w-auto h-auto px-[40px]'>
                <TabPortfolioComp/>
              </div>
              :
              tabContent === "blog"?
              <TabBlogComp/>
              :
              tabContent === "contact"?
              <TabContactComp/>
              : 
              <></>
            }
          </div>
        </div>
        {/* <p className='text-white'>Laptop</p> */}
      </div>
    </>
  )
}
// }bg-gradient-to-br from-[#383838] hover:from-[#7e662a] to-[#23252C]
// hover:bg-gradient-to-r from-[#7e662a] from-5% to-transparent to-[60%]