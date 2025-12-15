import {
  EffectIdToStatMap,
  TYPE_RELATIVE_SHIELD,
} from "@/constants/Effects.constants";
import { CastableEffect, CastableEffectTargets } from "@/types/CastableEffect";
import { EntityStats } from "@/types/EntityStats";

export const calculateCastableEffect = (
  totalStats: EntityStats,
  effectType: number,
  effectId: number,
  effectMin: number,
  effectMax: number,
  targetMask: number,
  turns: number = 0
): CastableEffect | undefined => {
  const statKey = EffectIdToStatMap[effectType];
  const value = totalStats[statKey] || 0;

  const effectTargets: CastableEffectTargets = {
    targetEnemies: Boolean(targetMask & 1),
    targetAllies: Boolean(targetMask & (1 << 1)),
    targetCaster: Boolean(targetMask & (1 << 2)),
    targetNonSummons: Boolean(targetMask & (1 << 3)),
    targetSummons: Boolean(targetMask & (1 << 4)),
  };
  //   console.log(statKey);

  if (statKey === undefined) {
    console.warn(`No stat mapping found for effect type ${effectType}`);
    return undefined;
  }

  if (statKey === "strength") {
    // DegatsDeBase * (1 + Force / 100)
    return {
      ...effectTargets,
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
    };
  } else if (statKey === "magic") {
    // DegatsDePoisonFinaux = DegatsDePoisonDeBase * (1 + Magie / 100)
    return {
      ...effectTargets,
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
      minWithTurns: Math.floor(effectMin * (1 + value / 100)) * turns,
    };
  } else if (statKey === "wisdom") {
    //FinalHeal = BaseHeal * (1 + Wisdom / 100)
    return {
      ...effectTargets,
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
    };
  } else if (statKey === "science") {
    // Nova damage calculation
    return {
      ...effectTargets,
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
    };
  } else if (statKey === "resistance") {
    if (effectType === TYPE_RELATIVE_SHIELD) {
      return {
        ...effectTargets,
        name: statKey,
        min: Math.round(effectMin * (1 + value / 100)),
        max: Math.round(effectMax * (1 + value / 100)),
        isPercentEffect: true,
      };
    } else {
      return {
        ...effectTargets,
        name: statKey,
        min: Math.round(effectMin * (1 + value / 100)),
        max: Math.round(effectMax * (1 + value / 100)),
      };
    }
  }

  return undefined;
};
