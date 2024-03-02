import React from "react";

const GenderCheck = () => {
  return (
    <div className="flex gap-11">
      <div className="flex">
        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className="label-text">MALE</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="form-control">
          <label className="label cursor-pointer gap-3">
            <span className="label-text">FEMALE</span>
            <input type="checkbox" defaultChecked className="checkbox" />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheck;
