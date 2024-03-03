import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar'
import MessageContainer from '../../components/message container/MessageContainer'

const Home = () => {
  return (
    <div className="flex items-center justify-center min-w-[75vw] md:min-w-[70vw] overflow-hidden mx-auto">
      <div className=" flex overflow-hidden h-[620px] w-full p-6 rounded-lg shadow-md bg-gradient-to-r from-indigo-700 to-indigo-500 text-white">
        <Sidebar />
        <MessageContainer />
      </div>
    </div>
  )
}

export default Home

{/* <div className='flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0'>
			<Sidebar />
			<MessageContainer />
		</div> */}