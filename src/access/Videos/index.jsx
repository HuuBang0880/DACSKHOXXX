import React from 'react'
import ReactPlayer from 'react-player';
import { useState } from 'react';



export default function Videos({src}) {
    
  return (
    
        <ReactPlayer url={src} 
        width="440px"
        height="360px"
        justify="center"
        margin-bottom="24px"
        round="40px"
        />            
    
  )
}
