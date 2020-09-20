import {
  area,
  avgQuantaConcentration,
  controlMeasure,
  firstOrderLoss,
  netEmissionRate,
  outdoorAirACH,
  pCondOneEventInfection,
  quantaInhaledPerson,
  ventilationRate,
  volume,
  ratioCarTravelRisk,
  pAbsOneEventInfection,
  pAbsMultipleEventInfection,
  calculateOutputs,
  probHospitalization,
  probDeath,
} from "./Utils";

test("calculates volume", () => {
  expect(volume(25, 20, 10)).toBe(5000);
});

test("calculates outdoor ACH", () => {
  expect(Number(outdoorAirACH(10, 0.7).toFixed(2))).toBe(3);
});

test("calculates control measure ACH", () => {
  expect(controlMeasure(10, 0.7, 0.5)).toBe(3.5);
});

test("calculates ACH outdoor air", () => {
  expect(volume(25, 20, 10)).toBe(5000);
});

test("calculates area", () => {
  expect(area(25, 20)).toBe(500);
});

test("first order loss", () => {
  expect(firstOrderLoss(3, 0.62, 0.3, 0, 0)).toBe(3.92);
});

test("ventilation rate", () => {
  expect(Number(ventilationRate(142, 3, 0, 10).toFixed(1))).toBe(11.8);
});

test("net emission rate", () => {
  expect(Number(netEmissionRate(25, 0.5, 1, 1).toFixed(1))).toBe(12.5);
});

test("average quanta concentration", () => {
  expect(Number(avgQuantaConcentration(12.5, 3.92, 142, 50).toFixed(2))).toBe(
    0.02
  );
});

test("quanta inhaled person", () => {
  expect(
    Number(quantaInhaledPerson(0.0175721, 0.66, 50, 0.3, 1).toFixed(5))
  ).toBe(0.00677);
});

test("prob conditional one event infection", () => {
  expect(Number(pCondOneEventInfection(0.006765242))).toBe(0.6742409269006155);
});

test("prob absolute one event infection", () => {
  expect(Number(pAbsOneEventInfection(0.0235, 0.2, 9))).toBe(
    0.00042299920478550135
  );
  expect(Number(pAbsOneEventInfection(0.47623, 0.2, 9))).toBe(
    0.00857181342246438
  );
});

test("prob absolute multiple event infection", () => {
  expect(Number(pAbsMultipleEventInfection(0.00857181342246438, 180))).toBe(
    1.53114940934993
  );
});

test("prob conditional one event hospitalization", () => {
  expect(Number(probHospitalization(99.93708, 40))).toBe(39.974832);
});

test("prob death", () => {
  expect(Number(probDeath(99.93, 10))).toBe(9.993);
});

test("comparison with car travel", () => {
  expect(Number(ratioCarTravelRisk(0.021609, 180))).toBe(2);
  expect(Number(ratioCarTravelRisk(0.000121, 1))).toBe(2);
});

test("full scenario", () => {
  let inputs = {
    length: 25 * 0.305,
    width: 20 * 0.305,
    height: 10 * 0.305,
    pressure: 0.95,
    temperature: 20,
    relativeHumidity: 50,
    co2Outdoors: 415,
    durationEvent: 50,
    repetitionEvent: 180,
    roomACH: 10,
    perRecirculatedAir: 70,
    outdoorAirACH: 3,
    decayRateVirus: 0.62,
    depositionSurface: 0.3,
    filterType: "No filter",
    filterEfficiency: 0,
    numberPurifiers: 0,
    CADRPurifier: 0,
    controlMeasurePurifiers: 1,
    activity: "Quiet working, Seated",
    ageGroup: "16-20",
    people: 10,
    numberInfected: 1,
    fractionImmune: 0,
    breathingRate: 0.0086 * 60,
    quanta: 25,
    perPeopleMask: 100,
    maskType: "Cloth mask",
    exhalationMaskEff: 0.5,
    inhalationMaskEff: 0.3,
    pBeingInfected: 0.2,
    percentageHospitalizationRate: 20,
    percentageDeathRate: 1,
  };

  let outputs = calculateOutputs(inputs);

  expect(Number(outputs.volume.toFixed(0))).toBe(142);
  expect(Number(outputs.area.toFixed(0))).toBe(47);
  expect(Number(outputs.controlMeasure.toFixed(0))).toBe(0);
  expect(Number(outputs.controlMeasurePurifiers.toFixed(2))).toBe(0);
  expect(Number(outputs.firstOrderLoss.toFixed(2))).toBe(3.92);
  expect(Number(outputs.susceptiblePeople.toFixed(0))).toBe(9);
  expect(Number(outputs.netEmissionRate.toFixed(2))).toBe(12.5);
  expect(Number(outputs.avgQuantaConcentration.toFixed(5))).toBe(0.01586);
  expect(Number(outputs.quantaInhaledPerson.toFixed(5))).toBe(0.00477);
  expect(Number(outputs.pCondOneEventInfection)).toBe(0.48);
  expect(Number(outputs.pCondOneEventHospitalization)).toBe(0.1);
  expect(Number(outputs.pCondOneEventDeath)).toBe(0);
  expect(Number(outputs.pCondOneEventCarTravel)).toBe(79.4);
  expect(Number(outputs.pAbsOneEventInfection)).toBe(0.01);
  expect(Number(outputs.pAbsOneEventHospitalization)).toBe(0);
  expect(Number(outputs.pAbsOneEventDeath)).toBe(0);
  expect(Number(outputs.pAbsOneEventCarTravel)).toBe(1.4);
  expect(Number(outputs.pAbsMultipleEventInfection)).toBe(1.53);
  expect(Number(outputs.pAbsMultipleEventHospitalization)).toBe(0.31);
  expect(Number(outputs.pAbsMultipleEventDeath)).toBe(0.02);
  expect(Number(outputs.pAbsMultipleEventCarTravel)).toBe(1.4);

  inputs = {
    length: 10 * 0.305,
    width: 10 * 0.305,
    height: 3 * 0.305,
    pressure: 0.95,
    temperature: 20,
    relativeHumidity: 50,
    co2Outdoors: 415,
    durationEvent: 100,
    repetitionEvent: 300,
    roomACH: 10,
    perRecirculatedAir: 90,
    outdoorAirACH: 3,
    decayRateVirus: 0.62,
    depositionSurface: 0.3,
    filterType: "No filter",
    filterEfficiency: 0,
    numberPurifiers: 0,
    CADRPurifier: 0,
    activity: "Quiet working, Seated",
    ageGroup: "16-20",
    people: 30,
    numberInfected: 4,
    fractionImmune: 0,
    breathingRate: 0.7,
    quanta: 40,
    perPeopleMask: 20,
    maskType: "Cloth mask",
    exhalationMaskEff: 0.2,
    inhalationMaskEff: 0.2,
    pBeingInfected: 0.2,
    percentageHospitalizationRate: 40,
    percentageDeathRate: 10,
  };

  outputs = calculateOutputs(inputs);

  expect(Number(outputs.pCondOneEventInfection)).toBe(99.94);
  expect(Number(outputs.pCondOneEventHospitalization)).toBe(39.97);
  expect(Number(outputs.pCondOneEventDeath)).toBe(9.99);
  expect(Number(outputs.pCondOneEventCarTravel)).toBe(166561.8);
  expect(Number(outputs.pAbsOneEventInfection)).toBe(5.07);
  expect(Number(outputs.pAbsOneEventHospitalization)).toBe(2.03);
  expect(Number(outputs.pAbsOneEventDeath)).toBe(0.51);
  expect(Number(outputs.pAbsOneEventCarTravel)).toBe(8448.2);
  expect(Number(outputs.pAbsMultipleEventInfection)).toBe(100);
  expect(Number(outputs.pAbsMultipleEventHospitalization)).toBe(40);
  expect(Number(outputs.pAbsMultipleEventDeath)).toBe(10);
});
