import { CSSProperties } from "react";

export interface IEquipableComponentsStyles {
  container: CSSProperties;
  gridContainer: CSSProperties;
}

export const equipableComponentsStyles: IEquipableComponentsStyles = {
  container: {
    width: "100%",
  },
  gridContainer: {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
    maxHeight: "40vh",
    overflowY: "auto",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "15px",
    borderRadius: "16px",
    background: "#f9f9f9",
    backdropFilter: "blur(10px)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
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
