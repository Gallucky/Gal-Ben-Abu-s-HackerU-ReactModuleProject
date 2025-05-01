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
  size?: string;
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
    size,
  } = props;

  return (
    <Flex
      direction={direction}
      items="center"
      gap="0.25rem"
      className={`w-full bg-red-500 ${className}`}
    >
      <input
        id={id}
        type="checkbox"
        className={`checkbox`}
        disabled={disabled}
        onChange={onChange}
        style={{
          width: size ? size : "1em",
          height: size ? size : "1em",
          fontSize: size ? size : "1em",
        }}
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
          ${labelClassName}
        `}
        style={{
          fontSize: size ? size : "0.875rem",
        }}
      >
        {text}
      </label>
    </Flex>
  );
};

export default CheckBox;
