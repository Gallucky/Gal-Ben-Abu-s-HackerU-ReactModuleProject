import { Color } from "../types/color.t";

export const colorToString = (color: Color) => color as string;

export const valueOfColor = (color: Color) => {
  // console.log("color", color);
  // console.log("color ?? true", color ?? true);

  if (!color) return undefined;
  if (colorToString(color) === "") return undefined;

  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{8})$/;
  const tailwindColorRegex =
    /^(slate|gray|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900|950)$/;
  const rgbRegex =
    /^rgb\(\s*\d{1,3}\s*(,\s*\d{1,3}\s*){2}(\/\s*\d+(?:\.\d+)?)?\s*\)$/;
  const rgbaRegex =
    /^rgba\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*\\d{1,3}\\s*,\\s*(0|1|0?\\.\\d+)\\s*\\)$/;
  const hslRegex =
    /^hsl\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%\\s*,\\s*\\d{1,3}%\\s*\\)$/;
  const hslaRegex =
    /^hsla\\(\\s*\\d{1,3}\\s*,\\s*\\d{1,3}%\\s*,\\s*\\d{1,3}%\\s*,\\s*(0|1|0?\\.\\d+)\\s*\\)$/;

  if (hexRegex.test(color)) return "hex";
  if (tailwindColorRegex.test(color)) return "tailwind-color";
  if (rgbRegex.test(color)) return "rgb";
  if (rgbaRegex.test(color)) return "rgba";
  if (hslRegex.test(color)) return "hsl";
  if (hslaRegex.test(color)) return "hsla";
  if (color === "black" || color === "white") return "tailwind-constant-color";

  return undefined;
};

export const colorToTailwindClassSuffix = (color: Color) => {
  const colorVal = valueOfColor(color);
  if (!colorVal) return undefined;
  if (colorVal === "tailwind-color" || colorVal === "tailwind-constant-color")
    return color;
  return `[${color}]`;
};
