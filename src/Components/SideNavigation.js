import React from "react";
import { Link } from "react-router-dom";

function SideNavigation() {
  return (
    <div className="flex-initial w-1/4 bg-gray-200">
      <div className="p-4 font-semibold">
        <ul>
          <Link to="/stadium">
            <li className="my-2">Stadium</li>{" "}
          </Link>
          <li className="my-2">Class</li>
          <li className="my-2">Supermarket</li>
          <Link to="/about">
            <li className="my-5">About</li>{" "}
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default SideNavigation;
