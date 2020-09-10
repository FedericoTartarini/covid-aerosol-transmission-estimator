export function volume(width, length, height) {
  return width * length * height;
}

export function area(width, length) {
  return width * length;
}

export function firstOrderLoss(
  ventilationOutAir,
  decayRateVirus,
  controlMeasure,
  depositionSurface
) {
  return (
    ventilationOutAir + decayRateVirus + controlMeasure + depositionSurface
  );
}

export function ventilationRate(
  volume,
  ventilationOutAir,
  controlMeasure,
  people
) {
  return (volume * (ventilationOutAir + controlMeasure) * 1000) / 3600 / people;
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
  return ((1 - Math.exp(-quantaInhaledPerson)) * 100).toFixed(4);
}

export function pCondOneEventHospitalization(
  pCondOneEventInfection,
  hospitalizationRate
) {
  return (pCondOneEventInfection * hospitalizationRate).toFixed(4);
}
