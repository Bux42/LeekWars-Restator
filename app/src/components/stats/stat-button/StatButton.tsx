import { useMemo, useState } from "react";
import { statButtonStyles } from "./StatButton.styles";
import { EntityStats } from "@/types/EntityStats";
import { calculateCapitalCostAndStatsIncrease } from "@/lib/stats/StatsHelper";

export default function StatButton({
  name,
  amount,
  statKey,
  alreadyInvested,
  onClick,
  disabled,
}: {
  name: "add" | "minus";
  amount: number;
  statKey: keyof EntityStats;
  alreadyInvested: number;
  onClick: (change: number) => void;
  disabled: boolean;
}) {
  const [showTooltip, setShowTooltip] = useState(false);

  const { totalCost, totalIncrease } = useMemo(() => {
    return calculateCapitalCostAndStatsIncrease(
      statKey,
      alreadyInvested,
      alreadyInvested + amount
    );
  }, [statKey, amount, alreadyInvested]);

  const imgSrc =
    amount > 1
      ? `/assets/images/icons/${name}_${amount}.png`
      : `/assets/images/icons/${name}.png`;

  return (
    <div
      style={statButtonStyles.container}
      onMouseEnter={() => setShowTooltip(true)}
      onMouseLeave={() => setShowTooltip(false)}
    >
      <img
        src={imgSrc}
        alt={name}
        style={statButtonStyles.img(disabled)}
        onClick={() => {
          if (!disabled) {
            onClick(name === "add" ? amount : -amount);
          }
        }}
      />
      {showTooltip && (
        <div style={statButtonStyles.tooltip}>
          {totalCost} capital invested ⇔ {totalIncrease} {statKey} gained
        </div>
      )}
    </div>
  );
}
