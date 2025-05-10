import { cssUnitRegex, SizeUnit } from "../types/sizeUnit.t";
import {
  tailwindSizes,
  TailwindTextSizeString,
} from "../types/tailwind/tailwindTextSizeString.t";

export const tailwindTextSizeValidator = (
  str: TailwindTextSizeString | `${number}${SizeUnit}`,
) => {
  // Checking if the text size matches an arbitrary value rules.
  if (cssUnitRegex.test(str)) return `text-[${str}]`;

  // Checking if the text size matches one of the tailwind text size classes.
  if (tailwindSizes.includes(str as TailwindTextSizeString))
    return `text-${str}`;

  // If the checks failed.
  return undefined;
};
