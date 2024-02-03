import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import QrCode from './QrCode';
import { RxHamburgerMenu } from "react-icons/rx";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: '#1A1B21',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({tabOption, tabOptionChange}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  // const handleClick = (variable) => {
  //   console.log(`Clicked with variable: ${variable}`);
  //   // Perform additional actions with the variable
  // };
  const handleClick = (variable) => {
    tabOptionChange(variable);
  }

  return (
    <div>
      <button onClick={handleOpen} className='w-[40px] h-[40px] p-[10px] rounded-[25px] bg-[#3D3D3E] flex justify-center items-center'>
        <RxHamburgerMenu className='text-[#d8ae59] text-[17px]'/>
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-[10px]'>
            <div className='w-full h-full'>
                <div 
                  className={`w-[200px] h-[40px] flex justify-center items-center ${tabOption == "about"? "border-[1px] border-b-[#3D3D3E]" : ""} group hover:bg-[#3D3D3E] border-l-0 border-r-0 border-t-0`}
                  onClick={() => handleClick('about')}
                >
                    <p className={`font-sans text-[20px] font-[400] ${tabOption == "about"? "text-[#d8ae59]":"text-[#7f7f81]"}`}>About</p>
                </div>
                <div 
                  className={`w-[200px] h-[40px] flex justify-center items-center ${tabOption == "resume"? "border-[1px] border-b-[#3D3D3E]" : ""} group hover:bg-[#3D3D3E] border-l-0 border-r-0 border-t-0`}
                  onClick={() => handleClick('resume')}
                >
                    <p className={`font-sans text-[20px] font-[400] ${tabOption == "resume"? "text-[#d8ae59]":"text-[#7f7f81]"}`}>Resume</p>
                </div>
                <div 
                  className={`w-[200px] h-[40px] flex justify-center items-center ${tabOption == "portfolio"? "border-[1px] border-b-[#3D3D3E]" : ""} group hover:bg-[#3D3D3E] border-l-0 border-r-0 border-t-0`}
                  onClick={() => handleClick('portfolio')}
                >
                    <p className={`font-sans text-[20px] font-[400] ${tabOption == "portfolio"? "text-[#d8ae59]":"text-[#7f7f81]"}`}>Portfolio</p>
                </div>

                {/* Blog Feature */}
                {/* <div 
                  className={`w-[200px] h-[40px] flex justify-center items-center ${tabOption == "blog"? "border-[1px] border-b-[#3D3D3E]" : ""} group hover:bg-[#3D3D3E] border-l-0 border-r-0 border-t-0`}
                  onClick={() => handleClick('blog')}
                >
                    <p className={`font-sans text-[20px] font-[400] ${tabOption == "blog"? "text-[#d8ae59]":"text-[#7f7f81]"}`}>Blog</p>
                </div> */}
                
                {/* Contact Form Feature */}
                {/* <div 
                  className={`w-[200px] h-[40px] flex justify-center items-center ${tabOption == "contact"? "border-[1px] border-b-[#3D3D3E]" : ""} group hover:bg-[#3D3D3E] border-l-0 border-r-0 border-t-0`}
                  onClick={() => handleClick('contact')}
                >
                    <p className={`font-sans text-[20px] font-[400] ${tabOption == "contact"? "text-[#d8ae59]":"text-[#7f7f81]"}`}>Contact</p>
                </div> */}
            </div>
        </Box>
      </Modal>
    </div>
  );
}
