import React from "react";
import { Helmet } from "react-helmet";

function HelpPage({ match }) {
  function HelpText({ id }) {
    if (id === "length" || id === "width" || id === "height") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            {id}
          </h1>
          <div className="mt-4 max-w-md">
            <p className="mb-8 leading-relaxed">
              Please enter the {id} of the space in meters. You can convert the{" "}
              {id} from ft to meter by multiplying the {id} in ft by 0.305.
            </p>
          </div>
        </div>
      );
    } else if (id === "durationEvent") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Duration Event
          </h1>
          <div className="mt-4 max-w-md">
            <p className="mb-8 leading-relaxed">
              Please enter the duration of the event in minutes.
            </p>
          </div>
        </div>
      );
    } else if (id === "repetitionEvent") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Repetition Event
          </h1>
          <div className="mt-4 max-w-md">
            <p className="mb-8 leading-relaxed">
              Please enter the number of times the same person is attending the
              event.
            </p>
          </div>
        </div>
      );
    } else if (id === "roomACH") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Air changes per hour
          </h1>
          <div>
            <p className="mb-8 leading-relaxed">
              This refers to the the amount of air that is delivered to the
              space.
            </p>
            <p className="mb-8 leading-relaxed">
              Note that e.g. a ventilation rate of 1<sup>h-1</sup> does not mean
              that 100% of the air is replaced in 1 h. That's the "plug flow"
              assumption, the air inside is displaced by the new air. But due to
              mixing it doesn't work that way. A better approximation is that
              the fraction of the initial air that remains in the space vs time
              is exp (-ACH * time) * 100%. So after 1 h, what remains is exp(-1
              * 1) =* 100% = 36%, after 2 h, what remains is exp(-1 * 2) = 14%
              and so on.
            </p>
          </div>
        </div>
      );
    } else if (id === "perRecirculatedAir") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Percentage of recirculated air
          </h1>
          <p className="mb-8 leading-relaxed">
            This refers to the the percentage of indoor that is recirculated by
            the mechanical ventilation system.
          </p>
        </div>
      );
    } else if (id === "filter") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Filter type
          </h1>
          <p className="mb-8 leading-relaxed">
            We have included a list of filters with the following
            specifications.
          </p>
          <div className="flex mx-auto justify-center py-3">
            <table className="table-auto text-center">
              <thead>
                <tr>
                  <th className="px-4 py-1">Type</th>
                  <th className="px-4 py-1">Filtration Efficiency (%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV8</td>
                  <td className="border px-4 py-1">20</td>
                </tr>
                <tr className="font-medium">
                  {" "}
                  <td className="border px-4 py-1">MERV9</td>
                  <td className="border px-4 py-1">35</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV10</td>
                  <td className="border px-4 py-1">50</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV11</td>
                  <td className="border px-4 py-1">65</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV12</td>
                  <td className="border px-4 py-1">80</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV13</td>
                  <td className="border px-4 py-1">85</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV14</td>
                  <td className="border px-4 py-1">90</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV15</td>
                  <td className="border px-4 py-1">90</td>
                </tr>
                <tr className="font-medium">
                  <td className="border px-4 py-1">MERV16</td>
                  <td className="border px-4 py-1">95</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      );
    } else if (id === "mask") {
      return (
        <div>
          <h1 className="title-font sm:text-4xl text-3xl text-center mb-4 capitalize font-medium">
            Mask type
          </h1>
          <p className="mb-8 leading-relaxed">
            We have included a list of maks with the following specifications.
          </p>
          <div className="flex mx-auto justify-center py-3">
            <table className="table-auto text-center">
              <thead>
                <tr>
                  <th className="px-4 border-t py-1"></th>
                  <th className="px-4 border-b border-t py-1" colSpan="2">
                    Mask Efficiency (%)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b px-4 py-1">Masktype</td>
                  <td className="border-b px-4 py-1">Exhalation Filtration</td>
                  <td className="border-b px-4 py-1">Inhalation Filtration</td>
                </tr>
                <tr>
                  <td className="px-4 py-1">
                    Mixed (if you are unsure of specifics)
                  </td>
                  <td className="px-4 py-1">50</td>
                  <td className="px-4 py-1">30</td>
                </tr>
                <tr>
                  <td className="px-4 py-1">Surgical masks</td>
                  <td className="px-4 py-1">65</td>
                  <td className="px-4 py-1">50</td>
                </tr>
                <tr>
                  <td className="px-4 py-1">Cloth masks</td>
                  <td className="px-4 py-1">50</td>
                  <td className="px-4 py-1">30</td>
                </tr>
                <tr>
                  <td className="px-4 py-1">N95</td>
                  <td className="px-4 py-1">85</td>
                  <td className="px-4 py-1">85</td>
                </tr>
                <tr>
                  <td className="px-4 py-1">N95, valved</td>
                  <td className="px-4 py-1">0</td>
                  <td className="px-4 py-1">85</td>
                </tr>
                <tr>
                  <td className="border-b px-4 py-1">Face shields</td>
                  <td className="border-b px-4 py-1">23</td>
                  <td className="border-b px-4 py-1">23</td>
                </tr>
              </tbody>
              {/*<tbody>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV8</td>*/}
              {/*    <td className="border px-4 py-1">20</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    {" "}*/}
              {/*    <td className="border px-4 py-1">MERV9</td>*/}
              {/*    <td className="border px-4 py-1">35</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV10</td>*/}
              {/*    <td className="border px-4 py-1">50</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV11</td>*/}
              {/*    <td className="border px-4 py-1">65</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV12</td>*/}
              {/*    <td className="border px-4 py-1">80</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV13</td>*/}
              {/*    <td className="border px-4 py-1">85</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV14</td>*/}
              {/*    <td className="border px-4 py-1">90</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV15</td>*/}
              {/*    <td className="border px-4 py-1">90</td>*/}
              {/*  </tr>*/}
              {/*  <tr className="font-medium">*/}
              {/*    <td className="border px-4 py-1">MERV16</td>*/}
              {/*    <td className="border px-4 py-1">95</td>*/}
              {/*  </tr>*/}
              {/*</tbody>*/}
            </table>
          </div>
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
        <HelpText id={match.params.id} />
      </div>
    </section>
  );
}

export default HelpPage;
