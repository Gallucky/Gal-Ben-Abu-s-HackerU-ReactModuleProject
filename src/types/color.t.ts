import { Shade } from "./shade.t";

type TailwindColor =
  | "slate"
  | "gray"
  | "red"
  | "orange"
  | "amber"
  | "yellow"
  | "lime"
  | "green"
  | "emerald"
  | "teal"
  | "cyan"
  | "sky"
  | "blue"
  | "indigo"
  | "violet"
  | "purple"
  | "fuchsia"
  | "pink"
  | "rose";

type TailwindConstantColor = "black" | "white";

export type TailwindShadeColor = `${TailwindColor}-${Shade}`;
export type HexColor = `#${string}`;
export type RGBColor =
  | `rgb(${number}, ${number}, ${number})`
  | `rgb(${number} ${number} ${number} / ${number})`;
export type RGBAColor = `rgba(${number}, ${number}, ${number}, ${number})`;
export type HSLColor = `hsl(${number}, ${number}%, ${number}%)`;
export type HSLAColor = `hsla(${number}, ${number}%, ${number}%, ${number})`;

export type Color =
  | TailwindShadeColor
  | HexColor
  | RGBColor
  | RGBAColor
  | HSLColor
  | HSLAColor
  | TailwindConstantColor;
