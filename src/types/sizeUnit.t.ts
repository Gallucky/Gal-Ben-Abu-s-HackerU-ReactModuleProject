export type SizeUnit =
  | "px"
  | "pt"
  | "pc"
  | "in"
  | "cm"
  | "mm"
  | "em"
  | "rem"
  | "%"
  | "ex"
  | "ch"
  | "vw"
  | "vh"
  | "vmin"
  | "vmax";

export const cssUnitRegex =
  /^-?\d+(\.\d+)?(px|pt|pc|in|cm|mm|em|rem|%|ex|ch|vw|vh|vmin|vmax)$/;
