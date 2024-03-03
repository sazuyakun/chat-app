import React from 'react'
import {BsSend} from "react-icons/bs"

const MessageInput = () => {
  return (
    <form className=' ps-3 relative'>
        <input type="text" placeholder="Send your message" className="input input-bordered input-info w-full " />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-4'>
            <BsSend />
        </button>
    </form>
  )
}

export default MessageInput