import React from "react";

const Checkbox = ({ label, name }) => {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <input
          id={name}
          name={name}
          type="checkbox"
          className="h-4 w-4 rounded border-gray-300 text-cyan-800 focus:ring-cyan-900"
        />
      </div>
      <div className="ml-2 text-sm">
        <label htmlFor={name} className=" text-gray-700 font-light">
          {label}
        </label>
      </div>
    </div>
  );
};

export default Checkbox;
