import { IFilterStat } from "@/types/FilterStat";

export const COMPONENTS_STAT_FILTERS: IFilterStat[] = [
  { key: "life", value: 0 },
  { key: "strength", value: 0 },
  { key: "wisdom", value: 0 },
  { key: "agility", value: 0 },
  { key: "resistance", value: 0 },
  { key: "science", value: 0 },
  { key: "magic", value: 0 },
  { key: "frequency", value: 0 },
  { key: "cores", value: 0 },
  { key: "ram", value: 0 },
  { key: "tp", value: 0 },
  { key: "mp", value: 0 },
];

export const WEAPONS_STAT_FILTERS: IFilterStat[] = [
  { key: "strength", value: 1 },
  { key: "wisdom", value: 2 },
  { key: "science", value: 30 },
  { key: "magic", value: 6 },
];

export const CHIPS_STAT_FILTERS: IFilterStat[] = [
  { key: "strength", value: 1 },
  { key: "wisdom", value: 2 },
  { key: "science", value: 30 },
  { key: "magic", value: 6 },
  { key: "resistance", value: 9 },
  { key: "mp", value: 3 },
  { key: "tp", value: 3 },
];
