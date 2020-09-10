import React from "react";

function OutputField({ label, value }) {
  return (
    <div className="flex items-center w-full my-1 px-3">
      <p className="flex-1 uppercase tracking-wide text-gray-700 text-xs font-bold">
        {label}
      </p>
      <p className="flex-none w-20 bg-gray-200 text-gray-700 border border-gray-200 rounded py-2 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
        {value}
      </p>
    </div>
  );
}

export default OutputField;
