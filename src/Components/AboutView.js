import React from "react";
import { Helmet } from "react-helmet";

function AboutView() {
  return (
    <section className="text-gray-700 body-font">
      <Helmet>
        <title>About Page</title>
        <meta
          name="description"
          content="This page is about the author, Federico Tartarini."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            COVID-19 aerosol transmission estimator
          </h1>
          <p className="mb-8 leading-relaxed">
            The propagation of COVID-19 by aerosol transmission ONLY
          </p>
          <p className="mb-8 leading-relaxed">
            The model is based on a standard model of aerosol disease
            transmission, the Wells-Riley model. It is calibrated to COVID-19
            per recent literature on quanta emission rate
          </p>
          <p className="mb-8 leading-relaxed">
            This is NOT an epidemiological model, rather can take input from
            such models for the average rate of infection for a given location
            and time period. Or it could possibly be used as a sub-component of
            an epi-model, to estimate aerosol transmission as a function of
            various parameters
          </p>
          <p className="mb-8 leading-relaxed">
            This model does NOT include droplet or contact / fomite
            transmission, and assumes that 6 ft / 2 m social distancing is
            respected. Otherwise higher transmission will result
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
