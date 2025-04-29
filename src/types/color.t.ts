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

export type Color =
  | `${TailwindColor}-${Shade}`
  | `#${string}`
  | `rgb(${number}, ${number}, ${number})`
  | `rgb(${number} ${number} ${number} / ${number})`
  | `rgba(${number}, ${number}, ${number}, ${number})`
  | `hsl(${number}, ${number}%, ${number}%)`
  | `hsla(${number}, ${number}%, ${number}%, ${number})`
  | TailwindConstantColor;
