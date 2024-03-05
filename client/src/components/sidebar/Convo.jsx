import React from "react";
import useConversation from "../../zustand/useConversation.js";

const Convo = ({conversation, lastIndex}) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === conversation._id;
  return (
    <div>
      <div className={`flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer
       ${isSelected && `bg-indigo-500`}
      `}
      onClick={() => setSelectedConversation(conversation)}
      >
        <div className="avatar online">
          <div className=" w-10 rounded-full">
            <img src={conversation.profilePic} alt="user avatar"/>
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-bold text-white">{conversation.fullName}</p>
        </div>˘
      </div>
      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </div>
  );
};

export default Convo;
