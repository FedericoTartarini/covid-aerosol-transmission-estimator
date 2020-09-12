import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdjust } from "@fortawesome/free-solid-svg-icons";
import { darkTheme, lightTheme } from "../Functions/theme";

function NavigationBar({ themeToggler, theme }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <nav className="container mx-auto flex items-center justify-between flex-wrap p-4 border-b-2">
      <div className="flex items-center flex-shrink-0 w-3/4 lg:w-1/2">
        <Link to="/">
          <span className="font-semibold text-xl tracking-tight">
            COVID-19 aerosol transmission estimator
          </span>
        </Link>
      </div>

      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 rounded"
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
          "w-full block flex-end lg:flex lg:items-center lg:w-auto" +
          (navbarOpen ? "" : " hidden")
        }
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        <div className="lg:flex-grow">
          <Link to="/indoor">
            <span className="nav-item block mt-4 lg:inline-block lg:mt-0 ml-4">
              Indoor
            </span>
          </Link>
          <Link to="/outdoor">
            <span className="nav-item block mt-4 lg:inline-block lg:mt-0 ml-4">
              Outdoor
            </span>
          </Link>
          <Link to="/learnMore">
            <span className="nav-item block mt-4 lg:inline-block lg:mt-0 ml-4">
              Learn More
            </span>
          </Link>
          <Link to="/about">
            <span className="nav-item block mt-4 lg:inline-block lg:mt-0 ml-4">
              About
            </span>
          </Link>
          <div
            className="block mt-4 lg:inline-block lg:mt-0 ml-4"
            onClick={themeToggler}
          >
            <FontAwesomeIcon
              icon={faAdjust}
              color={theme === "light" ? lightTheme.text : darkTheme.text}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
