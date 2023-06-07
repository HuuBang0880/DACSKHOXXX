import React from 'react'


export default function ImageTitle({source}){
  return (
    <>
      
      <div className='inline-block mx-6'>
        <img src={source} alt=""  className='w-[248px] h-[220px] duration-700 rounded-xl group-hover:scale-110'/>
        
      </div>
    </>
  )
}

