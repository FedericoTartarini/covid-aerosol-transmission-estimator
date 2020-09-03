import React from "react";
import { Link } from "react-router-dom";

function NavigationBar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap p-4 border-b-2">
      <div className="flex items-center flex-shrink-0 w-3/4 md:w-1/2">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            COVID-19 aerosol transmission estimator
          </span>
        </Link>
      </div>

      <div className="block md:hidden">
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
          "w-full block flex-end md:flex md:items-center md:w-auto" +
          (navbarOpen ? "" : " hidden")
        }
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="md:flex-grow">
          <Link to="/">
            <span className="block mt-4 md:inline-block md:mt-0 hover:text-gray-600 ml-4">
              Home
            </span>
          </Link>
          <Link to="/indoor">
            <span className="block mt-4 md:inline-block md:mt-0 over:text-gray-600 ml-4">
              Indoor
            </span>
          </Link>
          <Link to="/outdoor">
            <span className="block mt-4 md:inline-block md:mt-0 over:text-gray-600 ml-4">
              Outdoor
            </span>
          </Link>
          <Link to="/learnMore">
            <span className="block mt-4 md:inline-block md:mt-0 over:text-gray-600 ml-4">
              Learn More
            </span>
          </Link>
          <Link to="/about">
            <span className="block mt-4 md:inline-block md:mt-0 over:text-gray-600 ml-4">
              About
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
