export interface IStatButtonStyles {
  img: (disabled: boolean) => React.CSSProperties;
}

export const statButtonStyles: IStatButtonStyles = {
  img: (disabled: boolean) => ({
    cursor: disabled ? "not-allowed" : "pointer",
    marginLeft: 5,
  }),
};
