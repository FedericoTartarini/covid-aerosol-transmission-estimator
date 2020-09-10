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
} from "./Utils";

test("calculates volume", () => {
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

test("prob conditional one event hospitalization", () => {
  expect(Number(pCondOneEventHospitalization(0.6742, 0.2))).toBe(0.1348);
});
