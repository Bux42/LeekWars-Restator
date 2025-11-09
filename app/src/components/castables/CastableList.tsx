import { EntityStats } from "@/types/EntityStats";
import CastableCard from "./castable-card/CastableCard";
import { castableListStyles } from "./CastableList.styles";
import { Castable } from "@/types/Castable";

export default function CastableList({
  totalStats,
  castables,
  selectedCastables,
  onSelectCastable,
  onDeselectCastable,
}: {
  totalStats: EntityStats;
  castables: Castable[];
  selectedCastables: Castable[];
  onSelectCastable: (castable: Castable) => void;
  onDeselectCastable: (castableName: string) => void;
}) {
  return (
    <div
      style={castableListStyles.container}
      className="components-grid-scrollable"
    >
      <div style={castableListStyles.gridContainer}>
        {castables.map((castable: Castable) => (
          <CastableCard
            key={castable.id}
            castable={castable}
            totalStats={totalStats}
            onDeselectCastable={onDeselectCastable}
            onSelectCastable={onSelectCastable}
            selected={selectedCastables.some((s) => s.name === castable.name)}
          />
        ))}
      </div>
    </div>
  );
}
