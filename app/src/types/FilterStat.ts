import { EntityStats } from "./EntityStats";

export interface IFilterStat {
  key: keyof EntityStats;
  value: number;
}
