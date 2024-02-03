import React from 'react'
import Image from 'next/image'
import Auxi from '../../../public/Auxi.svg'
import GrabTasks from '../../../public/GrabTasks.svg'
import PluralDynamics from '../../../public/PluralDynamics2.png'

export default function TACWorkedWith() {
    const items = [
        PluralDynamics,
        GrabTasks,
        Auxi
    ];
  return (
    <div className="overflow-x-scroll whitespace-nowrap scrollbar py-[10px]">
        <div className="flex gap-[10px]">
            {items.map(item => (
            <div key={item} className="w-auto h-auto">
                <div className='w-[175px] h-[100px] flex justify-center items-center'>
                    <Image
                        src={item}
                        className='w-[150px] h-[120px]'
                    />
                </div>
            </div>
            ))}
        </div>
  </div>
  )
}
{/* <div className='w-full max-w-max mx-auto h-auto py-4 border-2 border-white'>
<div className='w-full flex flex-row overflow-x-scroll '>
    <div className=''>

    </div>
    <div className='w-[200px] h-[200px] bg-slate-200 border-2 border-red-400 ml-[10px]'>

    </div>
    <div className='w-[200px] h-[200px] bg-slate-200 border-2 border-red-400 ml-[10px]'>

    </div>
</div>

</div> */}