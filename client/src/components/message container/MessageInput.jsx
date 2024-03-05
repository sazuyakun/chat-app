import React, { useState } from 'react'
import {BsSend} from "react-icons/bs"
import useSendMessage from '../../hooks/useSendMessage'

const MessageInput = () => {
  const[message, setMessage] = useState("");
  const{loading, sendMessage}=useSendMessage()
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage("");
  }
  return (
    <form className=' ps-3 relative'
      onSubmit={handleSubmit}
    >
        <input type="text" placeholder="Send your message" className="input input-bordered input-info w-full " 
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type='submit' className='absolute inset-y-0 end-0 flex items-center pe-4'>
            {loading ? <div className='loading loading-spinner'></div>:<BsSend />}
        </button>
    </form>
  )
}

export default MessageInput