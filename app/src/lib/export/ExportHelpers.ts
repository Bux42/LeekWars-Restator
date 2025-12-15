import { Castable } from "@/types/Castable";
import { EntityStats } from "@/types/EntityStats";

const buildToJson = (
  totalStats: EntityStats,
  selectedChips: Castable[],
  selectedWeapons: Castable[],
  level: number
): string => {
  const weaponIds = selectedWeapons.map((w) => w.item);

  const chipIds = selectedChips.map((c) => c.id);

  const obj = {
    level: level,
    life: totalStats.life,
    strength: totalStats.strength,
    wisdom: totalStats.wisdom,
    agility: totalStats.agility,
    resistance: totalStats.resistance,
    science: totalStats.science,
    magic: totalStats.magic,
    frequency: totalStats.frequency,
    cores: totalStats.cores,
    ram: totalStats.ram,
    tp: totalStats.tp,
    mp: totalStats.mp,
    weapons: weaponIds,
    chips: chipIds,
  };

  return JSON.stringify(obj, null, 2);
};

export const exportBuild = (
  totalStats: EntityStats,
  selectedChips: Castable[],
  selectedWeapons: Castable[],
  level: number
) => {
  const buildJson = buildToJson(
    totalStats,
    selectedChips,
    selectedWeapons,
    level
  );

  const blob = new Blob([buildJson], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `restator_build_level_${level}.json`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};
