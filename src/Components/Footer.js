import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className=" body-font absolute w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center">
          <div>
            <p className="text-xs ml-3">v 0.1.0</p>
          </div>
        </span>
        <div className="flex flex-col">
          <p className="flex-1 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2020
            <a
              href="https://www.linkedin.com/in/federico-tartarini"
              className="ml-1 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Federico Tartarini,
            </a>
            <a
              href="https://www.linkedin.com/in/asitk/"
              className="ml-1 underline"
              rel="noopener noreferrer"
              target="_blank"
            >
              Asit Kumar Mishra.
            </a>
          </p>
          <span className="flex-1 text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            The current tool is based on
            <a
              className="ml-1 underline"
              href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277"
            >
              the estimator
            </a>
            created by
            <a
              className="ml-1 underline"
              href="https://www.colorado.edu/chemistry/jose-luis-jimenez"
            >
              Prof. J L Jimenez
            </a>
          </span>
        </div>
        <span className="inline-flex  sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="mx-3"
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
          </a>
          <a
            className="ml-3"
            href="https://github.com/FedericoTartarini/covid-aerosol-transmission-estimator"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} size={"2x"} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
