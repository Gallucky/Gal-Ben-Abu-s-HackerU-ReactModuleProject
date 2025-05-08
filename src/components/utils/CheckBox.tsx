import { SizeUnit } from "../../types/sizeUnit.t";
import { TailwindSizeString } from "../../types/tailwind/tailwindSizeString.t";
import { TailwindTextSizeString } from "../../types/tailwind/tailwindTextSizeString.t";
import { tailwindTextSizeValidator } from "../../utils/textSize";
import Flex from "./Flex";

type CheckBoxProps = {
  id: string;
  text?: string;
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  children?: null;
  className?: string;
  labelClassName?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  size?: TailwindSizeString;
  textSize?: TailwindTextSizeString | `${number}${SizeUnit}`;
};

const CheckBox = (props: CheckBoxProps) => {
  let { checked } = props;
  const {
    id,
    text,
    direction,
    className,
    labelClassName,
    onChange = () => {
      checked = !checked;
    },
    disabled = false,
    size = "size-[1rem]",
    textSize = "sm",
  } = props;

  const textSizeFormatted = tailwindTextSizeValidator(textSize);

  return (
    <Flex
      direction={direction}
      items="center"
      justify="center"
      gap="0.25rem"
      className={`w-full ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className={`checkbox ${size}`}
        disabled={disabled}
        onChange={onChange}
      />
      <label
        htmlFor={id}
        className={`select-none
          text-gray-800 dark:text-gray-200
          ${
            disabled
              ? "cursor-not-allowed text-gray-400 dark:text-gray-500"
              : ""
          }
          ${textSizeFormatted}
          ${labelClassName}
        `}
      >
        {text}
      </label>
    </Flex>
  );
};

export default CheckBox;
