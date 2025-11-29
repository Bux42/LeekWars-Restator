// show list of each stat with image, callback onclick to select specific stat
import React from "react";
import { statFilterStyles } from "./StatFilter.styles";
import { EntityStats } from "@/types/EntityStats";
import { EMPTY_STATS } from "@/constants/Stats.constants";
import { IFilterStat } from "@/types/FilterStat";
import { on } from "events";

interface StatFilterProps {
  allFilterStats: IFilterStat[];
  onSelectStat: (stat: IFilterStat) => void;
}
export default function StatFilter({
  allFilterStats,
  onSelectStat,
}: StatFilterProps) {
  const [selectedStats, setSelectedStats] = React.useState<IFilterStat[]>([]);

  const onStatClick = (stat: IFilterStat) => {
    let updatedSelectedStats: IFilterStat[];
    if (selectedStats.includes(stat)) {
      updatedSelectedStats = selectedStats.filter(
        (key: IFilterStat) => key !== stat
      ) as unknown as IFilterStat[];
    } else {
      updatedSelectedStats = [
        ...(selectedStats as unknown as IFilterStat[]),
        stat,
      ] as unknown as IFilterStat[];
    }
    setSelectedStats(updatedSelectedStats);
    onSelectStat(stat);
  };

  return (
    <div style={statFilterStyles.container}>
      {allFilterStats.map((filterStat) => (
        <div
          key={filterStat.key}
          style={statFilterStyles.statItem(selectedStats.includes(filterStat))}
          onClick={() => onStatClick(filterStat)}
        >
          <img
            src={`/assets/images/stats/${filterStat.key}.png`}
            alt={filterStat.key}
            style={statFilterStyles.statIcon}
          />
        </div>
      ))}
    </div>
  );
}
