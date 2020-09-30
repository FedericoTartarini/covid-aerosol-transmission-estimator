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
        <div className="max-w-lg flex flex-col mb-16 items-center text-justify">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium">
            COVID-19 aerosol infection risk estimator
          </h1>
          <p className="mb-8 leading-relaxed">
            This estimator is designed to be a simple-to-use tool for experts as
            well as technical minded persons for understanding the relative risk
            of contracting COVID-19. As described in the home-page, the focus is
            kept on aerosols transmission while assuming safe-distancing and
            personal hygiene measures are being followed.
          </p>
          <h1 className="title-font text-2xl text-center mb-4 capitalize font-medium">
            Indoors and Outdoors pages.
          </h1>
          <p className="mb-8 leading-relaxed">
            The Indoors page can be used to estimate risks in different indoor
            environments. You will need to provide the size of the room you are
            concerned with. You will also need to get some information about
            your room’s ventilation from the building’s ventilation engineers.
            If you have a CO2 sensor, you can also verify the information about
            the amount of outdoor air supplied to your room using a{" "}
            <a
              className="underline"
              href="https://medium.com/@jjose_19945/how-to-quantify-the-ventilation-rate-of-an-indoor-space-using-a-cheap-co2-monitor-4d8b6d4dab44"
            >
              simple process
            </a>
            .
          </p>
          <p className="mb-8 leading-relaxed">
            The next important parameter is how many times the event you are
            estimating risks for will be repeated and how long does each event
            last. For example, if it is a 50-minute lecture, every weekday, then
            it lasts 50 minutes and repeats five times every week.
          </p>
          <p className="mb-8 leading-relaxed">
            You will need to approximate to the closest kind of activity you
            expect during this event and also to the closest age group. Based on
            these inputs, a baseline risk maybe calculated. Next, you may
            include further, layered safety measures to understand how each step
            you take reduces risks. Such steps could be increasing ventilation,
            wearing masks, getting a better filter for the air conditioning
            system, reducing duration of the event or even moving Outdoors. For
            estimating risks outdoors, you will need to use the Outdoors page.
          </p>
          <p className="mb-8 leading-relaxed">
            For each field on both pages, we have tried to provide simple and
            helpful explanations as to what the input is about.
          </p>
          <p className="mb-8 leading-relaxed">
            You need to keep in mind that the tool is based on best scientific
            estimate, looked at by multiple experts but knowledge in the field
            is still evolving. See the{" "}
            <a
              className="underline"
              href="https://docs.google.com/spreadsheets/d/16K1OQkLD4BjgBdO8ePj6ytf-RpPMlJ6aXFg3PrIQBbQ/edit#gid=1831582877"
            >
              original development
            </a>{" "}
            by Prof. Jimenez for more details. Also, he regularly updates the
            estimator and if you are of a technical inclination, you can always
            check-out the latest improvements made on the Google spreadsheet
            created by him.
          </p>
          <p className="mb-8 leading-relaxed">
            The primary goal of this tool is to provide order-of-magnitude
            estimates related to risks. These estimates may then be used to
            explore trends and evaluate effectiveness of a combination of
            measures that may be used to reduce risk.
          </p>
          <p className="mb-8 leading-relaxed">
            The output is provided as a probability of getting infected for one
            person - attending one event or all the repetitions of the event.
            These are average numbers. While any one repetition maybe have far
            fewer or far more transmissions, it is expected that over numerous
            repetitions - say, 1000 - the average will come close to the
            estimates. For easier comprehension, we follow the example from
            Prof. Jimenez and compare the risks of catching Covid-19 with the
            risk of taking your car out for a drive and meting a fatal accident.
          </p>
          <p className="mb-8 leading-relaxed">
            To keep abreast of the latest developments related to aerosols
            transmission of SARS-CoV-2, we advise you to keep track of this
            excellent{" "}
            <a
              className="underline"
              href="https://docs.google.com/document/d/1fB5pysccOHvxphpTmCG_TGdytavMmc1cUumn8m0pwzo/edit"
            >
              compilation of resources
            </a>{" "}
            prepared by a group of experts, led by Prof. Jimenez.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutView;
