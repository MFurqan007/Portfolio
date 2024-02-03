import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { BsQrCodeScan } from "react-icons/bs";
import QrCode from './QrCode';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  height: 300,
  bgcolor: '#1A1B21',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>
        <BsQrCodeScan className='w-[20px] h-[20px] text-[#d8ae59] animate-pulse'/>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className='rounded-[10px]'>
          <Typography id="modal-modal-title" variant="h6" component="h2" className='text-center text-[#dbdfe1]'>
            QR Code
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }} className='flex justify-center items-center'>
            <QrCode/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}