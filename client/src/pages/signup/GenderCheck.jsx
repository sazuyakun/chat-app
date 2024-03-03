import React from "react";

const GenderCheck = ({onCheckboxChange, selectedGender}) => {
  return (
    <div className="flex gap-11">
      <div className="flex">
        <div className="form-control">
          <label className={`label cursor-pointer gap-3
          ${selectedGender === 'male' ? 'selected' : ''}`}>
            <span className="label-text">MALE</span>
            <input type="checkbox" className="checkbox" 
              checked={selectedGender === 'male'}
              onChange={() => onCheckboxChange("male")}
            />
          </label>
        </div>
      </div>
      <div className="flex">
        <div className="form-control">
          <label className={`label cursor-pointer gap-3
          ${selectedGender === 'female' ? 'selected' : ''}`}>
            <span className="label-text">FEMALE</span>
            <input type="checkbox" className="checkbox" 
              checked={selectedGender === 'female'}
              onChange={() => onCheckboxChange("female")}
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default GenderCheck;
