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
  depositionSurface,
  controlMeasurePurifiers
) {
  return (
    outdoorAirACH +
    decayRateVirus +
    controlMeasure +
    depositionSurface +
    controlMeasurePurifiers
  );
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
  return (pCondOneEventInfection * percentageHospitalizationRate) / 100;
}

export function probDeath(probInfection, percentageDeathRate) {
  return (probInfection * percentageDeathRate) / 100;
}

export function ratioCarTravelRisk(probDeath, repetitionEvents) {
  return (probDeath / 100 / (0.0000006 * repetitionEvents)).toFixed(1);
}

export function calculateOutputs(data) {
  data.volume = volume(data.width, data.length, data.height);
  data.area = area(data.width, data.length);
  data.outdoorAirACH = outdoorAirACH(
    data.roomACH,
    data.perRecirculatedAir / 100
  );
  data.controlMeasurePurifiers =
    (data.numberPurifiers * data.CADRPurifier) / data.volume;
  data.controlMeasure = controlMeasure(
    data.roomACH,
    data.perRecirculatedAir / 100,
    data.filterEfficiency
  );
  data.firstOrderLoss = firstOrderLoss(
    data.outdoorAirACH,
    data.decayRateVirus,
    data.controlMeasure,
    data.depositionSurface,
    data.controlMeasurePurifiers
  );
  data.ventilationRate = ventilationRate(
    data.volume,
    data.outdoorAirACH,
    data.controlMeasure,
    data.people
  );
  data.susceptiblePeople =
    (data.people - data.numberInfected) * (1 - data.fractionImmune / 100);
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
  data.pCondOneEventHospitalization = probHospitalization(
    data.pCondOneEventInfection,
    data.percentageHospitalizationRate
  );
  data.pCondOneEventDeath = probDeath(
    data.pCondOneEventInfection,
    data.percentageDeathRate
  );
  data.pCondOneEventCarTravel = ratioCarTravelRisk(data.pCondOneEventDeath, 1);
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
  data.pAbsMultipleEventInfection = pAbsMultipleEventInfection(
    data.pAbsOneEventInfection,
    data.repetitionEvent
  );
  data.pAbsMultipleEventHospitalization = probHospitalization(
    data.pAbsMultipleEventInfection,
    data.percentageHospitalizationRate
  );
  data.pAbsMultipleEventDeath = probDeath(
    data.pAbsMultipleEventInfection,
    data.percentageDeathRate
  );
  data.pAbsMultipleEventCarTravel = ratioCarTravelRisk(
    data.pAbsMultipleEventDeath,
    data.repetitionEvent
  );
  data.pCondOneEventInfection = data.pCondOneEventInfection.toFixed(2);
  data.pCondOneEventHospitalization = data.pCondOneEventHospitalization.toFixed(
    2
  );
  data.pCondOneEventDeath = data.pCondOneEventDeath.toFixed(2);
  data.pAbsOneEventInfection = data.pAbsOneEventInfection.toFixed(2);
  data.pAbsOneEventHospitalization = data.pAbsOneEventHospitalization.toFixed(
    2
  );
  data.pAbsOneEventDeath = data.pAbsOneEventDeath.toFixed(2);
  data.pAbsMultipleEventInfection = data.pAbsMultipleEventInfection.toFixed(2);
  data.pAbsMultipleEventHospitalization = data.pAbsMultipleEventHospitalization.toFixed(
    2
  );
  data.pAbsMultipleEventDeath = data.pAbsMultipleEventDeath.toFixed(2);

  return data;
}
