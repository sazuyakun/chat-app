import React from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import NoChatSelected from "./NoChatSelected";

const MessageContainer = () => {
  const noChatSelected = false;
  return (
    <div className="lg:min-w-[650px] md:min-w-[450px] min-w-[300px] flex flex-col">
      {noChatSelected ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-indigo-900 px-4 py-2 mb-2 rounded-tr-lg">
            <span className="label-text">To:</span>
            <span className="text-gray-300 font-bold"> HritikRoshan</span>
          </div>

          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;
