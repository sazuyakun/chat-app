import React from 'react'
import {TiMessages} from "react-icons/ti"

const NoChatSelected = () => {
  return (
    <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col gap-2'>
            <p>Welcome Hritik Roshan</p>
            <p>Select a chat to start messaging</p>
            <TiMessages className='text-3xl md:text-6xl'/>
        </div>
    </div>
  )
}

export default NoChatSelected