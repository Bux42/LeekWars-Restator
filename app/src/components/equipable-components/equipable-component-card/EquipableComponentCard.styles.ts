export interface IEquipableComponentCardStyles {
  container: (equipped: boolean) => React.CSSProperties;
  image: React.CSSProperties;
  name: React.CSSProperties;
  info: React.CSSProperties;
  stats: React.CSSProperties;
}

export const equipableComponentCardStyles: IEquipableComponentCardStyles = {
  container: (equipped: boolean) => ({
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "10px",
    margin: "10px",
    textAlign: "center",
    position: "relative",
    cursor: "pointer",
    backgroundColor: equipped ? "#d3d3d3ff" : "#fff",
  }),
  image: {
    width: "100px",
    height: "100px",
    objectFit: "contain",
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "10px 0",
    textTransform: "capitalize" as const,
    color: "#2c3e50",
  },
  info: {
    fontSize: "14px",
    color: "#666",
    marginBottom: "10px",
  },
  stats: {
    fontSize: "14px",
    color: "#333",
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "16px",
  },
};

// Hover effect styles (since inline styles can't handle pseudo-selectors)
export const hoverEffects = {
  cardHover: {
    transform: "translateY(-2px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
  cardDefault: {
    transform: "translateY(0)",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
};
