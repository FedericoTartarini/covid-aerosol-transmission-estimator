export function volume(width, length, height) {
  return width * length * height;
}

export function outdoorAirACH(roomACH, ratioRecirculatedAir) {
  return roomACH * (1 - ratioRecirculatedAir);
}

export function controlMeasure(
  roomACH,
  ratioRecirculatedAir,
  filterEfficiency
) {
  return roomACH * ratioRecirculatedAir * filterEfficiency;
}

export function area(width, length) {
  return width * length;
}

export function firstOrderLoss(
  outdoorAirACH,
  decayRateVirus,
  controlMeasure,
  depositionSurface
) {
  return outdoorAirACH + decayRateVirus + controlMeasure + depositionSurface;
}

export function ventilationRate(volume, outdoorAirACH, controlMeasure, people) {
  return (volume * (outdoorAirACH + controlMeasure) * 1000) / 3600 / people;
}

export function netEmissionRate(
  quanta,
  exhalationMaskEff,
  perPeopleMask,
  numberInfected
) {
  return quanta * (1 - exhalationMaskEff * perPeopleMask) * numberInfected;
}

export function avgQuantaConcentration(
  netEmissionRate,
  firstOrderLoss,
  volume,
  durationEvent
) {
  return (
    (netEmissionRate / firstOrderLoss / volume) *
    (1 -
      (1 / firstOrderLoss / (durationEvent / 60)) *
        (1 - Math.exp(-firstOrderLoss * (durationEvent / 60))))
  );
}

export function quantaInhaledPerson(
  avgQuantaConcentration,
  breathingRate,
  durationEvent,
  inhalationMaskEff,
  perPeopleMask
) {
  return (
    avgQuantaConcentration *
    breathingRate *
    (durationEvent / 60) *
    (1 - inhalationMaskEff * perPeopleMask)
  );
}

export function pCondOneEventInfection(quantaInhaledPerson) {
  return (1 - Math.exp(-quantaInhaledPerson)) * 100;
}

export function pAbsOneEventInfection(
  pCondOneEventInfection,
  pBeingInfected,
  susceptiblePeople
) {
  return (
    (1 -
      Math.pow(
        1 - ((pCondOneEventInfection / 100) * pBeingInfected) / 100,
        susceptiblePeople
      )) *
    100
  );
}

export function pAbsMultipleEventInfection(
  pAbsOneEventInfection,
  repetitionEvent
) {
  return (1 - Math.pow(1 - pAbsOneEventInfection / 100, repetitionEvent)) * 100;
}

export function probHospitalization(
  pCondOneEventInfection,
  percentageHospitalizationRate
) {
  return (
    (pCondOneEventInfection * percentageHospitalizationRate) /
    100
  ).toFixed(4);
}

export function probDeath(probInfection, percentageDeathRate) {
  return ((probInfection * percentageDeathRate) / 100).toFixed(4);
}

export function ratioCarTravelRisk(probDeath, repetitionEvents) {
  return (probDeath / 100 / (0.0000006 * repetitionEvents)).toFixed(1);
}
