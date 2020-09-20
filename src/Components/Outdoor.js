import React from "react";
import {
  avgQuantaConcentration,
  firstOrderLoss,
  netEmissionRate,
  pAbsOneEventInfection,
  pCondOneEventInfection,
  probDeath,
  probHospitalization,
  quantaInhaledPerson,
  ratioCarTravelRisk,
} from "../Functions/Utils";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";
import OutputField from "./OutputField";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { reactLocalStorage } from "reactjs-localstorage";

class Outdoor extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getSavedInputsOutdoor();

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

    this.quanta_resp_data = require("../Data/quanta_resp_data.json");

    let arrayAge = [];
    Object.keys(this.quanta_resp_data).forEach(function (key) {
      arrayAge.push(key);
    });
    this.ageGroups = arrayAge;

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDroDowAct = this.handleDroDowAct.bind(this);
    this.handleDroDowAge = this.handleDroDowAge.bind(this);
  }

  calculateOutputsSaveState() {
    const updatedState = this.calculateOutputsOutdoor(this.state);

    console.log(updatedState);

    reactLocalStorage.setObject("stateOutdoor", updatedState);

    this.setState(updatedState);
  }

  getSavedInputsOutdoor() {
    const state = reactLocalStorage.getObject("stateOutdoor");

    console.log(state);

    const defaultInput = {
      // INPUTS
      // info environment
      surfaceArea: 167.445,
      windSpeed: 5,
      // info event
      durationEvent: 150,
      // info people
      activity: "Speaking loudly, moderate activity",
      numberInfected: 1,
      susceptiblePeople: 60,
      ageGroup: "61-70",
      perPeopleMask: 0,
      // CALCULATED AND ESTIMATED inputs
      // info event
      height: 4.832, // todo write about this assumption
      decayRateVirus: 9.3, // todo write about this assumption
      depositionSurface: 0.3, // todo write about this assumption
      controlMeasure: 0, // todo write about this assumption
      controlMeasurePurifiers: 0,
      // info people
      breathingRate: 1.1,
      quanta: 970,
      maskType: "No mask",
      exhalationMaskEff: 0,
      inhalationMaskEff: 0,
      // covid parameters
      pBeingInfected: 0.2,
      percentageHospitalizationRate: 20,
      percentageDeathRate: 1,
      // OUTPUTS
      volume: "",
      firstOrderLoss: "",
      netEmissionRate: "",
      avgQuantaConcentration: "",
      quantaInhaledPerson: "",
      pCondOneEventInfection: "",
      casesArising: "",
      pAbsOneEventInfection: "",
      pAbsOneEventHospitalization: "",
      pAbsOneEventDeath: "",
      pAbsOneEventCarTravel: "",
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

  handleInputChange(evt) {
    let tmp = this.state;
    tmp[evt.target.name] = evt.target.value;

    this.setState(tmp);

    this.calculateOutputsSaveState();
  }

  calculateOutputsOutdoor() {
    let data = this.state;
    data.volume = data.surfaceArea * data.height;
    data.outdoorAirACH =
      (data.windSpeed / 3.6 / Math.sqrt(data.surfaceArea)) * 3600;
    data.firstOrderLoss = firstOrderLoss(
      data.outdoorAirACH,
      data.decayRateVirus,
      data.controlMeasure,
      data.depositionSurface,
      data.controlMeasurePurifiers
    );
    data.netEmissionRate = netEmissionRate(
      data.quanta,
      data.exhalationMaskEff,
      data.perPeopleMask / 100,
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
      data.perPeopleMask / 100
    );
    data.pCondOneEventInfection = pCondOneEventInfection(
      data.quantaInhaledPerson
    );
    data.casesArising = (
      (data.pCondOneEventInfection / 100) *
      data.susceptiblePeople
    ).toFixed(2);
    data.pAbsOneEventInfection = pAbsOneEventInfection(
      data.pCondOneEventInfection,
      data.pBeingInfected,
      data.susceptiblePeople
    );
    data.pAbsOneEventHospitalization = probHospitalization(
      data.pAbsOneEventInfection,
      data.percentageHospitalizationRate
    );
    data.pAbsOneEventDeath = probDeath(
      data.pAbsOneEventInfection,
      data.percentageDeathRate
    );
    data.pAbsOneEventCarTravel = ratioCarTravelRisk(data.pAbsOneEventDeath, 1);

    data.pCondOneEventInfection = data.pCondOneEventInfection.toFixed(4);
    data.pAbsOneEventInfection = data.pAbsOneEventInfection.toFixed(2);
    data.pAbsOneEventHospitalization = data.pAbsOneEventHospitalization.toFixed(
      2
    );
    data.pAbsOneEventDeath = data.pAbsOneEventDeath.toFixed(2);

    return data;
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

  render() {
    return (
      <div>
        <Helmet>
          <title>Outdoor</title>
          <meta name="description" content="content" />
        </Helmet>
        <section className="container mx-auto">
          <div className="lg:mx-12 my-4 lg:my-12">
            <h1 className="title-font text-2xl mb-4 font-bold">
              Outdoor - Inputs
            </h1>
            <form className="w-full">
              <h1 className="title-font mb-4 font-bold">
                Information about the environment
              </h1>{" "}
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"surfaceArea"}
                  label={"Area of the activity space (m2)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"windSpeed"}
                  label={"Wind Speed (km/h)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"numberInfected"}
                  label={"Infected people"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"susceptiblePeople"}
                  label={"Susceptible people"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"durationEvent"}
                  label={"Duration event (minutes)"}
                />
                <InputField
                  handleChange={this.handleInputChange}
                  data={this.state}
                  id={"perPeopleMask"}
                  label={"Percentage people with mask (%)"}
                />
              </div>
            </form>
            <h1 className="title-font mb-4 mt-12 font-bold">
              Information about peoples' activity outdoors
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
            <div>
              <h1 className="title-font text-2xl mb-4 mt-12 font-bold">
                Outputs
              </h1>
              <Link to={"/help/absoluteOneEventResults"}>
                <h1 className="title-font mb-4 mt-4 font-bold">
                  Absolute results for a person attending one event{" "}
                  <sup>
                    <FontAwesomeIcon icon={faQuestionCircle} />
                  </sup>
                </h1>
              </Link>
              <div className="flex items-end flex-wrap -mx-3 mb-2">
                <OutputField
                  id="pAbsOneEventInfection"
                  label={"Probability of infection (%)"}
                  value={this.state.pAbsOneEventInfection}
                />
                <OutputField
                  id="pAbsOneEventHospitalization"
                  label={"Probability of hospitalization (%)"}
                  value={this.state.pAbsOneEventHospitalization}
                />
                <OutputField
                  id="pAbsOneEventDeath"
                  label={"Probability of death (%)"}
                  value={this.state.pAbsOneEventDeath}
                />
                <OutputField
                  id="pAbsOneEventCarTravel"
                  label={"Ratio to risk of car travel death (times higher)"}
                  value={this.state.pAbsOneEventCarTravel}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Outdoor;
