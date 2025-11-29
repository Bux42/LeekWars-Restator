import { EffectIdToStatMap } from "@/constants/Effects.constants";
import { CastableEffect } from "@/types/CastableEffect";
import { EntityStats } from "@/types/EntityStats";

export const calculateCastableEffect = (
  totalStats: EntityStats,
  effectType: number,
  effectId: number,
  effectMin: number,
  effectMax: number,
  turns: number = 0
): CastableEffect | undefined => {
  const statKey = EffectIdToStatMap[effectType];
  const value = totalStats[statKey] || 0;

  //   console.log(statKey);

  if (statKey === undefined) {
    console.warn(`No stat mapping found for effect type ${effectType}`);
    return undefined;
  }

  if (statKey === "strength") {
    // DegatsDeBase * (1 + Force / 100)
    return {
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
    };
  } else if (statKey === "magic") {
    // DegatsDePoisonFinaux = DegatsDePoisonDeBase * (1 + Magie / 100)
    return {
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
      minWithTurns: Math.floor(effectMin * (1 + value / 100)) * turns,
    };
  } else if (statKey === "wisdom") {
    //FinalHeal = BaseHeal * (1 + Wisdom / 100)
    return {
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
    };
  } else if (statKey === "science") {
    // Nova damage calculation
    return {
      name: statKey,
      min: Math.floor(effectMin * (1 + value / 100)),
      max: Math.floor(effectMax * (1 + value / 100)),
    };
  }

  return undefined;
};
