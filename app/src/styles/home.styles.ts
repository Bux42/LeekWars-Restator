export interface IIndexStyles {
  container: React.CSSProperties;
  githubLink: React.CSSProperties;
  exportLink: React.CSSProperties;
  topContainer: React.CSSProperties;
  leftSideContainer: React.CSSProperties;
  rightSideContainer: React.CSSProperties;
  componentsChipsWeaponsContainer: React.CSSProperties;
  rightSideItemContainer: React.CSSProperties;
  selectedCastablesContainer: React.CSSProperties;
}

export const indexStyles: IIndexStyles = {
  container: {
    display: "flex",
    padding: "20px",
    gap: "20px",
    width: "100%",
  },
  githubLink: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  exportLink: {
    position: "absolute",
    top: 50,
    right: 10,
    cursor: "pointer",
  },
  topContainer: {
    display: "flex",
    gap: "20px",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  leftSideContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    maxWidth: "40vw",
  },
  rightSideContainer: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    flexDirection: "column",
  },
  componentsChipsWeaponsContainer: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  rightSideItemContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  selectedCastablesContainer: {
    display: "flex",
    flexDirection: "row",
    gap: "10px",
    overflowX: "auto",
    whiteSpace: "nowrap",
    maxWidth: "54vw",
  },
};
