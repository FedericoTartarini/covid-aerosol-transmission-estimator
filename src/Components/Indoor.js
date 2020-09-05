import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";

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
    people: 31000,
    numberInfected: 1,
    fractionImmune: 0,
    pBeingInfected: 0.1,
    hospitalizationRate: 20,
    deathRate: 1,
    breathingRate: 0.72,
    co2EmissionRate: 0.0061,
    quanta: 50,
    exhalationMaskEff: 0,
    perPeopleMask: 0,
    inhalationMaskEff: 0,
  });

  function handleChange(evt) {
    const value = evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value,

      volume: (state.width * state.length * state.height).toFixed(1),
      area: (state.width * state.length).toFixed(1),
      areaPerPerson: (state.area / state.people).toFixed(1),
      peoplePerArea: (state.people / state.area).toFixed(1),
      volumePerPerson: (state.volume / state.people).toFixed(1),
      firstOrderLoss:
        state.ventilationOutAir +
        state.decayRateVirus +
        state.controlMeasure +
        state.depositionSurface,
      ventilationRate:
        (state.volume *
          (state.ventilationOutAir + state.controlMeasure) *
          1000) /
        3600 /
        state.people,
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
          <form className="w-full">
            <h1 className="title-font mb-4 font-bold text-gray-900">
              Information about the environment
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.length}
                label={"Length (m)"}
              />
              <InputField
                handleChange={handleChange}
                value={state.width}
                label={"Width (m)"}
              />
              <InputField
                handleChange={handleChange}
                value={state.height}
                label={"Height (m)"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.pressure}
                label={"Pressure (atm)"}
              />
              <InputField
                handleChange={handleChange}
                value={state.temperature}
                label={"Temperature (°C)"}
              />
              <InputField
                handleChange={handleChange}
                value={state.relativeHumidity}
                label={"Relative humidity (%)"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.repetitionEvent}
                label={"Repetition event (times)"}
              />
              <InputField
                handleChange={handleChange}
                value={state.ventilationOutAir}
                label={"Ventilation outside air (h-1)"}
              />
              <InputField
                handleChange={handleChange}
                value={state.controlMeasure}
                label={"Additional measures (h-1)"}
              />
            </div>
            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Information about peoples' activity in the room
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.people}
                label={"Number of people"}
              />
              <InputField
                handleChange={handleChange}
                value={state.numberInfected}
                label={"People infected"}
              />
              <InputField
                handleChange={handleChange}
                value={state.fractionImmune}
                label={"Fraction Immune"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.breathingRate}
                label={"Breathing rate"}
              />
              <InputField
                handleChange={handleChange}
                value={state.co2EmissionRate}
                label={"CO2 emission rate"}
              />
              {/*  todo add lines 49 */}
              <InputField
                handleChange={handleChange}
                value={state.quanta}
                label={"Quanta exhalation rate"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.exhalationMaskEff}
                label={"Exhalation mask efficiency"}
              />
              <InputField
                handleChange={handleChange}
                value={state.perPeopleMask}
                label={"Percentage people with mask"}
              />
              <InputField
                handleChange={handleChange}
                value={state.inhalationMaskEff}
                label={"Inhalation mask efficiency"}
              />
            </div>

            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Parameters related to COVID-19
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={state.pBeingInfected}
                label={"Probability being infected (%)"}
              />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Indoor;
