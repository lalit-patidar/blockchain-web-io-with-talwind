import React from 'react';
import Image from "next/image";
import IconButton from '@mui/material/IconButton';

export default function IconButtonColors({src, img, title, popupType}) {
  return (
      <IconButton aria-label="fingerprint" color="secondary" >
      <a href={src} target={popupType === "connect" ? "_blank" : ""} rel="noreferrer" className={`${popupType === "call" ? "mt-8 mx-4": "mt-2 mr-4"}`}>
             <Image src={img} alt={title} width={50} height={50}/>
        </a>
      </IconButton>
  );
}