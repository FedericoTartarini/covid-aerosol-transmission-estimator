import React from "react";
import OutputField from "./OutputField";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

function OutputsIndoor({ data }) {
  return (
    <div>
      <h1 className="title-font text-2xl mb-4 mt-12 font-bold">Outputs</h1>
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
          label={"Probability of infection (%)"}
          value={data.pAbsOneEventInfection}
        />
        <OutputField
          label={"Probability of hospitalization (%)"}
          value={data.pAbsOneEventHospitalization}
        />
        <OutputField
          label={"Probability of death (%)"}
          value={data.pAbsOneEventDeath}
        />
        <OutputField
          label={"Ratio to risk of car travel death (times higher)"}
          value={data.pAbsOneEventCarTravel}
        />
      </div>
      <Link to={"/help/absoluteMultipleEventsResults"}>
        <h1 className="title-font mb-4 mt-4 font-bold">
          Absolute results for a person attending multiple events{" "}
          <sup>
            <FontAwesomeIcon icon={faQuestionCircle} />
          </sup>
        </h1>
      </Link>
      <div className="flex items-end flex-wrap -mx-3 mb-2">
        <OutputField
          label={"Probability of infection (%)"}
          value={data.pAbsMultipleEventInfection}
        />
        <OutputField
          label={"Probability of hospitalization (%)"}
          value={data.pAbsMultipleEventHospitalization}
        />
        <OutputField
          label={"Probability of death (%)"}
          value={data.pAbsMultipleEventDeath}
        />
        <OutputField
          label={"Ratio to risk of car travel death (times higher)"}
          value={data.pAbsMultipleEventCarTravel}
        />
      </div>
    </div>
  );
}

export default OutputsIndoor;
