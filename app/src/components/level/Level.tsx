import { levelStyles } from "./Level.styles";

const MIN_LEVEL = 1;
const MAX_LEVEL = 301;

export default function Level({
  level,
  setLevel,
}: {
  level: number;
  setLevel: (level: number) => void;
}) {
  const handleLevelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= MIN_LEVEL && value <= MAX_LEVEL) {
      setLevel(value);
    } else if (e.target.value === "") {
      // Allow empty input for better UX while typing
      setLevel(MIN_LEVEL);
    }
  };

  return (
    <div style={levelStyles.container}>
      <div style={levelStyles.inputRow}>
        <label htmlFor="level-input" style={levelStyles.label}>
          Level:
        </label>
        <input
          id="level-input"
          type="number"
          min={MIN_LEVEL}
          max={MAX_LEVEL}
          value={level}
          onChange={handleLevelChange}
          style={levelStyles.input}
          className="level-input"
        />
      </div>
    </div>
  );
}
