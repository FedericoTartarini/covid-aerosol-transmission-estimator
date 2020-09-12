import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function OutputField({ label, value, id }) {
  return (
    <div className="flex items-center w-full my-1 px-3">
      <p className="flex-1 uppercase tracking-wide text-xs font-bold">
        <Link to={`/help/${id}`}>
          {label}
          {"  "}
          <sup>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </sup>
        </Link>
      </p>
      <p className="outputBox flex-none h-10 w-20 rounded text-center py-2 leading-tight">
        {value}
      </p>
    </div>
  );
}

export default OutputField;
