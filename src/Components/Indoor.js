import React from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";

function Indoor() {
  const listActivities = [
    "Quite working, Seated",
    "Speaking, Seated",
    "Speaking loudly, Seated",
    "Quite working, Standing",
    "Speaking, Standing",
    "Speaking loudly, Standing",
    "Quite, moderate activity",
    "Speaking, moderate activity",
    "Speaking loudly, moderate activity",
    "Quite, heavy activity",
    "Speaking, heavy activity",
    "Speaking loudly, heavy activity",
    "Teaching, speaking",
    "Teaching, speaking loudly",
    "Student, speaking",
    "Student, speaking loudly",
  ];

  const [inputData, setInputData] = React.useState({
    activity: "Quite working, Seated",
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
    setInputData({
      ...inputData,
      [evt.target.name]: value,

      volume: (inputData.width * inputData.length * inputData.height).toFixed(
        1
      ),
      area: (inputData.width * inputData.length).toFixed(1),
      areaPerPerson: (inputData.area / inputData.people).toFixed(1),
      peoplePerArea: (inputData.people / inputData.area).toFixed(1),
      volumePerPerson: (inputData.volume / inputData.people).toFixed(1),
      firstOrderLoss:
        inputData.ventilationOutAir +
        inputData.decayRateVirus +
        inputData.controlMeasure +
        inputData.depositionSurface,
      ventilationRate:
        (inputData.volume *
          (inputData.ventilationOutAir + inputData.controlMeasure) *
          1000) /
        3600 /
        inputData.people,
    });
  }

  function handleDropDown(value) {
    setInputData({
      ...inputData,
      activity: value,
    });
  }

  return (
    <div>
      <Helmet>
        <title>Indoor space</title>
        <meta name="description" content="content" />
      </Helmet>
      <section className="lg:container lg:mx-auto mx-auto text-gray-700 body-font">
        <div className="m-6">
          <form className="w-full">
            <h1 className="title-font mb-4 font-bold text-gray-900">
              Information about the environment
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={inputData.length}
                label={"Length (m)"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.width}
                label={"Width (m)"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.height}
                label={"Height (m)"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={inputData.pressure}
                label={"Pressure (atm)"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.temperature}
                label={"Temperature (°C)"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.relativeHumidity}
                label={"Relative humidity (%)"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={inputData.repetitionEvent}
                label={"Repetition event (times)"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.ventilationOutAir}
                label={"Ventilation outside air (h-1)"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.controlMeasure}
                label={"Additional measures (h-1)"}
              />
            </div>
            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Information about peoples' activity in the room
            </h1>
          </form>
          <div className="flex content-center my-4">
            <p className="py-2 mr-2">Select an activity: </p>
            <DropDown
              selected={inputData.activity}
              listItems={listActivities}
              setValue={handleDropDown}
            />
          </div>
          <form className="w-full">
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={inputData.people}
                label={"Number of people"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.numberInfected}
                label={"People infected"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.fractionImmune}
                label={"Fraction Immune"}
              />
            </div>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={inputData.exhalationMaskEff}
                label={"Exhalation mask efficiency"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.perPeopleMask}
                label={"Percentage people with mask"}
              />
              <InputField
                handleChange={handleChange}
                value={inputData.inhalationMaskEff}
                label={"Inhalation mask efficiency"}
              />
            </div>

            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Parameters related to COVID-19
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                value={inputData.pBeingInfected}
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
