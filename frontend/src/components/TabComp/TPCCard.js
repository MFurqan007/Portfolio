import React from 'react'
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
import BasicModal from './ImageModal'


export default function TPCCard({color, MData}) {

  return (
    <div className=' w-[3/4] h-auto rounded-t-[10px]'>
        <div className='w-full h-[220px] bg-[#383838] rounded-[10px]'>
          <BasicModal data={MData? MData:''}/>
        </div>
        <div className='w-full h-auto mt-[10px] pl-3'>
            <p className='font-sans text-[16px] font-[400] text-[#ffffff]'>{MData?.projectName}</p>
            <p className='font-sans text-[16px] font-[200] text-[#b6b6b6]'>{MData?.projectType}</p>
            <div className={`w-[20px] h-[10px] rounded-[10px] bg-[${color}]`}/>
        </div>
    </div>  
  )
}
