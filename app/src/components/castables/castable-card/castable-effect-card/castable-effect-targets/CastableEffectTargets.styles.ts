export interface CastableEffectTargetsStyles {
  targetSquare: (color: string, borderColor?: string) => React.CSSProperties;
}

export const castableEffectTargetsStyles: CastableEffectTargetsStyles = {
  targetSquare: (color: string, borderColor: string = "transparent") => ({
    width: 15,
    height: 15,
    backgroundColor: color,
    marginRight: 4,
    border: `2px solid ${borderColor}`,
    borderRadius: 2,
  }),
};
