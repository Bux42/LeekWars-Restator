import { Castable } from "@/types/Castable";
import { Chip } from "@/types/Chip";
import { Weapon } from "@/types/Weapon";

export const chipToCastable = (chip: Chip): Castable => {
  return {
    area: chip.area,
    cost: chip.cost,
    effects: chip.effects,
    id: chip.id,
    launch_type: chip.launch_type,
    level: chip.level,
    los: chip.los,
    max_range: chip.max_range,
    max_uses: chip.max_uses,
    min_range: chip.min_range,
    name: chip.name,
    template: chip.template,
    type: "chip",
  };
};

export const weaponToCastable = (weapon: Weapon): Castable => {
  return {
    area: weapon.area,
    cost: weapon.cost,
    effects: weapon.effects,
    id: weapon.id,
    launch_type: weapon.launch_type,
    level: weapon.level,
    los: weapon.los,
    max_range: weapon.max_range,
    max_uses: weapon.max_uses,
    min_range: weapon.min_range,
    name: weapon.name,
    template: weapon.template,
    type: "weapon",
  };
};
