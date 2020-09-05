import React from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";
import OutputField from "./OutputField";

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

  const ageGroups = [
    "16 - 20",
    "21 - 30",
    "31 - 40",
    "41 - 50",
    "51 - 60",
    "61 - 70",
    "71 - 80",
    "80 and above",
  ];

  const [inputData, setInputData] = React.useState({
    activity: "Quite working, Seated",
    ageGroup: "41 - 50",
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
    // below are all the calculated inputs
    pOneEventInfection: 0.02, // todo calculate this value
    pOneEventHospitalization: 0.02, // todo calculate this value
    pOneEventDeath: 0.02, // todo calculate this value
    pOneEventCarTravel: 3, // todo calculate this value
    pMultipleEventInfection: 0.02, // todo calculate this value
    pMultipleEventHospitalization: 0.02, // todo calculate this value
    pMultipleEventDeath: 0.02, // todo calculate this value
    pMultipleEventCarTravel: 3, // todo calculate this value
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
      pOneEventInfection: 0.02, // todo calculate this value
    });
  }

  function handleDroDowAct(value) {
    setInputData({
      ...inputData,
      activity: value,
    });
  }

  function handleDroDowAge(value) {
    setInputData({
      ...inputData,
      ageGroup: value,
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
          <h1 className="title-font text-2xl mb-4 mt-12 font-bold text-gray-900">
            Inputs
          </h1>
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
          </form>
          <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
            Information about peoples' activity in the room
          </h1>
          <div className="flex content-center my-4">
            <p className="py-2 mr-2">Select an activity: </p>
            <DropDown
              selected={inputData.activity}
              listItems={listActivities}
              setValue={handleDroDowAct}
            />
          </div>
          <div className="flex content-center my-4">
            <p className="py-2 mr-2">Select age group: </p>
            <DropDown
              selected={inputData.ageGroup}
              listItems={ageGroups}
              setValue={handleDroDowAge}
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
          <div>
            <h1 className="title-font text-2xl mb-4 mt-12 font-bold text-gray-900">
              Outputs
            </h1>
            <h1 className="title-font mb-4 mt-4 font-bold text-gray-900">
              Absolute results for a person attending one event
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <OutputField
                label={"Probability of infection (%)"}
                value={inputData.pOneEventInfection}
              />
              <OutputField
                label={"Probability of hospitalization (%)"}
                value={inputData.pOneEventHospitalization}
              />
              <OutputField
                label={"Probability of death (%)"}
                value={inputData.pOneEventDeath}
              />
              <OutputField
                label={"Ratio to risk of car travel death (times higher)"}
                value={inputData.pOneEventCarTravel}
              />
            </div>
            <h1 className="title-font mb-4 mt-4 font-bold text-gray-900">
              Absolute results for a person attending multiple events
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <OutputField
                label={"Probability of infection (%)"}
                value={inputData.pMultipleEventInfection}
              />
              <OutputField
                label={"Probability of hospitalization (%)"}
                value={inputData.pMultipleEventHospitalization}
              />
              <OutputField
                label={"Probability of death (%)"}
                value={inputData.pMultipleEventDeath}
              />
              <OutputField
                label={"Ratio to risk of car travel death (times higher)"}
                value={inputData.pMultipleEventCarTravel}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Indoor;
