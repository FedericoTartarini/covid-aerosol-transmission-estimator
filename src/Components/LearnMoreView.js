import React from "react";
import { Helmet } from "react-helmet";

function LearnMoreView() {
  return (
    <section className="body-font">
      <Helmet>
        <title>Learn More</title>
        <meta
          name="description"
          content="This page is about the author, Federico Tartarini."
        />
      </Helmet>
      <div className="container mx-auto max-w-2xl flex flex-col py-8 justify-center items-center">
        <div className="w-full flex flex-col mb-16 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            COVID-19 aerosol transmission estimator
          </h1>
          <p className="mb-8 leading-relaxed">
            The model is kept simple so that it can be understood and changed
            easily. The goal is to get the order-of-magnitude of the effects
            quickly, and to explore the trends. Several parameters are
            uncertain, and have been estimated based on current knowledge.
            Alternative estimates can be entered to explore their effect in the
            results.
          </p>
          <p className="mb-8 leading-relaxed">
            More complex and realistic models can be built, however the
            parametric uncertainty may still dominate the total uncertainty.
            Parameters based on new research can be incorporated as they become
            available. PLease contact us to include your model in this tool.
          </p>
          <p className="mb-8 leading-relaxed">
            Disclaimer: this model is our best scientific estimate, based on the
            information currently available. It is provided in the hope that it
            will be useful to others, based on us receiving a large number of
            requests for this type of information. We trust most the relative
            risk estimates (when changing parameters such as wearing a mask or
            not) of two runs of the model. We also trust the order-of-magnitude
            of the risk estimates, if the inputs are correct. The exact
            numerical results for a given case have more uncertainty. For
            example if you obtain a 1% chance of infection, in reality it could
            be 0.2% or 5%. But it won't be 0.001% or 100%. Results also have to
            be interpreted statistically, i.e. the result is the average number
            of transmission cases, across many realizations of a given event.
            I.e. if 1000 similar events were conducted, this would be the
            average probability. Any one event may have much fewer or many more
            transmission cases.
          </p>
          <h1 className="title-font sm:text-2xl text-2xl mb-4 font-medium">
            Scientific Approach
          </h1>
          <p className="mb-8 leading-relaxed">
            The model combines two sub-models: (1) a standard atmospheric "box
            model", which assumes that the emissions are completely mixed across
            a control volume quickly (such as an indoor room or other space).
            See for example Chapter 3 of the Jacob Atmos. Chem. textbook, and
            Chapter 21 of the Cooper and Alley Air Pollution Control Engineering
            Textbook for indoor applications. This is an approximation that
            allows easy calculation, is approximately correct as long as
            near-field effects are avoided by social distancing, and is commonly
            used in air quality modeling. (2) a standard aerosol infection model
            (Wells-Riley model), as formulated in Miller et al. 2020, and
            references therein".
          </p>
        </div>
      </div>
    </section>
  );
}

export default LearnMoreView;
