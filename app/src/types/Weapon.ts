// Effect interface for both effects and passive_effects arrays
export interface WeaponEffect {
  id: number;
  modifiers: number;
  targets: number;
  turns: number;
  type: number;
  value1: number;
  value2: number;
}

// Main weapon interface
export interface Weapon {
  area: number;
  cost: number;
  effects: WeaponEffect[];
  forgotten: boolean;
  id: number;
  item: number;
  launch_type: number;
  level: number;
  los: boolean;
  max_range: number;
  max_uses: number;
  min_range: number;
  name: string;
  passive_effects: WeaponEffect[];
  template: number;
}
