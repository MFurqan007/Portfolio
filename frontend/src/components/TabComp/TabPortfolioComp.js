import React from 'react'
import TPCCard from './TPCCard'
// Grabtasks
import GTL1 from '../../../public/Grabtasks/GTLTop.png'
import GTL2 from '../../../public/Grabtasks/GTLMiddle.png'
import GTL3 from '../../../public/Grabtasks/GTLFooter.png'
import GTL4 from '../../../public/Grabtasks/GTTTop.png'
import GTL5 from '../../../public/Grabtasks/GTTMiddle.png'
import GTL6 from '../../../public/Grabtasks/GTTFooter.png'
import GTL7 from '../../../public/Grabtasks/GTMTop.png'
import GTL8 from '../../../public/Grabtasks/GTMMiddle.png'
import GTL9 from '../../../public/Grabtasks/GTMFooter.png'
import GTL from '../../../public/GTLogo2.svg'

// Auxi
import A1 from '../../../public/AuxiLogo2.svg'
import A2 from '../../../public/Auxi/A1.png'
import A3 from '../../../public/Auxi/A2.png'
import A4 from '../../../public/Auxi/A3.png'
import A5 from '../../../public/Auxi/A4.png'

// WebSocket
import WS1 from '../../../public/WS.svg'
import WS2 from '../../../public/WebSocket/WS1.png'
import WS3 from '../../../public/WebSocket/WS2.png'
import WS4 from '../../../public/WebSocket/WS3.png'


import TD1 from '../../../public/TD.svg'
import TD2 from '../../../public/Todo/TD1.png'
import TD3 from '../../../public/Todo/TD2.png'
import TD4 from '../../../public/Todo/TD3.png'
import TD5 from '../../../public/Todo/TD4.png'
import TD6 from '../../../public/Todo/TD5.png'
import TD7 from '../../../public/Todo/TD6.png'
import TD8 from '../../../public/Todo/TD7.png'
import TD9 from '../../../public/Todo/TD8.png'


import D1 from '../../../public/DevOps.svg'

import T1 from '../../../public/T.svg'
import T2 from '../../../public/Terminal/T1.png'
import T3 from '../../../public/Terminal/T2.png'
import T4 from '../../../public/Terminal/T3.png'
import T5 from '../../../public/Terminal/T4.png'

import DDR from '../../../public/DDR.svg'
import DDR1 from '../../../public/ddr/ddr1.png'
import DDR2 from '../../../public/ddr/ddR2.png'

import CK from '../../../public/CK.svg'
import CK1 from '../../../public/CafeKarak/CK1.png'
import CK2 from '../../../public/CafeKarak/CK2.png'
import CK3 from '../../../public/CafeKarak/CK3.png'
import CK4 from '../../../public/CafeKarak/CK4.png'
import CK5 from '../../../public/CafeKarak/CK5.png'

import Image from 'next/image'



export default function TabPortfolioComp() {
  let GrabTasksData = {
    projectName: "GrabTasks",
    projectType: "Product",
    link: "https://youtu.be/Zl-a07anm_8",
    thumbnail: GTL,
    images: [
      { link: GTL1},
      { link: GTL2},
      { link: GTL3},
      { link: GTL4},
      { link: GTL5},
      { link: GTL6},
      { link: GTL7},
      { link: GTL8},
      { link: GTL9},
      // Add more images as needed
    ],
  };

  let AuxiData = {
    projectName: "Auxi",
    projectType: "Product",
    link: "",
    thumbnail: A1,
    images: [
      { link: A2},
      { link: A3},
      { link: A4},
      { link: A5},
      // Add more images as needed
    ],
  };

  let SocketChatData = {
    projectName: "Web Socket Chat Room",
    projectType: "React, Web Socket.io",
    link: "https://github.com/MFurqan007/SocketChat",
    thumbnail: WS1,
    images: [
      { link: WS2},
      { link: WS3},
      { link: WS4},
      // Add more images as needed
    ],
  };

  let TodoData = {
    projectName: "Todo Management",
    projectType: "MERN Stack, cookies, jwt, authmiddleware",
    link: "https://github.com/MFurqan007/ToDo",
    thumbnail: TD1,
    images: [
      { link: TD2},
      { link: TD3},
      { link: TD4},
      { link: TD5},
      { link: TD6},
      { link: TD7},
      { link: TD8},
      { link: TD9},
      // Add more images as needed
    ],
  };

  let DevOpsData = {
    projectName: "Doctor Appointment Micoservice",
    projectType: "DevOps, Dockerfile, K8, CI/CD, Github Actions",
    link: "https://github.com/MFurqan007/DevOps_Project",
    thumbnail: D1,
    images: [
      // Add more images as needed
    ],
  };

  let TerminalData = {
    projectName: "Terminal",
    projectType: "NextJs, Flask, MongoDB, Recharts JS, Binance API ",
    link: "https://github.com/MFurqan007/Terminal-CRUD",
    thumbnail: T1,
    images: [
      { link: T2},
      { link: T3},
      { link: T4},
      { link: T5},
      // Add more images as needed
    ],
  };

  let DDRData = {
    projectName: "Document Dispatch Register",
    projectType: "Frontend, React JS",
    link: "https://github.com/MFurqan007/DocumentDispatchRegister",
    thumbnail: DDR,
    images: [
      { link: DDR1},
      { link: DDR2},
      // Add more images as needed
    ],
  };

  let CKData = {
    projectName: "Cafe Karak",
    projectType: "Frontend, React JS",
    link: "https://github.com/MFurqan007/CafeKarak",
    thumbnail: CK,
    images: [
      { link: CK1},
      { link: CK2},
      { link: CK3},
      { link: CK4},
      { link: CK5},
      // Add more images as needed
    ],
  };

  return (
    <div className='w-full h-auto p-4'>
      <div className='w-full h-auto grid grid-rows-auto grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4'>
        <TPCCard 
          color="#d8ae59"
          MData={GrabTasksData}
        />
        <TPCCard 
          color="#d8ae59"
          MData={AuxiData}
        />
        <TPCCard 
          color="#d8ae59"
          MData={SocketChatData}
        />
        <TPCCard 
          color="#d8ae59"
          MData={TodoData}
        />
        <TPCCard 
          color="#ac71b9"
          MData={DevOpsData}
        />
        <TPCCard 
          color="#d8ae59"
          MData={TerminalData}
        />
        <TPCCard 
          color="#d8ae59"
          MData={DDRData}
        />
        <TPCCard 
          color="#d8ae59"
          MData={CKData}
        />
        
      </div>
    </div>
  )
}
