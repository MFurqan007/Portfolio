import React from 'react'
import QRCode from 'react-qr-code';

export default function QrCode() {
  const url = "https://portfolio-mfurqan007.vercel.app/";

  return (
    <div className='w-[180px] h-[180px] bg-[#dbdfe1] flex justify-center items-center rounded-[25px]'>
        <QRCode value={url} size={130} bgColor='#dbdfe1'/>
    </div>
  )
}
