import { CastableEffectTargets } from "@/types/CastableEffect";
import { castableEffectTargetsStyles as styles } from "./CastableEffectTargets.styles";

function EffectTargetSquare({
  toolTip,
  color,
  borderColor,
}: {
  toolTip: string;
  color: string;
  borderColor?: string;
}) {
  return (
    <div title={toolTip} style={styles.targetSquare(color, borderColor)}></div>
  );
}

export default function CastableEffectTargetsList({
  effectTargets,
}: {
  effectTargets: CastableEffectTargets;
}) {
  const hasTargets =
    effectTargets.targetEnemies ||
    effectTargets.targetAllies ||
    effectTargets.targetCaster ||
    effectTargets.targetNonSummons ||
    effectTargets.targetSummons;

  if (!hasTargets) {
    return null;
  }
  return (
    <>
      <div style={{ marginLeft: 8 }}></div>
      {effectTargets.targetEnemies && !effectTargets.targetAllies && (
        <EffectTargetSquare toolTip="Only affects enemies" color="red" />
      )}
      {effectTargets.targetAllies && !effectTargets.targetEnemies && (
        <EffectTargetSquare toolTip="Only affects allies" color="blue" />
      )}
      {!effectTargets.targetCaster && (
        <EffectTargetSquare
          toolTip="Never affects caster"
          color="white"
          borderColor="#555"
        />
      )}
      {!effectTargets.targetNonSummons && (
        <EffectTargetSquare toolTip="Only affects summons" color="#00dfff" />
      )}
      {!effectTargets.targetSummons && (
        <EffectTargetSquare
          toolTip="Never affects summons"
          color="white"
          borderColor="#00dfff"
        />
      )}
    </>
  );
}
