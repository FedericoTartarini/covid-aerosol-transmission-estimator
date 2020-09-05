import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

function DropDown({ selected, listItems, setValue }) {
  const [dropDownOpen, setDropDownOpen] = useState(false);

  function DropDownItem({ item }) {
    return (
      <span
        className="block py-1 px-4 hover:bg-gray-200 capitalize"
        onClick={() => {
          setDropDownOpen(!dropDownOpen);
          setValue(item);
          console.log("Item selected", item);
        }}
      >
        {item}
      </span>
    );
  }

  return (
    <div className="relative">
      <button
        className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-8 rounded inline-flex items-center"
        onClick={() => setDropDownOpen(!dropDownOpen)}
      >
        <span className="capitalize mx-4">{selected}</span>
        <FontAwesomeIcon icon={faChevronDown} />
      </button>
      <div
        className={
          "bg-gray-100 absolute right-0 rounded mt-1 py-1 text-center shadow-md z-10" +
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
