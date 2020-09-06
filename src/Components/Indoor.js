import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";
import OutputField from "./OutputField";
import OutputsIndoor from "./OutputsIndoor";

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

  // let cases = require("../Data/lut_data.json");

  const [inputData, setInputData] = React.useState({
    // INPUTS
    // info environment
    length: 25 * 0.305,
    width: 20 * 0.305,
    height: 10 * 0.305,
    temperature: 20,
    relativeHumidity: 50,
    // info event
    durationEvent: 50,
    repetitionEvent: 180,
    ventilationOutAir: 3,
    controlMeasure: 0,
    // info people
    activity: "Quite working, Seated",
    ageGroup: "16 - 20",
    people: 10,
    numberInfected: 1,
    fractionImmune: 0,
    exhalationMaskEff: 0.5,
    perPeopleMask: 1,
    inhalationMaskEff: 0.3,
    // covid parameters
    pBeingInfected: 0.2,
    // CALCULATED AND ESTIMATED inputs
    // info environment
    pressure: 0.95,
    co2Outdoors: 415,
    // info event
    decayRateVirus: 0.62, // todo estimate this value from tables
    depositionSurface: 0.3, // todo estimate this value from tables
    // info people
    co2EmissionRate: 0.005, // todo estimate this value from tables
    breathingRate: 0.0086 * 60, // todo estimate this value from tables
    quanta: 25, // todo estimate this value from tables
    // info covid
    hospitalizationRate: 0.2, // todo estimate this value from tables
    deathRate: 0.01, // todo estimate this value from tables
    // OUTPUTS
    area: 999,
    volume: 999,
    firstOrderLoss: 999,
    netEmissionRate: 999,
    avgQuantaConcentration: 999,
    quantaInhaledPerson: 999,
    pOneEventInfection: 999,
    pOneEventHospitalization: 999,
    pOneEventDeath: 999,
    pOneEventCarTravel: 999,
    pMultipleEventInfection: 999, // todo calculate this value
    pMultipleEventHospitalization: 999, // todo calculate this value
    pMultipleEventDeath: 999, // todo calculate this value
    pMultipleEventCarTravel: 999, // todo calculate this value
  });

  function handleChange(evt) {
    let tmpInputData = inputData;
    tmpInputData[evt.target.name] = evt.target.value;

    tmpInputData.volume =
      tmpInputData.width * tmpInputData.length * tmpInputData.height;
    tmpInputData.area = tmpInputData.width * tmpInputData.length;
    tmpInputData.areaPerPerson = tmpInputData.area / tmpInputData.people;
    tmpInputData.peoplePerArea = tmpInputData.people / tmpInputData.area;
    tmpInputData.volumePerPerson = tmpInputData.volume / tmpInputData.people;
    tmpInputData.firstOrderLoss =
      tmpInputData.ventilationOutAir +
      tmpInputData.decayRateVirus +
      tmpInputData.controlMeasure +
      tmpInputData.depositionSurface;
    tmpInputData.ventilationRate =
      (tmpInputData.volume *
        (tmpInputData.ventilationOutAir + tmpInputData.controlMeasure) *
        1000) /
      3600 /
      tmpInputData.people;
    tmpInputData.netEmissionRate =
      tmpInputData.quanta *
      (1 - tmpInputData.exhalationMaskEff * tmpInputData.perPeopleMask) *
      tmpInputData.numberInfected;
    tmpInputData.avgQuantaConcentration =
      (tmpInputData.netEmissionRate /
        tmpInputData.firstOrderLoss /
        tmpInputData.volume) *
      (1 -
        (1 / tmpInputData.firstOrderLoss / (tmpInputData.durationEvent / 60)) *
          (1 -
            Math.exp(
              -tmpInputData.firstOrderLoss * (tmpInputData.durationEvent / 60)
            )));
    tmpInputData.quantaInhaledPerson =
      tmpInputData.avgQuantaConcentration *
      tmpInputData.breathingRate *
      (tmpInputData.durationEvent / 60) *
      (1 - tmpInputData.inhalationMaskEff * tmpInputData.perPeopleMask);
    tmpInputData.pOneEventInfection = (
      (1 - Math.exp(-tmpInputData.quantaInhaledPerson)) *
      100
    ).toFixed(5);
    tmpInputData.pOneEventHospitalization = (
      tmpInputData.pOneEventInfection * tmpInputData.hospitalizationRate
    ).toFixed(5);
    tmpInputData.pOneEventDeath = (
      tmpInputData.pOneEventInfection * tmpInputData.deathRate
    ).toFixed(5);
    tmpInputData.pOneEventCarTravel = (
      tmpInputData.pOneEventDeath /
      100 /
      0.0000006
    ).toFixed(1);

    setInputData(tmpInputData);

    console.log(inputData.area);
    // console.log(inputData.volume.toFixed(1));
    // console.log(inputData.firstOrderLoss.toFixed(1));
    // console.log("emission rate", inputData.netEmissionRate);
    // console.log("avg quanta con", inputData.avgQuantaConcentration);
    // console.log("quanta inh", inputData.quantaInhaledPerson);
    // console.log("p infection", inputData.pOneEventInfection);
    // console.log("p hospitalization", inputData.pOneEventHospitalization);
    // console.log("p death", inputData.pOneEventDeath);
    // console.log("p car", inputData.pOneEventCarTravel);
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
            </h1>{" "}
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange.bind(this)}
                data={inputData}
                id={"length"}
                label={"Length (m)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"width"}
                label={"Width (m)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"height"}
                label={"Height (m)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"temperature"}
                label={"Temperature (°C)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"relativeHumidity"}
                label={"Relative humidity (%)"}
              />
            </div>
          </form>
          <form className="w-full">
            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Information about the event
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"durationEvent"}
                label={"Duration event (minutes)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"repetitionEvent"}
                label={"Repetition event (times)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"ventilationOutAir"}
                label={"Ventilation outside air (h-1)"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"controlMeasure"}
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
              selected={inputData["activity"]}
              listItems={listActivities}
              setValue={handleDroDowAct}
            />
          </div>
          <div className="flex content-center my-4">
            <p className="py-2 mr-2">Select age group: </p>
            <DropDown
              selected={inputData["ageGroup"]}
              listItems={ageGroups}
              setValue={handleDroDowAge}
            />
          </div>
          <form className="w-full">
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"people"}
                label={"Number of people"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"numberInfected"}
                label={"People infected"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"fractionImmune"}
                label={"Fraction Immune"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"exhalationMaskEff"}
                label={"Exhalation mask efficiency"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"perPeopleMask"}
                label={"Percentage people with mask"}
              />
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"inhalationMaskEff"}
                label={"Inhalation mask efficiency"}
              />
            </div>
            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Parameters related to COVID-19
            </h1>
            <div className="flex items-end flex-wrap -mx-3 mb-2">
              <InputField
                handleChange={handleChange}
                data={inputData}
                id={"pBeingInfected"}
                label={"Probability being infected (%)"}
              />
            </div>
          </form>
          <OutputsIndoor data={inputData} />
        </div>
      </section>
    </div>
  );
}

export default Indoor;
