import React from 'react'

export default function p4(props) {
  return (
    <div className='mr-[2px] rounded-[10px] w-1/6 h-[10px] bg-[#5e5e5e]'>
        <div className={`w-[40%] h-full rounded-[10px] bg-[${props.color}]`}/>
    </div>
  )
}
