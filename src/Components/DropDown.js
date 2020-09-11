import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function DropDown({ selected, listItems, setValue }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function DropDownItem({ item }) {
    return (
      <span
        className="dropDown block py-1 px-4 capitalize"
        onClick={() => {
          setDropDownOpen(!dropDownOpen);
          setValue(item);
        }}
      >
        {item}
      </span>
    );
  }

  return (
    <div className="relative">
      <button
        className="font-semibold focus:outline-none py-2 px-2 rounded inline-flex items-center"
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <span className="capitalize mx-4">{selected}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div
        className={
          "bg-gray-100 w-56 absolute right-0 rounded mt-1 py-1 text-center shadow-md z-10" +
          (dropDownOpen ? "" : " hidden")
        }
      >
        {listItems.map((item) => (
          <DropDownItem key={item} item={item} />
        ))}
      </div>
    </div>
  );
}

export default DropDown;
