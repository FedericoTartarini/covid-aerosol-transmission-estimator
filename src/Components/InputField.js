import React from "react";

function InputField({ handleChange, data, id, label }) {
  return (
    <div className="w-1/3 px-3 my-1">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
        id={id}
        type="number"
        name={id}
        placeholder={data[id]}
        onChange={handleChange}
      />
    </div>
  );
}

export default InputField;
