import { SizeUnit } from "../types/sizeUnit.t";
import { TailwindTextSizeString } from "../types/tailwind/tailwindTextSizeString.t";

export const tailwindTextSizeValidator = (
  str: TailwindTextSizeString | `${number}${SizeUnit}`,
) => {
  const tailwindSizes: TailwindTextSizeString[] = [
    "xs",
    "sm",
    "base",
    "lg",
    "xl",
    "2xl",
    "3xl",
    "4xl",
    "5xl",
    "6xl",
    "7xl",
    "8xl",
    "9xl",
  ];

  const cssUnitRegex =
    /^-?\d+(\.\d+)?(px|pt|pc|in|cm|mm|em|rem|%|ex|ch|vw|vh|vmin|vmax)$/;

  console.log("str:", str);
  console.log("tailwind arbitrary value:", cssUnitRegex.test(str));
  console.log(
    "tailwind size?",
    tailwindSizes.includes(str as TailwindTextSizeString),
  );

  if (cssUnitRegex.test(str)) return `text-[${str}]`;
  if (tailwindSizes.includes(str as TailwindTextSizeString))
    return `text-${str}`;

  return undefined;
};
