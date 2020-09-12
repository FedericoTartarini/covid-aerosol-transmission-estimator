import React from "react";
import OutputField from "./OutputField";

function OutputsIndoor({ data }) {
  return (
    <div>
      <h1 className="title-font text-2xl mb-4 mt-12 font-bold">Outputs</h1>
      <h1 className="title-font mb-4 mt-4 font-bold">
        Conditional results for a person attending one event
      </h1>
      <div className="flex items-end flex-wrap -mx-3 mb-2">
        <OutputField
          id="pCondOneEventInfection"
          label={"Probability of infection (%)"}
          value={data.pCondOneEventInfection}
        />
        <OutputField
          id="pCondOneEventHospitalization"
          label={"Probability of hospitalization (%)"}
          value={data.pCondOneEventHospitalization}
        />
        <OutputField
          id="pCondOneEventDeath"
          label={"Probability of death (%)"}
          value={data.pCondOneEventDeath}
        />
        <OutputField
          id="pCondOneEventCarTravel"
          label={"Ratio to risk of car travel death (times higher)"}
          value={data.pCondOneEventCarTravel}
        />
      </div>
      <h1 className="title-font mb-4 mt-4 font-bold">
        Absolute results for a person attending one event
      </h1>
      <div className="flex items-end flex-wrap -mx-3 mb-2">
        <OutputField
          id="pAbsOneEventInfection"
          label={"Probability of infection (%)"}
          value={data.pAbsOneEventInfection}
        />
        <OutputField
          id="pAbsOneEventHospitalization"
          label={"Probability of hospitalization (%)"}
          value={data.pAbsOneEventHospitalization}
        />
        <OutputField
          id="pAbsOneEventDeath"
          label={"Probability of death (%)"}
          value={data.pAbsOneEventDeath}
        />
        <OutputField
          id="pAbsOneEventCarTravel"
          label={"Ratio to risk of car travel death (times higher)"}
          value={data.pAbsOneEventCarTravel}
        />
      </div>
      <h1 className="title-font mb-4 mt-4 font-bold">
        Absolute results for a person attending multiple events
      </h1>
      <div className="flex items-end flex-wrap -mx-3 mb-2">
        <OutputField
          id="pAbsMultipleEventInfection"
          label={"Probability of infection (%)"}
          value={data.pAbsMultipleEventInfection}
        />
        <OutputField
          id="pAbsMultipleEventHospitalization"
          label={"Probability of hospitalization (%)"}
          value={data.pAbsMultipleEventHospitalization}
        />
        <OutputField
          id="pAbsMultipleEventDeath"
          label={"Probability of death (%)"}
          value={data.pAbsMultipleEventDeath}
        />
        <OutputField
          id="pAbsMultipleEventCarTravel"
          label={"Ratio to risk of car travel death (times higher)"}
          value={data.pAbsMultipleEventCarTravel}
        />
      </div>
    </div>
  );
}

export default OutputsIndoor;
