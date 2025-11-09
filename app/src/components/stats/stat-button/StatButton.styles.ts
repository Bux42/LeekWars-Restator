export interface IStatButtonStyles {
  container: React.CSSProperties;
  img: (disabled: boolean) => React.CSSProperties;
  tooltip: React.CSSProperties;
}

export const statButtonStyles: IStatButtonStyles = {
  container: {
    position: "relative",
    display: "inline-block",
  },
  img: (disabled: boolean) => ({
    cursor: disabled ? "not-allowed" : "pointer",
    marginLeft: 5,
    display: "block",
  }),
  tooltip: {
    position: "absolute",
    bottom: "100%",
    left: "50%",
    transform: "translateX(-50%)",
    marginBottom: "5px",
    padding: "5px 10px",
    backgroundColor: "rgba(0, 0, 0, 0.9)",
    color: "white",
    borderRadius: "4px",
    fontSize: "12px",
    whiteSpace: "nowrap",
    pointerEvents: "none",
    zIndex: 1000,
  },
};
