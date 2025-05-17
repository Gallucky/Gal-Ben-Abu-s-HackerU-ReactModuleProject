import { Color } from "../../types/color.t";

type CustomSpinnerSize = "xs" | "sm" | "md" | "lg" | "xl";

type CustomSpinnerProps = {
  color?: Color;
  size?: CustomSpinnerSize;
  className?: string;
  ariaLabel?: string;
  text?: string;
};

const CustomSpinner = (props: CustomSpinnerProps) => {
  const { color, size, className, ariaLabel, text } = props;

  // Tailwind size mapping
  const sizeMap: Record<string, string> = {
    xs: "size-4",
    sm: "size-8",
    md: "size-12",
    lg: "size-16",
    xl: "size-20",
  };

  let textSize = "text-base";
  textSize = size && (size === "sm" || size === "xs") ? "text-sm" : textSize;
  textSize = size && size === "lg" ? "text-lg" : textSize;
  textSize = size && size === "xl" ? "text-xl" : textSize;

  return (
    <div
      className={`fixed inset-0 isolate z-[9] flex items-center justify-center gap-2 bg-transparent ${className}`}
      aria-label={ariaLabel}
      role="status"
    >
      <div
        className={`animate-spin rounded-full
          border-gray-400
          ${size && (size === "sm" || size === "xs") ? "border-2" : "border-4"} 
          ${size ? sizeMap[size] : sizeMap.md}
          ${color ? `border-t-${color} dark:border-t-${color}` : "border-t-blue-500 dark:border-t-blue-400"}
        `}
      />

      <span className={`text-gray-500 dark:text-gray-400 ${textSize}`}>
        {text}
      </span>
    </div>
  );
};

export default CustomSpinner;
