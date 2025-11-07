// Effect interface for chip effects (similar to weapons but might have different structure)
export interface ChipEffect {
  id: number;
  modifiers: number;
  targets: number;
  turns: number;
  type: number;
  value1: number;
  value2: number;
}

// Main chip interface
export interface Chip {
  area: number;
  cooldown: number;
  cost: number;
  effects: ChipEffect[];
  id: number;
  initial_cooldown: number;
  launch_type: number;
  level: number;
  los: boolean;
  max_range: number;
  max_uses: number;
  min_range: number;
  name: string;
  team_cooldown: boolean;
  template: number;
  type: number;
}
