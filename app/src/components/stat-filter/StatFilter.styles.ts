export interface IStatFilterStyles {
  container: React.CSSProperties;
  statItem: (selected: boolean) => React.CSSProperties;
  statIcon: React.CSSProperties;
}

export const statFilterStyles: IStatFilterStyles = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    gap: "10px",
  },
  statItem: (selected: boolean) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "8px",
    borderRadius: "8px",
    cursor: "pointer",
    background: selected ? "#d0d0d0" : "#2c2c2cff",
    transition: "background 0.3s",
  }),
  statIcon: {
    width: "20px",
    height: "20px",
  },
};
