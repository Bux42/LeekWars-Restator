// Castable effect interface for both weapons and chips
export interface CastableEffect {
  id: number;
  modifiers: number;
  targets: number;
  turns: number;
  type: number;
  value1: number;
  value2: number;
}

// Main castable interface
export interface Castable {
  area: number;
  cost: number;
  effects: CastableEffect[];
  id: number;
  launch_type: number;
  level: number;
  los: boolean;
  max_range: number;
  max_uses: number;
  min_range: number;
  name: string;
  template: number;
  type: CastableType;
  item?: number; // For weapons, refers to the weapon ID
}

export type CastableType = "weapon" | "chip";
