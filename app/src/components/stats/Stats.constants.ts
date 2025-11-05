export const CAPITAL_TO_CHARACTERISTIC = {
  life: [
    { min: 0, max: 1000, cost: 1, gain: 4 },
    { min: 1000, max: 2000, cost: 1, gain: 3 },
    { min: 2000, max: undefined, cost: 1, gain: 3 },
  ],
  strength: [
    { min: 0, max: 200, cost: 1, gain: 2 },
    { min: 200, max: 400, cost: 1, gain: 1 },
    { min: 400, max: 600, cost: 2, gain: 1 },
    { min: 600, max: undefined, cost: 3, gain: 1 },
  ],
};
