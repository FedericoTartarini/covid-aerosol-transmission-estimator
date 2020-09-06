import React from "react";
import OutputField from "./OutputField";

function OutputsIndoor({ data }) {
  return (
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
          value={data.pOneEventInfection}
        />
        {/*<OutputField*/}
        {/*  label={"Probability of hospitalization (%)"}*/}
        {/*  value={data.pOneEventHospitalization}*/}
        {/*/>*/}
        {/*<OutputField*/}
        {/*  label={"Probability of death (%)"}*/}
        {/*  value={data.pOneEventDeath}*/}
        {/*/>*/}
        {/*<OutputField*/}
        {/*  label={"Ratio to risk of car travel death (times higher)"}*/}
        {/*  value={data.pOneEventCarTravel}*/}
        {/*/>*/}
      </div>
      {/*<h1 className="title-font mb-4 mt-4 font-bold text-gray-900">*/}
      {/*  Absolute results for a person attending multiple events*/}
      {/*</h1>*/}
      {/*<div className="flex items-end flex-wrap -mx-3 mb-2">*/}
      {/*  <OutputField*/}
      {/*    label={"Probability of infection (%)"}*/}
      {/*    value={data.pOneEventHospitalization}*/}
      {/*  />*/}
      {/*  <OutputField*/}
      {/*    label={"Probability of hospitalization (%)"}*/}
      {/*    value={data.pOneEventHospitalization}*/}
      {/*  />*/}
      {/*  <OutputField*/}
      {/*    label={"Probability of death (%)"}*/}
      {/*    value={data.pOneEventHospitalization}*/}
      {/*  />*/}
      {/*  <OutputField*/}
      {/*    label={"Ratio to risk of car travel death (times higher)"}*/}
      {/*    value={data.pOneEventHospitalization}*/}
      {/*  />*/}
      {/*</div>*/}
    </div>
  );
}

export default OutputsIndoor;
