import { CastableEffect } from "@/types/CastableEffect";
import { castableEffectCardStyles } from "./CastableEffectCard.styles";
import CastableEffectTargetsList from "./castable-effect-targets/CastableEffectTargets";

export default function CastableEffectCard({
  effect,
  multiplier,
}: {
  effect: CastableEffect;
  multiplier?: number;
}) {
  return (
    <div style={castableEffectCardStyles.container}>
      <img
        height={20}
        width={20}
        src={`/assets/images/stats/${effect.name}.png`}
        alt={effect.name}
      />
      <div
        className="effectValueContainer"
        style={castableEffectCardStyles.effectValueContainer}
      >
        {effect.min * (multiplier || 1)}
        {effect.isPercentEffect ? "%" : ""} - {effect.max * (multiplier || 1)}
        {effect.isPercentEffect ? "%" : ""}
        <CastableEffectTargetsList effectTargets={effect} />
      </div>
    </div>
  );
}
