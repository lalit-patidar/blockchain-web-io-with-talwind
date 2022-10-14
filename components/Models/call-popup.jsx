import React from 'react';
import ConnectBtn from './connect-btn/ConnectBtn';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 300,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 5,
};

export default function ConnectModal({callPopup, handleCallPopup, options}) {
  const handleClose = () => handleCallPopup(false);

  return (
    <div>
      <Modal
        open={callPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" className='font-poppins font-bold'>
               Call Us
          </Typography>
          <Box sx={{marginTop: 5}}>
             {options.map((option, index) => {
                return <ConnectBtn key={option.id + index} {...option} />
             })}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
