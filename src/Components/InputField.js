import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function InputField({ handleChange, data, id, label }) {
  return (
    <div className="w-1/3 px-3 my-1">
      <Link to={`/help/${id}`}>
        <label
          className="block uppercase tracking-wide text-xs font-bold mb-2"
          htmlFor={id}
        >
          {label}{" "}
          <sup>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </sup>
        </label>
      </Link>
      <input
        className="appearance-none block w-full rounded focus:outline-none py-3 px-4 leading-tight"
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
