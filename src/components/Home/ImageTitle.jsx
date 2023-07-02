import React from 'react'


export default function ImageTitle({source}){
  return (
    <>
      
      <div className='inline-block m-8'>
        <img src={source} alt=""  className='w-[248px] h-[220px] duration-700 rounded-xl group-hover:scale-110'/>
        
      </div>
    </>
  )
}
export function HomeButtons ({title})
{
  return (<button class="mt-6 h-12  w-32 rounded-full bg-primary text-white ring-4 ring-blue-400 drop-shadow-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-400 duration-300">
  <a href="/">{title}</a>
</button>)
}

