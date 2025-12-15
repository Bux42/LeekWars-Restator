export interface CastableEffectTargets {
  targetEnemies: boolean;
  targetAllies: boolean;
  targetCaster: boolean;
  targetNonSummons: boolean;
  targetSummons: boolean;
}

export interface CastableEffect extends CastableEffectTargets {
  name: string;
  min: number;
  max: number;
  minWithTurns?: number;
  maxWithTurns?: number;
  isPercentEffect?: boolean;
}
