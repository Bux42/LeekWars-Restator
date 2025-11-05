import { EntityStats } from "@/types/EntityStats";
import { statsStyles } from "./Stats.styles";
import Level from "../level/Level";

export default function Stats({
  base,
  invested,
  bonus,
  total,
  capital,
  level,
  setLevel,
}: {
  base: EntityStats;
  invested: EntityStats;
  bonus: EntityStats;
  total: EntityStats;
  capital: number;
  level: number;
  setLevel: (level: number) => void;
}) {
  return (
    <div style={statsStyles.container}>
      <h3 style={statsStyles.title}>
        <Level level={level} setLevel={setLevel} />
        <span style={statsStyles.capitalBadge}>{capital} capital</span>
      </h3>
      <table style={statsStyles.table}>
        <thead style={statsStyles.tableHeader}>
          <tr style={statsStyles.headerRow}>
            <th style={statsStyles.headerCell}>Stat</th>
            <th style={statsStyles.headerCell}>Base</th>
            <th style={statsStyles.headerCell}>Invested</th>
            <th style={statsStyles.headerCell}>Bonus</th>
            <th style={statsStyles.totalHeaderCell}>Total</th>
          </tr>
        </thead>
        <tbody style={statsStyles.tableBody}>
          {Object.keys(base).map((statKey) => {
            const key = statKey as keyof EntityStats;

            return (
              <tr key={statKey} style={statsStyles.bodyRow}>
                <td style={statsStyles.statNameCell}>
                  <img
                    src={`/assets/images/stats/${key}.png`}
                    alt={key}
                    style={statsStyles.statIcon}
                  />
                  {key}
                </td>
                <td style={statsStyles.valueCell}>{base[key]}</td>
                <td style={statsStyles.valueCell}>{invested[key]}</td>
                <td style={statsStyles.valueCell}>{bonus[key]}</td>
                <td style={statsStyles.totalCell}>{total[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
