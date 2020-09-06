import React from "react";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Footer() {
  return (
    <footer className="text-gray-900 body-font absolute w-full">
      <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
        <span className="flex title-font font-medium items-center md:justify-start justify-center">
          <div>
            <p className="text-xs ml-3">v 0.0.1</p>
          </div>
        </span>
        <p className="text-sm sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2020
          <a
            href="https://scholar.google.com/citations?user=FyhhQHkAAAAJ&hl=en"
            className="ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            Author 1, Author 2, Author 3
          </a>
        </p>
        <span className="inline-flex text-gray-700 sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            className="mx-3"
            href="https://www.linkedin.com"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size={"2x"} />
          </a>
          <a className="ml-3" href="https://github.com" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} size={"2x"} />
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer;
