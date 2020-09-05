import React from "react";

function InputField({ handleChange, value, label }) {
  let width = "w-1/3";
  return (
    <div className={width + " px-3"}>
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={label.split(" ")[0]}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={label.split(" ")[0]}
        type="number"
        name={label.split(" ")[0]}
        placeholder={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputField;
