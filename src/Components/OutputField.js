import React from "react";

function OutputField({ label, value }) {
  return (
    <div className="flex items-center w-full my-1 px-3">
      <p className="flex-1 uppercase tracking-wide text-xs font-bold">
        {label}
      </p>
      <p className="outputBox flex-none h-10 w-20 rounded text-center py-2 leading-tight">
        {value}
      </p>
    </div>
  );
}

export default OutputField;
