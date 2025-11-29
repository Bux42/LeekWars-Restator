export interface IIndexStyles {
  pageContainer: React.CSSProperties;
  githubLink: React.CSSProperties;
  exportLink: React.CSSProperties;
  container: React.CSSProperties;
  topContainer: React.CSSProperties;
  leftSideContainer: React.CSSProperties;
  bottomContainer: React.CSSProperties;
  componentsChipsWeaponsContainer: React.CSSProperties;
  rightSideItemContainer: React.CSSProperties;
  selectedCastablesContainer: React.CSSProperties;
}

export const indexStyles: IIndexStyles = {
  pageContainer: {
    display: "flex",
    padding: "20px",
    gap: "20px",
    width: "100%",
  },
  githubLink: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1000,
    cursor: "pointer",
  },
  exportLink: {
    position: "absolute",
    top: 50,
    right: 10,
    cursor: "pointer",
    zIndex: 1000,
  },
  container: {
    display: "flex",
    gap: "20px",
    width: "100%",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  topContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    flexWrap: "wrap",
  },
  leftSideContainer: {},
  bottomContainer: {
    width: "100%",
    display: "flex",
    gap: "10px",
  },
  componentsChipsWeaponsContainer: {
    width: "100%",
    display: "flex",
    gap: "20px",
    flexDirection: "column",
  },
  rightSideItemContainer: {},
  selectedCastablesContainer: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    gap: "10px",
  },
};
