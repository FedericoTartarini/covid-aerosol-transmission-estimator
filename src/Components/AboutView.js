import React from "react";
import { Helmet } from "react-helmet";

function AboutView() {
  return (
    <section className=" body-font">
      <Helmet>
        <title>About Page</title>
        <meta
          name="description"
          content="This page is about the author, Federico Tartarini."
        />
      </Helmet>
      <div className="container mx-auto flex flex-col px-5 py-8 justify-center items-center">
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            COVID-19 aerosol transmission estimator
          </h1>
          <p className="mb-8 leading-relaxed">
            This is the about page of the tool.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
