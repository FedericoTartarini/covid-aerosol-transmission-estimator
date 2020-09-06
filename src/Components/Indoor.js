import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import InputField from "./InputField";
import DropDown from "./DropDown";
import OutputsIndoor from "./OutputsIndoor";

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
      breathingRate: 0.0086 * 60, // todo estimate this value from tables
      quanta: 25, // todo estimate this value from tables
      // info covid
      hospitalizationRate: 0.2, // todo estimate this value from tables
      deathRate: 0.01, // todo estimate this value from tables
      // OUTPUTS
      area: 47,
      volume: 142,
      firstOrderLoss: 3.92,
      netEmissionRate: 12.5,
      avgQuantaConcentration: 0.01585,
      quantaInhaledPerson: 0.00477,
      pCondOneEventInfection: 0.4762,
      pCondOneEventHospitalization: 0.0952,
      pCondOneEventDeath: 0.0048,
      pCondOneEventCarTravel: 79.4,
      pAbsOneEventInfection: 0.0086,
      pAbsOneEventHospitalization: 0.0017,
      pAbsOneEventDeath: 0.0001,
      pAbsOneEventCarTravel: 1.4,
      pAbsMultipleEventInfection: 1.5311,
      pAbsMultipleEventHospitalization: 0.3062,
      pAbsMultipleEventDeath: 0.0153,
      pAbsMultipleEventCarTravel: 1.4,
    };
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

    this.ageGroups = [
      "16 - 20",
      "21 - 30",
      "31 - 40",
      "41 - 50",
      "51 - 60",
      "61 - 70",
      "71 - 80",
      "80 and above",
    ];

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDroDowAct = this.handleDroDowAct.bind(this);
    this.handleDroDowAge = this.handleDroDowAge.bind(this);
  }
  // let cases = require("../Data/lut_data.json");

  handleInputChange(evt) {
    let tmp = this.state;
    tmp[evt.target.name] = evt.target.value;

    tmp.volume = tmp.width * tmp.length * tmp.height;
    tmp.area = tmp.width * tmp.length;
    tmp.areaPerPerson = tmp.area / tmp.people;
    tmp.peoplePerArea = tmp.people / tmp.area;
    tmp.volumePerPerson = tmp.volume / tmp.people;
    tmp.firstOrderLoss =
      tmp.ventilationOutAir +
      tmp.decayRateVirus +
      tmp.controlMeasure +
      tmp.depositionSurface;
    tmp.ventilationRate =
      (tmp.volume * (tmp.ventilationOutAir + tmp.controlMeasure) * 1000) /
      3600 /
      tmp.people;
    tmp.netEmissionRate =
      tmp.quanta *
      (1 - tmp.exhalationMaskEff * tmp.perPeopleMask) *
      tmp.numberInfected;
    tmp.avgQuantaConcentration =
      (tmp.netEmissionRate / tmp.firstOrderLoss / tmp.volume) *
      (1 -
        (1 / tmp.firstOrderLoss / (tmp.durationEvent / 60)) *
          (1 - Math.exp(-tmp.firstOrderLoss * (tmp.durationEvent / 60))));
    tmp.quantaInhaledPerson =
      tmp.avgQuantaConcentration *
      tmp.breathingRate *
      (tmp.durationEvent / 60) *
      (1 - tmp.inhalationMaskEff * tmp.perPeopleMask);
    tmp.pCondOneEventInfection = (
      (1 - Math.exp(-tmp.quantaInhaledPerson)) *
      100
    ).toFixed(4);
    tmp.pCondOneEventHospitalization = (
      tmp.pCondOneEventInfection * tmp.hospitalizationRate
    ).toFixed(4);
    tmp.pCondOneEventDeath = (
      tmp.pCondOneEventInfection * tmp.deathRate
    ).toFixed(4);
    tmp.pCondOneEventCarTravel = (
      tmp.pCondOneEventDeath /
      100 /
      0.0000006
    ).toFixed(1);
    tmp.pAbsOneEventInfection =
      (1 -
        Math.pow(
          1 - ((tmp.pCondOneEventInfection / 100) * tmp.pBeingInfected) / 100,
          tmp.susceptiblePeople
        )) *
      100;
    tmp.pAbsOneEventHospitalization = (
      tmp.pAbsOneEventInfection * tmp.hospitalizationRate
    ).toFixed(4);
    tmp.pAbsOneEventDeath = tmp.pAbsOneEventInfection * tmp.deathRate;
    tmp.pAbsOneEventCarTravel = (
      tmp.pAbsOneEventDeath /
      100 /
      0.0000006
    ).toFixed(1);
    tmp.pAbsMultipleEventInfection =
      (1 - Math.pow(1 - tmp.pAbsOneEventInfection / 100, tmp.repetitionEvent)) *
      100;
    tmp.pAbsMultipleEventHospitalization = (
      tmp.pAbsMultipleEventInfection * tmp.hospitalizationRate
    ).toFixed(4);
    tmp.pAbsMultipleEventDeath = tmp.pAbsMultipleEventInfection * tmp.deathRate;
    tmp.pAbsMultipleEventCarTravel = (
      tmp.pAbsMultipleEventDeath /
      100 /
      (0.0000006 * tmp.repetitionEvent)
    ).toFixed(1);
    tmp.pAbsOneEventInfection = tmp.pAbsOneEventInfection.toFixed(4);
    tmp.pAbsOneEventDeath = tmp.pAbsOneEventDeath.toFixed(4);
    tmp.pAbsMultipleEventDeath = tmp.pAbsMultipleEventDeath.toFixed(4);
    tmp.pAbsMultipleEventInfection = tmp.pAbsMultipleEventInfection.toFixed(4);

    this.setState({
      tmpInputData: tmp,
    });

    console.log(tmp.pAbsOneEventInfection);
  }

  handleDroDowAct(value) {
    this.setState({
      ...this.state,
      activity: value,
    });
  }

  handleDroDowAge(value) {
    this.setState({
      ...this.state,
      ageGroup: value,
    });
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
