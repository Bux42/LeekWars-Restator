import { equipmentStatCardStyles } from "./ComponentStatCard.styles";

export default function ComponentStatCard({
  stat,
}: {
  stat: [string, number];
}) {
  return (
    <div style={equipmentStatCardStyles.container}>
      <img
        width={24}
        height={24}
        src={`/assets/images/stats/${stat[0]}.png`}
        alt={stat[0]}
      />
      <strong>{stat[1]}</strong>
    </div>
  );
}
