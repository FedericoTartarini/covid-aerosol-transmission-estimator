import React from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";
import OutputsIndoor from "./OutputsIndoor";
import { calculateOutputs, RateControlMeasures } from "../Functions/Utils";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { reactLocalStorage } from "reactjs-localstorage";

class Indoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getSavedInputsIndoor();

    this.listActivities = [
      "Quiet working, Seated",
      "Speaking, Seated",
      "Speaking loudly, Seated",
      "Quiet working, Standing",
      "Speaking, Standing",
      "Speaking loudly, Standing",
      "Quiet, moderate activity",
      "Speaking, moderate activity",
      "Speaking loudly, moderate activity",
      "Quiet, heavy activity",
      "Speaking, heavy activity",
      "Speaking loudly, heavy activity",
      "Teaching, speaking",
      "Teaching, speaking loudly",
      "Student, speaking",
      "Student, speaking loudly",
    ];

    this.maskTypes = [
      "No mask",
      "Mixed (if unsure)",
      "Surgical mask",
      "Cloth mask",
      "N95",
      "N95 - valved",
      "Face shields",
    ];

    this.listFilters = [
      "No filter",
      "Unknown",
      "MERV8",
      "MERV9",
      "MERV10",
      "MERV11",
      "MERV12",
      "MERV13",
      "MERV14",
      "MERV15",
      "MERV16",
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
    this.handleDroDowMask = this.handleDroDowMask.bind(this);
    this.handleDroDowFilter = this.handleDroDowFilter.bind(this);
  }

  handleInputChange(evt) {
    let tmp = this.state;
    tmp[evt.target.name] = evt.target.value;

    this.setState(tmp);

    this.calculateOutputsSaveState();
  }

  calculateOutputsSaveState() {
    const updatedState = calculateOutputs(this.state);

    reactLocalStorage.setObject("stateIndoor", updatedState);

    this.setState(updatedState);
  }

  getSavedInputsIndoor() {
    const state = reactLocalStorage.getObject("stateIndoor");

    console.log("stateIndoor", state);

    const defaultInput = {
      // INPUTS
      // info environment
      length: 25 * 0.305,
      width: 20 * 0.305,
      height: 10 * 0.305,
      roomACH: 10,
      perRecirculatedAir: 70,
      outdoorAirACH: 3,
      filterType: "No filter",
      filterEfficiency: 0,
      controlMeasure: 0,
      numberPurifiers: 0,
      CADRPurifier: 0,
      // info event
      durationEvent: 50,
      repetitionEvent: 180,
      // info people
      activity: "Quiet working, Seated",
      ageGroup: "16-20",
      people: 10,
      numberInfected: 1,
      fractionImmune: 0,
      perPeopleMask: 100,
      // covid parameters
      pBeingInfected: 0.2,
      percentageHospitalizationRate: 20,
      percentageDeathRate: 1,
      // CALCULATED AND ESTIMATED inputs
      // info environment
      temperature: 20,
      relativeHumidity: 50,
      pressure: 0.95,
      co2Outdoors: 415,
      // info event
      decayRateVirus: 0.62,
      depositionSurface: 0.3,
      // info people
      susceptiblePeople: 9,
      co2EmissionRate: 0.005,
      breathingRate: 0.318,
      quanta: 2,
      maskType: "Cloth mask",
      exhalationMaskEff: 0.5,
      inhalationMaskEff: 0.3,
      // OUTPUTS
      area: "",
      volume: "",
      controlMeasurePurifiers: 0,
      firstOrderLoss: "",
      netEmissionRate: "",
      avgQuantaConcentration: "",
      quantaInhaledPerson: "",
      pCondOneEventInfection: "",
      pCondOneEventHospitalization: "",
      pCondOneEventDeath: "",
      pCondOneEventCarTravel: "",
      pAbsOneEventInfection: "",
      pAbsOneEventHospitalization: "",
      pAbsOneEventDeath: "",
      pAbsOneEventCarTravel: "",
      pAbsMultipleEventInfection: "",
      pAbsMultipleEventHospitalization: "",
      pAbsMultipleEventDeath: "",
      pAbsMultipleEventCarTravel: "",
    };

    if (state) {
      if (Object.keys(state).length !== 0 && state.constructor === Object) {
        return state;
      } else {
        return defaultInput;
      }
    } else {
      return defaultInput;
    }
  }

  handleDroDowAct(activity) {
    const values = this.quanta_resp_data[this.state.ageGroup][activity];

    let tmp = this.state;

    tmp.activity = activity;
    tmp.breathingRate = values["Respiration.m3_min"] * 60;
    tmp.quanta = values["QuantaEmission"];

    this.setState(tmp);

    this.calculateOutputsSaveState();
  }

  handleDroDowAge(ageGroup) {
    const values = this.quanta_resp_data[ageGroup][this.state.activity];
    let tmp = this.state;

    tmp.ageGroup = ageGroup;
    tmp.breathingRate = values["Respiration.m3_min"] * 60;
    tmp.quanta = values["QuantaEmission"];

    this.setState(tmp);

    this.calculateOutputsSaveState();
  }

  handleDroDowFilter(filterType) {
    let tmp = this.state;

    switch (filterType) {
      case "No filter":
        tmp.filterEfficiency = 0;
        break;
      case "Unknown":
        tmp.filterEfficiency = 0.2;
        break;
      case "MERV8":
        tmp.filterEfficiency = 0.2;
        break;
      case "MERV9":
        tmp.filterEfficiency = 0.35;
        break;
      case "MERV10":
        tmp.filterEfficiency = 0.5;
        break;
      case "MERV11":
        tmp.filterEfficiency = 0.65;
        break;
      case "MERV12":
        tmp.filterEfficiency = 0.8;
        break;
      case "MERV13":
        tmp.filterEfficiency = 0.85;
        break;
      case "MERV14":
        tmp.filterEfficiency = 0.9;
        break;
      case "MERV15":
        tmp.filterEfficiency = 0.9;
        break;
      case "MERV16":
        tmp.filterEfficiency = 0.95;
        break;
      default:
        tmp.filterEfficiency = 0.3;
    }

    tmp.filterType = filterType;

    this.setState(tmp);

    this.calculateOutputsSaveState();
  }

  handleDroDowMask(maskType) {
    let tmp = this.state;

    switch (maskType) {
      case "No mask":
        tmp.exhalationMaskEff = 0;
        tmp.inhalationMaskEff = 0;
        break;
      case "Mixed (if unsure)":
        tmp.exhalationMaskEff = 0.5;
        tmp.inhalationMaskEff = 0.3;
        break;
      case "Surgical mask":
        tmp.exhalationMaskEff = 0.65;
        tmp.inhalationMaskEff = 0.5;
        break;
      case "Cloth mask":
        tmp.exhalationMaskEff = 0.5;
        tmp.inhalationMaskEff = 0.3;
        break;
      case "N95":
        tmp.exhalationMaskEff = 0.85;
        tmp.inhalationMaskEff = 0.85;
        break;
      case "N95 - valved":
        tmp.exhalationMaskEff = 0;
        tmp.inhalationMaskEff = 0.85;
        break;
      case "Face shields":
        tmp.exhalationMaskEff = 0.23;
        tmp.inhalationMaskEff = 0.23;
        break;
      default:
        tmp.exhalationMaskEff = 0.5;
        tmp.inhalationMaskEff = 0.3;
    }

    tmp.maskType = maskType;

    this.setState(tmp);

    this.calculateOutputsSaveState();
  }

  render() {
    return (
      <div>
        <Helmet>
          <title>Indoor room</title>
          <meta name="description" content="content" />
        </Helmet>
        <section className="container mx-auto">
          <div className="lg:mx-12 my-4 lg:my-12">
            <h1 className="title-font text-2xl mb-4 font-bold">
              Indoor - Inputs
            </h1>
            <form className="w-full">
              <h1 className="title-font mb-4 font-bold">
                Information about the room
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
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"roomACH"}
                  label={"Air supplied to the room, ACH (h-1)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"perRecirculatedAir"}
                  label={"Percentage of air recirculated (%)"}
                />
              </div>{" "}
              <h1 className="title-font mb-4 mt-12 font-bold">
                Additional ventilation measures
              </h1>{" "}
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"numberPurifiers"}
                  label={"Number of air purifiers"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"CADRPurifier"}
                  label={"CADR air purifiers (m3/h)"}
                />
              </div>
            </form>
            <div className="flex content-center my-4">
              <Link to={`/help/filter`}>
                <p className="py-2 mr-2 uppercase tracking-wide text-xs font-bold">
                  Select a filter for your air conditioning system:{" "}
                  <sup>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </sup>
                </p>
              </Link>
              <DropDown
                selected={this.state["filterType"]}
                listItems={this.listFilters}
                setValue={this.handleDroDowFilter}
                width={"w-32"}
              />
            </div>
            <div className="flex items-center w-full my-1">
              <Link to={`/help/effectiveness`}>
                <p className="flex-1 uppercase tracking-wide text-xs font-bold">
                  Effectiveness control measures
                  <sup>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </sup>
                </p>
              </Link>
              <RateControlMeasures
                value={
                  this.state.controlMeasure +
                  this.state.outdoorAirACH +
                  this.state.controlMeasurePurifiers
                }
              />
            </div>
            <form className="w-full">
              <h1 className="title-font mb-4 mt-12 font-bold">
                Information about the event
              </h1>
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"durationEvent"}
                  label={"Duration of the event (minutes)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"repetitionEvent"}
                  label={"Repetitions of the event (times)"}
                />
              </div>
            </form>
            <h1 className="title-font mb-4 mt-12 font-bold">
              Information about peoples' activity in the room
            </h1>
            <div className="flex content-center my-4">
              <Link to={`/help/activity`}>
                <p className="py-2 mr-2 uppercase tracking-wide text-xs font-bold">
                  Select an activity:{" "}
                  <sup>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </sup>
                </p>
              </Link>
              <DropDown
                selected={this.state["activity"]}
                listItems={this.listActivities}
                setValue={this.handleDroDowAct}
                width={"w-56"}
              />
            </div>
            <div className="flex content-center my-4">
              <Link to={`/help/ageGroup`}>
                <p className="py-2 mr-2 uppercase tracking-wide text-xs font-bold">
                  Select age group:{" "}
                  <sup>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </sup>
                </p>
              </Link>
              <DropDown
                selected={this.state["ageGroup"]}
                listItems={this.ageGroups}
                setValue={this.handleDroDowAge}
                width={"w-24"}
              />
            </div>
            <div className="flex content-center my-4">
              <Link to={`/help/mask`}>
                <p className="py-2 mr-2 uppercase tracking-wide text-xs font-bold">
                  Select mask type:{" "}
                  <sup>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </sup>
                </p>
              </Link>
              <DropDown
                selected={this.state["maskType"]}
                listItems={this.maskTypes}
                setValue={this.handleDroDowMask}
                width={"w-34"}
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
                  label={"Number people infected"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"fractionImmune"}
                  label={"Percentage people immune (%)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"perPeopleMask"}
                  label={"Percentage people with mask (%)"}
                />
              </div>
              <h1 className="title-font mb-4 mt-12 font-bold">
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
                  id={"percentageHospitalizationRate"}
                  label={"Hospitalization rate (%)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"percentageDeathRate"}
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
