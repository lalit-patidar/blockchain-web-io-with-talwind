import React, {useContext, useEffect, useState} from 'react';
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
  // bgcolor: 'background.paper',
  boxShadow: 24,
  border: "2px solid white",
  p: 4,
  borderRadius: 5,
};

export default function ConnectModal({showPopup, handlePopup, options, title, popupType}) {
  const handleClose = () => handlePopup(null, false);

  console.log("show popup", showPopup)

  return (
    <div>
      <Modal
        open={showPopup}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="feedback-card">
          <h3 className='font-poppins font-bold capitalize text-white text-[20px]'>
            {title}
          </h3>
          <Box sx={{marginTop: 5}}>
             {options?.map((option, index) => {
                return <ConnectBtn key={option.id + index} {...option} popupType={popupType} />
             })}
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
