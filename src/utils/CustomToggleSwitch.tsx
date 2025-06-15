import { useState } from "react";
import { Color } from "../types/color.t";
import { colorToTailwindClassSuffix } from "./color";

type CustomToggleSwitchProps = {
  checked?: boolean;
  onChange?: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  color?: Color;
  thumbColor?: Color;
  size?: "sm" | "md" | "lg";
  className?: string;
  id?: string;
};

const CustomToggleSwitch = (props: CustomToggleSwitchProps) => {
  const {
    checked = false,
    onChange,
    disabled,
    label,
    color = "blue-500",
    thumbColor = "white",
    size = "md",
    className,
    id,
  } = props;

  const [isChecked, setIsChecked] = useState(checked);

  const handleToggle = () => {
    if (disabled) return;

    const newChecked = !isChecked;
    setIsChecked(newChecked);
    onChange?.(newChecked);
  };

  // Size configurations
  const sizeClasses = {
    sm: {
      switch: "w-9 h-5",
      thumb: "w-4 h-4",
      translate: "translate-x-4",
    },
    md: {
      switch: "w-11 h-6",
      thumb: "w-5 h-5",
      translate: "translate-x-[1.375rem]",
    },
    lg: {
      switch: "w-14 h-7",
      thumb: "w-6 h-6",
      translate: "translate-x-7",
    },
  };

  const currentSize = sizeClasses[size];
  const currentColor = "bg-" + colorToTailwindClassSuffix(color);

  return (
    <div className={`flex items-center ${className}`}>
      <button
        type="button"
        className={`
          relative inline-flex cursor-pointer items-center
          ${currentSize.switch}
          ${isChecked ? currentColor : "bg-gray-300 dark:bg-gray-500"}
          rounded-full
          transition-colors duration-200 ease-in-out
          focus:outline-none focus:ring-0
          ${disabled ? "cursor-not-allowed opacity-50" : "hover:opacity-90"}
        `}
        onClick={handleToggle}
        disabled={disabled}
        role="switch"
        aria-checked={isChecked}
        aria-labelledby={id ? `${id}-label` : undefined}
        id={id}
      >
        <span
          className={`
            ${currentSize.thumb}
            rounded-full ${"bg-" + colorToTailwindClassSuffix(thumbColor)} shadow-md
            transition-transform duration-200 ease-in-out
            ${isChecked ? currentSize.translate : "translate-x-0.5"}
          `}
        />
      </button>

      {label && (
        <label
          htmlFor={id}
          id={id ? `${id}-label` : undefined}
          className={`
            ml-3 text-sm font-medium text-gray-900 dark:text-gray-300
            ${disabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"}
          `}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default CustomToggleSwitch;
