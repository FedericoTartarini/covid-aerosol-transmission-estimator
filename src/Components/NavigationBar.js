import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="flex items-center px-20 justify-between flex-wrap p-4 border-b-2">
      <Link to="/">
        <div className="flex items-center flex-shrink-0">
          <span className="font-semibold text-xl tracking-tight">
            COVID-19 aerosol transmission estimator
          </span>
        </div>
      </Link>
      <div className="block xl:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded hover:text-gray-700 hover:border-white"
          type="button"
          onClick={() => setNavbarOpen(!navbarOpen)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={
          "w-full block flex-end xl:flex xl:items-center xl:w-auto" +
          (navbarOpen ? "" : " hidden")
        }
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="text-sm xl:flex-grow">
          <Link to="/">
            <span className="block mt-4 xl:inline-block xl:mt-0 hover:text-gray-600 ml-4">
              Home
            </span>
          </Link>
          <Link to="/about">
            <span className="block mt-4 xl:inline-block xl:mt-0 over:text-gray-600 ml-4">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
