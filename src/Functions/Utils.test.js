import {
  area,
  avgQuantaConcentration,
  controlMeasure,
  firstOrderLoss,
  netEmissionRate,
  outdoorAirACH,
  probHospitalization,
  pCondOneEventInfection,
  probDeath,
  quantaInhaledPerson,
  ventilationRate,
  volume,
  ratioCarTravelRisk,
  pAbsOneEventInfection,
  pAbsMultipleEventInfection,
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
  expect(firstOrderLoss(3, 0.62, 0.3, 0)).toBe(3.92);
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
  expect(Number(pCondOneEventInfection(0.006765242))).toBe(0.6742);
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
  expect(Number(probHospitalization(0.6742, 0.2))).toBe(0.1348);
});

test("prob death", () => {
  expect(Number(probDeath(0.6742, 0.01))).toBe(0.0067);
});

test("comparison with car travel", () => {
  expect(Number(ratioCarTravelRisk(0.021609, 180))).toBe(2);
  expect(Number(ratioCarTravelRisk(0.000121, 1))).toBe(2);
});
