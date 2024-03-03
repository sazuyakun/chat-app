import React from 'react'

const Message = () => {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img 
                    alt='Tailwind CSS chat bubble component'
                    src = 'https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg'
                />
            </div>
        </div>
        <div className={`chat-bubble text-white bg-blue-500`}>Hi, What's up?</div>
        <div className=' chat-footer opacity-50 text-xs flex gap-1 items-center'>12:42</div>
    </div>
  )
}

export default Message