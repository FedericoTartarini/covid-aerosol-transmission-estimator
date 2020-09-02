import React from "react";
import { Helmet } from "react-helmet";
import SideNavigation from "./SideNavigation";

function StadiumView() {
  const [state, setState] = React.useState({
    width: 300 * 0.305,
    length: 600 * 0.305,
    height: 50 * 0.305,
    pressure: 0.95,
    temperature: 20,
    relativeHumidity: 50,
    co2Outdoors: 415,
    durationEvent: 90,
    repetitionEvent: 1,
    ventilationOutAir: 40,
    decayRateVirus: 0.62,
    depositionSurface: 0.3,
    controlMeasure: 0,
    firstOrderLoss: 41,
    people: 31000,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  function StandardInput({ name }) {
    return (
      <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
        <label
          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          htmlFor="grid-zip"
        >
          {name}
        </label>
        <input
          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id={name}
          type="number"
          name={name}
          value={state[name]}
          onChange={handleChange}
        />
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>Stadium calculator</title>
        <meta name="description" content="content" />
      </Helmet>
      <section className="text-gray-700 body-font">
        <div className="flex">
          <SideNavigation />
          <div className="flex-initial m-6">
            <h1 className="title-font mb-4 font-medium text-gray-900">
              Estimation of COVID-19 aerosol transmission: Case for Soccer Match
              (ONLY through air beyond close proximity, so will underestimate a
              lot)
            </h1>
            <p className="mb-4">
              This is a general spreadsheet applicable to any situation, under
              the assumptions of this model - See notes specific to this case
              (if applicable) at the very bottom.
            </p>
            <p className="mb-4">
              Important inputs as highlighted in orange - change these for your
              situation. <br />
              Other, more specialized inputs are highlighted in yellow - change
              only for more advanced applications <br />
              Calculations are not highlighted - don't change these unless you
              are sure you know what you are doing <br />
            </p>
            <h1 className="title-font mb-4 font-bold text-gray-900">
              Environmental Parameters.
            </h1>
            <form className="w-full">
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-length"
                  >
                    Length (m)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-length"
                    type="number"
                    name="length"
                    placeholder={state.length}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-width"
                  >
                    Width (m)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-width"
                    type="number"
                    name="width"
                    placeholder={state.width}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-height"
                  >
                    Height (m)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-height"
                    type="number"
                    name="height"
                    placeholder={state.height}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-area"
                  >
                    Area
                  </label>
                  <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    <p className="text-xs">{state.width * state.length}</p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-volume"
                  >
                    Volume
                  </label>
                  <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    <p className="text-xs">
                      {state.width * state.length * state.height}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-pressure"
                  >
                    Pressure (atm)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-pressure"
                    type="number"
                    name="pressure"
                    placeholder={state.pressure}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-temperature"
                  >
                    Temperature (C)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-temperature"
                    type="number"
                    name="temperature"
                    placeholder={state.temperature}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-relativeHumidity"
                  >
                    Relative Humidity (%)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-relativeHumidity"
                    type="number"
                    name="relativeHumidity"
                    placeholder={state.relativeHumidity}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-co2Outdoors"
                  >
                    Background C02 (ppm)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-co2Outdoors"
                    type="number"
                    name="co2Outdoors"
                    placeholder={state.co2Outdoors}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-repetitionEvent"
                  >
                    Repetition event (times)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-repetitionEvent"
                    type="number"
                    name="repetitionEvent"
                    placeholder={state.repetitionEvent}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-ventilationOutAir"
                  >
                    Ventilation outside air (h<sup>-1</sup>)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-ventilationOutAir"
                    type="number"
                    name="ventilationOutAir"
                    placeholder={state.ventilationOutAir}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-decayRateVirus"
                  >
                    Decay virus (h<sup>-1</sup>)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-decayRateVirus"
                    type="number"
                    name="decayRateVirus"
                    placeholder={state.decayRateVirus}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-depositionSurface"
                  >
                    Deposition surface (h<sup>-1</sup>)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-depositionSurface"
                    type="number"
                    name="depositionSurface"
                    placeholder={state.depositionSurface}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="grid-controlMeasure"
                  >
                    Additional measures (h<sup>-1</sup>)
                  </label>
                  <input
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    id="grid-controlMeasure"
                    type="number"
                    name="controlMeasure"
                    placeholder={state.controlMeasure}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Total first order loss rate
                  </label>
                  <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    <p className="text-xs">
                      {(
                        state.ventilationOutAir +
                        state.decayRateVirus +
                        state.controlMeasure +
                        state.depositionSurface
                      ).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                  <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                    Ventilation rate per person
                  </label>
                  <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                    <p className="text-xs">
                      {(
                        (state.width *
                          state.length *
                          state.height *
                          (state.ventilationOutAir + state.controlMeasure) *
                          1000) /
                        3600 /
                        state.people
                      ).toFixed(1)}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default StadiumView;
