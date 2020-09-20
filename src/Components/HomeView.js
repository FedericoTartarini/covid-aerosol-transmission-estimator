import React from "react";
import { Link } from "react-router-dom";

function HomeView() {
  return (
    <section className="body-font">
      <div className="container mx-auto flex px-5 py-8 lg:py-24 items-center justify-center flex-col">
        <img
          className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-lg shadow-lg"
          alt="hero"
          src={require("../Static/Images/mask.jpg")}
        />
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            COVID-19 aerosol infection risk estimator
          </h1>
          <p className="leading-relaxed">
            This tool has been developed to provide an estimate of the
            propagation of COVID-19 by aerosol transmission. This model does NOT
            include droplet or contact transmission An inherent assumption is
            that personal hygiene measures and safe-distancing measures are
            being followed. If that is not the case, it is safe to assume that
            there will be more infections than predicted by the tool.
          </p>
          <div className="flex my-8 justify-center font-semibold">
            <Link to="/indoor">
              <button className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Indoor Space
              </button>
            </Link>
            <Link to="/outdoor">
              <button className="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">
                Outdoor Space
              </button>
            </Link>
            <Link to="/about">
              <button className="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg">
                About
              </button>
            </Link>
          </div>
          <p className="mb-8 leading-relaxed">
            The current tool is based on{" "}
            <a href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=519189277">
              the estimator
            </a>{" "}
            created by{" "}
            <a href="https://www.colorado.edu/chemistry/jose-luis-jimenez">
              Prof. J L Jimenez
            </a>
            . The model used in the tool is based on the Wells-Riley model. The
            Wells-Riley model was calibrated further by Prof. Jimenez to
            COVID-19, based on results from recent literature regarding
            infectious quanta emitted by individuals.
          </p>
          <p className="mb-8 leading-relaxed">
            This is NOT an epidemiological model. It does take input from
            epidemiological models for the estimated number of infected people
            in a community, during a specific time period. The model also
            focuses on the specific location being analysed and CANNOT be used
            to estimate risks of the people before they came to the place or
            after they leave.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HomeView;
