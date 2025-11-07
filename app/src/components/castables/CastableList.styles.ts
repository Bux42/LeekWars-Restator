export interface ICastableListStyles {
  gridContainer: React.CSSProperties;
}

export const castableListStyles: ICastableListStyles = {
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
