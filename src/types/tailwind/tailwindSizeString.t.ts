import { SizeUnit } from "../sizeUnit.t";

export type TailwindSizeString =
  // Spacing scale numbers (arbitrary limit, adjust as needed)
  | `size-${0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 72 | 80 | 96}`
  // Fractional sizes
  | `size-${"1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12"}`
  // Predefined keywords
  | "size-auto"
  | "size-px"
  | "size-full"
  | "size-min"
  | "size-max"
  | "size-fit"
  | "size-screen"
  | "size-dvw"
  | "size-dvh"
  | "size-lvw"
  | "size-lvh"
  | "size-svw"
  | "size-svh"
  // Arbitrary values
  | `size-[${number}${SizeUnit}]`
  // Custom property support
  | `size-[var(--${string})]`;
