import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

function Indoor() {
  const [state, setState] = React.useState({
    length: 600 * 0.305,
    width: 300 * 0.305,
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
    numberInfected: 1,
    fractionImmune: 0,
    pBeingInfected: 0.1,
    hospitalizationRate: 20,
    deathRate: 1,
    area: 0,
    volume: 0,
    areaPerPerson: 0,
    peoplePerArea: 0,
    volumePerPerson: 0,
  });

  useEffect(() => {
    setState({
      ...state,
      volume: (state.width * state.length * state.height).toFixed(1),
      area: (state.width * state.length).toFixed(1),
      areaPerPerson: (state.area / state.people).toFixed(1),
      peoplePerArea: (state.people / state.area).toFixed(1),
      volumePerPerson: (state.volume / state.people).toFixed(1),
    });
  }, [state.width, state.length, state.height, state.people]);

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,
    });
  }

  return (
    <div>
      <Helmet>
        <title>Indoor space</title>
        <meta name="description" content="content" />
      </Helmet>
      <section className="flex lg:container lg:mx-auto mx-auto text-gray-700 body-font">
        <div className="flex-auto m-6">
          <h1 className="title-font mb-4 font-bold text-gray-900">
            Space information
          </h1>
          <form className="w-full">
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
            <div className="flex items-end flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-area"
                >
                  Area
                </label>
                <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                  {state.area}
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-volume"
                >
                  Volume
                </label>
                <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                  {state.volume}
                </div>
              </div>
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide  text-gray-700 text-xs font-bold mb-2"
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
              <div className="w-1/3 px-3 mb-6 md:mb-0">
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
            <div className="flex items-end flex-wrap -mx-3 mb-6">
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Total first order loss rate
                </label>
                <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                  {(
                    state.ventilationOutAir +
                    state.decayRateVirus +
                    state.controlMeasure +
                    state.depositionSurface
                  ).toFixed(2)}
                </div>
              </div>
              <div className="w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                  Ventilation rate per person
                </label>
                <div className="appearance-none block w-full text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white">
                  {(
                    (state.volume *
                      (state.ventilationOutAir + state.controlMeasure) *
                      1000) /
                    3600 /
                    state.people
                  ).toFixed(1)}
                </div>
              </div>
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-people"
                >
                  Number of people
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-people"
                  type="number"
                  name="people"
                  placeholder={state.people}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-numberInfected"
                >
                  People infected
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-numberInfected"
                  type="number"
                  name="numberInfected"
                  placeholder={state.numberInfected}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-fractionImmune"
                >
                  Fraction Immune
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-fractionImmune"
                  type="number"
                  name="fractionImmune"
                  placeholder={state.fractionImmune}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-areaPerPerson"
                >
                  Area per person
                </label>
                <div className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  {state.areaPerPerson}
                </div>
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-peoplePerArea"
                >
                  People per area
                </label>
                <div className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  {state.peoplePerArea}
                </div>
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-volumePerPerson"
                >
                  Volume per person
                </label>
                <div className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                  {state.volumePerPerson}
                </div>
              </div>
            </div>
            {/*  todo add lines 47 to 54 */}
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-pBeingInfected"
                >
                  Probability being infected (%)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-pBeingInfected"
                  type="number"
                  name="pBeingInfected"
                  placeholder={state.pBeingInfected}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-hospitalizationRate"
                >
                  Hospitalization Rate (%)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-hospitalizationRate"
                  type="number"
                  name="hospitalizationRate"
                  placeholder={state.hospitalizationRate}
                  onChange={handleChange}
                />
              </div>
              <div className="w-1/3 px-3 mb-6 md:mb-0">
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  htmlFor="grid-deathRate"
                >
                  Death Rate (%)
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-deathRate"
                  type="number"
                  name="deathRate"
                  placeholder={state.deathRate}
                  onChange={handleChange}
                />
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Indoor;
