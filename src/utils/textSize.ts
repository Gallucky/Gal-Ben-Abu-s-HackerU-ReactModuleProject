import { cssUnitRegex, SizeUnit } from "../types/sizeUnit.t";
import {
  tailwindSizes,
  TailwindTextSizeString,
} from "../types/tailwind/tailwindTextSizeString.t";

export const tailwindTextSizeValidator = (
  str: TailwindTextSizeString | `${number}${SizeUnit}`,
) => {
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
