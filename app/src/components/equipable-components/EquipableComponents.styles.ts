import { CSSProperties } from "react";

export interface IEquipableComponentsStyles {
  container: CSSProperties;
  title: CSSProperties;
  gridContainer: CSSProperties;
  componentCard: CSSProperties;
  componentName: CSSProperties;
  componentInfo: CSSProperties;
  componentStats: CSSProperties;
  summarySection: CSSProperties;
  summaryTitle: CSSProperties;
  categoriesContainer: CSSProperties;
  categoryBadge: CSSProperties;
}

export const equipableComponentsStyles: IEquipableComponentsStyles = {
  container: {
    width: "100%",
  },
  title: {
    marginBottom: "20px",
    color: "rgba(255, 255, 255, 0.95)",
  },
  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
    gap: "10px",
    maxHeight: "400px",
    overflowY: "auto",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    padding: "15px",
    borderRadius: "16px",
    background: "#f9f9f9",
    backdropFilter: "blur(10px)",
    boxShadow:
      "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2)",
  },
  componentCard: {
    padding: "10px",
    backgroundColor: "white",
    border: "1px solid #e0e0e0",
    borderRadius: "6px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "all 0.2s ease",
    cursor: "pointer",
  },
  componentName: {
    fontWeight: "bold",
    color: "#2c3e50",
    marginBottom: "5px",
    textTransform: "capitalize" as const,
  },
  componentInfo: {
    fontSize: "12px",
    color: "#666",
    marginBottom: "5px",
  },
  componentStats: {
    fontSize: "11px",
    color: "#888",
  },
  summarySection: {
    marginTop: "20px",
    padding: "15px",
    backgroundColor: "#e8f4fd",
    borderRadius: "8px",
    border: "1px solid #bee5eb",
  },
  summaryTitle: {
    margin: "0 0 10px 0",
    color: "#0c5460",
  },
  categoriesContainer: {
    display: "flex",
    flexWrap: "wrap" as const,
    gap: "10px",
  },
  categoryBadge: {
    padding: "5px 10px",
    backgroundColor: "#0c5460",
    color: "white",
    borderRadius: "15px",
    fontSize: "12px",
    fontWeight: "bold",
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
