import { CastableEffect } from "@/types/CastableEffect";
import { castableEffectCardStyles } from "./CastableEffectCard.styles";

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
        {effect.min * (multiplier || 1)} - {effect.max * (multiplier || 1)}
      </div>
    </div>
  );
}
