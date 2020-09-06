import React from "react";
import { Link } from "react-router-dom";

function HomeView() {
  return (
    <section className="text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-8 lg:py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-lg"
          alt="hero"
          src={require("../Static/Images/mask.jpg")}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            COVID-19 aerosol transmission estimator
          </h1>
          <p className="leading-relaxed">
            This tool tries to estimate the propagation of COVID-19 by aerosol
            transmission only.
          </p>
          <div className="flex my-8 justify-center">
            <Link to="/indoor">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Indoor Space
              </button>
            </Link>
            <Link to="/outdoor">
              <button className="ml-4 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Outdoor Space
              </button>
            </Link>
            <Link to="/learnMore">
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">
                Learn More
              </button>
            </Link>
          </div>
          <p className="mb-8 leading-relaxed">
            The model is based on a standard model of aerosol disease
            transmission, the Wells-Riley model. It is calibrated to COVID-19
            per recent literature on quanta emission rate.
          </p>
          <p className="mb-8 leading-relaxed">
            This is NOT an epidemiological model, rather can take input from
            such models for the average rate of infection for a given location
            and time period. Or it could possibly be used as a sub-component of
            an epi-model, to estimate aerosol transmission as a function of
            various parameters.
          </p>
          <p className="mb-8 leading-relaxed">
            This model does NOT include droplet or contact / fomite
            transmission, and assumes that 6 ft / 2 m social distancing is
            respected. Otherwise higher transmission will result.
          </p>
          <p className="mb-8 leading-relaxed">
            This model does NOT include transmission to the people present, when
            they are in locations other than the one analyzed here.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeView;
