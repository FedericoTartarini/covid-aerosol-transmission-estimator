import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function InputField({ handleChange, data, id, label }) {
  return (
    <div className="w-1/3 px-3 my-1">
      <Link to={`/help/${id}`}>
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor={id}
        >
          {label}{" "}
          <sup>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </sup>
        </label>
      </Link>
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
