import React from "react";

const Convo = () => {
  return (
    <div>
      <div className="flex gap-2 items-center hover:bg-indigo-500 rounded p-2 py-1 cursor-pointer">
        <div className="avatar online">
          <div className=" w-12 rounded-full">
            <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <p className="font-bold text-white">HritikRoshan</p>
        </div>
      </div>
      <div className="divider my-0 py-0 h-1" />
    </div>
  );
};

export default Convo;
