import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Image from 'next/image'
import Link from 'next/link';
import { IoIosLink } from "react-icons/io";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#23252C',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({data}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={handleOpen} className='w-full h-[220px] p-4 flex justify-center items-center'>
        <Image
            src={data.thumbnail}
            className='w-4/6 h-4/6'
        />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-[10px] sm:w-[650px] md:w-[800px]'>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <div className='w-full h-auto flex justify-between'>
              <div className='w-[40%]'>
                <p className='font-sans text-[20px] font-[600] text-[white]'>{data.projectName}</p>
                <p className='font-sans text-[20px] font-[500] text-[#757575]'>{data.projectType}</p>
              </div>
              <div className='w-[100px] h-auto flex justify-center items-center' >
                <Link 
                    href={data.link}
                    passHref={true}
                >
                    <div className='w-[60px] h-[60px] hover:cursor-pointer rounded-full flex justify-center items-center bg-[#3D3D3E]'>
                        <IoIosLink className='text-[28px] text-[#d8ae59]'/>
                    </div>
                </Link>
              </div>
            </div>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className='w-full h-[400px] bg-[#383838] rounded-[10px] scrollbar2 p-4 grid sm:grid-cols-1 md:grid-cols-2 grid-rows-auto gap-5 overflow-auto'>
            {data.images?.map((image, index) => (
                <div key={index}>
                    <Image
                        src={image.link}
                    />
                </div>
            ))}
            </div>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}