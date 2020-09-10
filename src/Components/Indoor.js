import React from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";
import OutputsIndoor from "./OutputsIndoor";
import {
  area,
  avgQuantaConcentration,
  firstOrderLoss,
  netEmissionRate,
  pCondOneEventHospitalization,
  pCondOneEventInfection,
  quantaInhaledPerson,
  ventilationRate,
  volume,
} from "../Functions/Utils";

class Indoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // INPUTS
      // info environment
      length: 25 * 0.305,
      width: 20 * 0.305,
      height: 10 * 0.305,
      // info event
      durationEvent: 50,
      repetitionEvent: 180,
      ventilationOutAir: 3,
      // info people
      activity: "Quite working, Seated",
      ageGroup: "16-20",
      people: 10,
      numberInfected: 1,
      fractionImmune: 0,
      exhalationMaskEff: 0.5,
      perPeopleMask: 1,
      inhalationMaskEff: 0.3,
      // covid parameters
      pBeingInfected: 0.2,
      hospitalizationRate: 0.2,
      deathRate: 0.01,
      // CALCULATED AND ESTIMATED inputs
      // info environment
      temperature: 20,
      relativeHumidity: 50,
      pressure: 0.95,
      co2Outdoors: 415,
      // info event
      decayRateVirus: 0.62,
      depositionSurface: 0.3,
      controlMeasure: 0, // todo estimate this value from tables
      // info people
      susceptiblePeople: 9,
      co2EmissionRate: 0.005,
      breathingRate: 0.0086 * 60, // todo change this default value, or change default activity and age
      quanta: 25, // todo change this default value, or change default activity and age
      // OUTPUTS
      area: 47,
      volume: 142,
      firstOrderLoss: 3.92,
      netEmissionRate: 12.5,
      avgQuantaConcentration: 0.01585,
      quantaInhaledPerson: 0.00477,
      pCondOneEventInfection: 0.0235,
      pCondOneEventHospitalization: 0.0047,
      pCondOneEventDeath: 0.0002,
      pCondOneEventCarTravel: 3.3,
      pAbsOneEventInfection: 0.0004,
      pAbsOneEventHospitalization: 0.0001,
      pAbsOneEventDeath: 0.0,
      pAbsOneEventCarTravel: 0.1,
      pAbsMultipleEventInfection: 0.0761,
      pAbsMultipleEventHospitalization: 0.0152,
      pAbsMultipleEventDeath: 0.0008,
      pAbsMultipleEventCarTravel: 0.1,
    };

    // todo programmatically generate this list as for age groups
    this.listActivities = [
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

    this.quanta_resp_data = require("../Data/quanta_resp_data.json");

    let arrayAge = [];
    Object.keys(this.quanta_resp_data).forEach(function (key) {
      arrayAge.push(key);
    });
    this.ageGroups = arrayAge;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDroDowAct = this.handleDroDowAct.bind(this);
    this.handleDroDowAge = this.handleDroDowAge.bind(this);
    this.calculateOutputs = this.calculateOutputs.bind(this);
  }

  handleInputChange(evt) {
    let tmp = this.state;
    tmp[evt.target.name] = evt.target.value;

    this.setState(tmp);

    this.calculateOutputs();
  }

  calculateOutputs() {
    let data = this.state;
    data.volume = volume(data.width, data.length, data.height);
    data.area = area(data.width, data.length);
    data.firstOrderLoss = firstOrderLoss(
      data.ventilationOutAir,
      data.decayRateVirus,
      data.controlMeasure,
      data.depositionSurface
    );
    data.ventilationRate = ventilationRate(
      data.volume,
      data.ventilationOutAir,
      data.controlMeasure,
      data.people
    );
    data.netEmissionRate = netEmissionRate(
      data.quanta,
      data.exhalationMaskEff,
      data.perPeopleMask,
      data.numberInfected
    );
    data.avgQuantaConcentration = avgQuantaConcentration(
      data.netEmissionRate,
      data.firstOrderLoss,
      data.volume,
      data.durationEvent
    );
    data.quantaInhaledPerson = quantaInhaledPerson(
      data.avgQuantaConcentration,
      data.breathingRate,
      data.durationEvent,
      data.inhalationMaskEff,
      data.perPeopleMask
    );
    data.pCondOneEventInfection = pCondOneEventInfection(
      data.quantaInhaledPerson
    );
    data.pCondOneEventHospitalization = pCondOneEventHospitalization(
      data.pCondOneEventInfection,
      data.hospitalizationRate
    );
    // todo create functions and test them
    data.pCondOneEventDeath = (
      data.pCondOneEventInfection * data.deathRate
    ).toFixed(4);
    data.pCondOneEventCarTravel = (
      data.pCondOneEventDeath /
      100 /
      0.0000006
    ).toFixed(1);
    data.pAbsOneEventInfection =
      (1 -
        Math.pow(
          1 - ((data.pCondOneEventInfection / 100) * data.pBeingInfected) / 100,
          data.susceptiblePeople
        )) *
      100;
    data.pAbsOneEventHospitalization = (
      data.pAbsOneEventInfection * data.hospitalizationRate
    ).toFixed(4);
    data.pAbsOneEventDeath = data.pAbsOneEventInfection * data.deathRate;
    data.pAbsOneEventCarTravel = (
      data.pAbsOneEventDeath /
      100 /
      0.0000006
    ).toFixed(1);
    data.pAbsMultipleEventInfection =
      (1 -
        Math.pow(1 - data.pAbsOneEventInfection / 100, data.repetitionEvent)) *
      100;
    data.pAbsMultipleEventHospitalization = (
      data.pAbsMultipleEventInfection * data.hospitalizationRate
    ).toFixed(4);
    data.pAbsMultipleEventDeath =
      data.pAbsMultipleEventInfection * data.deathRate;
    data.pAbsMultipleEventCarTravel = (
      data.pAbsMultipleEventDeath /
      100 /
      (0.0000006 * data.repetitionEvent)
    ).toFixed(1);
    data.pAbsOneEventInfection = data.pAbsOneEventInfection.toFixed(4);
    data.pAbsOneEventDeath = data.pAbsOneEventDeath.toFixed(4);
    data.pAbsMultipleEventDeath = data.pAbsMultipleEventDeath.toFixed(4);
    data.pAbsMultipleEventInfection = data.pAbsMultipleEventInfection.toFixed(
      4
    );

    this.setState(data);
  }

  handleDroDowAct(activity) {
    const values = this.quanta_resp_data[this.state.ageGroup][activity];

    let tmp = this.state;

    tmp.activity = activity;
    tmp.breathingRate = values["Respiration.m3_min"] * 60;
    tmp.quanta = values["QuantaEmission"];

    console.log(tmp);

    this.setState(tmp);

    this.calculateOutputs();
  }

  handleDroDowAge(ageGroup) {
    const values = this.quanta_resp_data[ageGroup][this.state.activity];
    let tmp = this.state;

    tmp.ageGroup = ageGroup;
    tmp.breathingRate = values["Respiration.m3_min"] * 60;
    tmp.quanta = values["QuantaEmission"];

    this.setState(tmp);

    this.calculateOutputs();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Indoor space</title>
          <meta name="description" content="content" />
        </Helmet>
        <section className="container mx-auto text-gray-700 body-font">
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
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"length"}
                  label={"Length (m)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"width"}
                  label={"Width (m)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"height"}
                  label={"Height (m)"}
                />
              </div>
            </form>
            <form className="w-full">
              <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
                Information about the event
              </h1>
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"durationEvent"}
                  label={"Duration event (minutes)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"repetitionEvent"}
                  label={"Repetition event (times)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"ventilationOutAir"}
                  label={"Ventilation outside air (h-1)"}
                />
              </div>
            </form>
            <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
              Information about peoples' activity in the room
            </h1>
            <div className="flex content-center my-4">
              <p className="py-2 mr-2">Select an activity: </p>
              <DropDown
                selected={this.state["activity"]}
                listItems={this.listActivities}
                setValue={this.handleDroDowAct}
              />
            </div>
            <div className="flex content-center my-4">
              <p className="py-2 mr-2">Select age group: </p>
              <DropDown
                selected={this.state["ageGroup"]}
                listItems={this.ageGroups}
                setValue={this.handleDroDowAge}
              />
            </div>
            <form className="w-full">
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"people"}
                  label={"Number of people"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"numberInfected"}
                  label={"People infected"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"fractionImmune"}
                  label={"Fraction Immune"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"exhalationMaskEff"}
                  label={"Exhalation mask efficiency"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"perPeopleMask"}
                  label={"Percentage people with mask"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"inhalationMaskEff"}
                  label={"Inhalation mask efficiency"}
                />
              </div>
              <h1 className="title-font mb-4 mt-12 font-bold text-gray-900">
                Parameters related to COVID-19
              </h1>
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"pBeingInfected"}
                  label={"Probability being infected (%)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"hospitalizationRate"}
                  label={"Hospitalization rate (%)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"deathRate"}
                  label={"Death rate (%)"}
                />
              </div>
            </form>
            <OutputsIndoor data={this.state} />
          </div>
        </section>
      </div>
    );
  }
}

export default Indoor;
