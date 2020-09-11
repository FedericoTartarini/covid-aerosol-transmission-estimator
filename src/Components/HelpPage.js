import React from "react";
import { Helmet } from "react-helmet";

function HelpPage({ match }) {
  function HelpBody({ id }) {
    if (id === "length" || id === "width" || id === "height") {
      return (
        <p className="mb-8 leading-relaxed">
          Please enter the {id} of the space in meters. You can convert the {id}{" "}
          from ft to meter by multiplying the {id} in ft by 0.305.
        </p>
      );
    } else if (id === "durationEvent") {
      return (
        <p className="mb-8 leading-relaxed">
          Please enter the duration of the event in minutes.
        </p>
      );
    } else if (id === "repetitionEvent") {
      return (
        <p className="mb-8 leading-relaxed">
          Please enter the number of times the same person is attending the
          event.
        </p>
      );
    } else if (id === "ventilationOutAir") {
      return (
        <div>
          <p className="mb-8 leading-relaxed">
            This is value is equivalent to the <em>"air changes per hour"</em>.
            And it only refers to the amount of indoor air that is solely
            replaced with outdoor air, and not to the amount of indoor air that
            it is recirculated. Recirculation of air with filtering is under
            "additional control measures".
          </p>
          <p className="mb-8 leading-relaxed">
            Note that e.g. a ventilation rate of 1<sup>h-1</sup> does not mean
            that 100% of the air is replaced in 1 h. That's the "plug flow"
            assumption, the air inside is displaced by the new air. But due to
            mixing it doesn't work that way. A better approximation is that the
            fraction of the initial air that remains in the space vs time is exp
            (-ACH * time) * 100%. So after 1 h, what remains is exp(-1 * 1) =*
            100% = 36%, after 2 h, what remains is exp(-1 * 2) = 14% and so on.
          </p>
          <p className="mb-8 leading-relaxed">
            An MIT calculator for natural ventilation (through cracks, windows
            etc.) can be downloaded{" "}
            <a href="http://coolvent.mit.edu/">using this link</a>
          </p>
        </div>
      );
    } else {
      return (
        <p className="mb-8 leading-relaxed">
          No help text is available for this input.
        </p>
      );
    }
  }

  return (
    <section className=" body-font">
      <Helmet>
        <title>Help Page</title>
        <meta name="description" content="This is the help page" />
      </Helmet>
      <div className="container mx-auto flex flex-col py-8 mb16 justify-center items-center">
        <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
          {match.params.id}
        </h1>
        <div className="mt-4 max-w-md">
          <HelpBody id={match.params.id} />
        </div>
      </div>
    </section>
  );
}

export default HelpPage;
