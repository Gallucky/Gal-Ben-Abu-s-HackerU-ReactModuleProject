import { forwardRef, HTMLInputTypeAttribute } from "react";
import { Color } from "../types/color.t";
import { colorToTailwindClassSuffix } from "../utils/color";

type FormInput_InputColors = {
  textColor?: Color;
  borderColor?: Color;
  caretColor?: Color;
  focusBorderColor?: Color;
};

type FormInput_LabelColors = {
  textColor?: Color;
  focusTextColor?: Color;
  peerFocusTextColor?: Color;
  peerPlaceholderHiddenTextColor?: Color;
};

type LightDarkMode = {
  input?: FormInput_InputColors;
  label?: FormInput_LabelColors;
};

type FormInputColors = {
  lightMode?: LightDarkMode;
  darkMode?: LightDarkMode;
};

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  state?: "default" | "error" | "success";
  /**
   * Expects a color value.
   * Hex, RGB, RGBA, tailwind colors etc...
   */
  colors?: FormInputColors;
  dir?: "ltr" | "rtl";
  className?: string;
  inputClassName?: string;
  labelClassName?: string;
};

const defaultColorValues = {
  lightMode: {
    input: {
      borderColor: "black" as Color,
      textColor: "black" as Color,
      caretColor: "black" as Color,
      focusBorderColor: "teal-800" as Color,
    },
    label: {
      textColor: "gray-400" as Color,
      focusTextColor: "teal-800" as Color,
      peerFocusTextColor: "black" as Color,
      peerPlaceholderHiddenTextColor: "teal-800" as Color,
    },
  },
  darkMode: {
    input: {
      borderColor: "red-500" as Color,
      textColor: "white" as Color,
      caretColor: "white" as Color,
      focusBorderColor: "teal-500" as Color,
    },
    label: {
      textColor: "gray-300" as Color,
      focusTextColor: "teal-400" as Color,
      peerFocusTextColor: "white" as Color,
      peerPlaceholderHiddenTextColor: "teal-400" as Color,
    },
  },
};

// Needed the forwardRef to support the ref that is required so
// this whole component can support the register method from useForm hook.
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props: FormInputProps, ref) => {
    const {
      id,
      label,
      type = "text",
      state = "default",
      colors,
      className = "",
      inputClassName = "",
      labelClassName = "",
      dir = "ltr",
      ...rest
    } = props;

    const formInputState = state === "default" ? "" : `form-input-${state}`;
    const formInputLabelState =
      state === "default" ? "" : `form-input-label-${state}`;

    const { lightMode, darkMode } = defaultColorValues;

    const formInputColors = `
      !border-${colorToTailwindClassSuffix(colors?.lightMode?.input?.borderColor ?? lightMode.input.borderColor)}
      !text-${colorToTailwindClassSuffix(colors?.lightMode?.input?.textColor ?? lightMode.input.textColor)}
      !caret-${colorToTailwindClassSuffix(colors?.lightMode?.input?.caretColor ?? lightMode.input.caretColor)}
      focus:!border-${colorToTailwindClassSuffix(colors?.lightMode?.input?.focusBorderColor ?? lightMode.input.focusBorderColor)}

      dark:!border-${colorToTailwindClassSuffix(colors?.darkMode?.input?.borderColor ?? darkMode.input.borderColor)}
      dark:!text-${colorToTailwindClassSuffix(colors?.darkMode?.input?.textColor ?? darkMode.input.textColor)}
      dark:!caret-${colorToTailwindClassSuffix(colors?.darkMode?.input?.caretColor ?? darkMode.input.caretColor)}
      dark:focus:!border-${colorToTailwindClassSuffix(colors?.darkMode?.input?.focusBorderColor ?? darkMode.input.focusBorderColor)}
    `;
    console.log(formInputColors);

    const formInputLabelColors = `
      !text-${colorToTailwindClassSuffix(colors?.lightMode?.label?.textColor ?? lightMode.label.textColor)}
      focus:!text-${colorToTailwindClassSuffix(colors?.lightMode?.label?.focusTextColor ?? lightMode.label.focusTextColor)}
      peer-focus:!text-${colorToTailwindClassSuffix(colors?.lightMode?.label?.peerFocusTextColor ?? lightMode.label.peerFocusTextColor)}
      peer-[&:not(:placeholder-shown)]:!text-${colorToTailwindClassSuffix(colors?.lightMode?.label?.peerPlaceholderHiddenTextColor ?? lightMode.label.peerPlaceholderHiddenTextColor)}

      dark:!text-${colorToTailwindClassSuffix(colors?.darkMode?.label?.textColor ?? darkMode.label.textColor)}
      dark:focus:!text-${colorToTailwindClassSuffix(colors?.darkMode?.label?.focusTextColor ?? darkMode.label.focusTextColor)}
      dark:peer-focus:!text-${colorToTailwindClassSuffix(colors?.darkMode?.label?.peerFocusTextColor ?? darkMode.label.peerFocusTextColor)}
      dark:peer-[&:not(:placeholder-shown)]:!text-${colorToTailwindClassSuffix(colors?.darkMode?.label?.peerPlaceholderHiddenTextColor ?? darkMode.label.peerPlaceholderHiddenTextColor)}
    `;
    console.log(formInputLabelColors);

    return (
      <>
        <div
          className={`w-[clamp(1rem, 5vw, 2rem)] relative flex h-14 items-center justify-center place-self-center ${className}`}
          dir={dir}
        >
          <input
            id={"form-input-" + id}
            className={`base-form-input font-Rubik font-base peer ${formInputColors}
            ${inputClassName} ${formInputState}`}
            placeholder=" "
            type={type}
            ref={ref}
            {...rest}
          ></input>
          <label
            htmlFor={"form-input-" + id}
            className={`
            base-form-input-label font-Rubik
            rtl-form-input-label
            ${formInputLabelColors}
            ${labelClassName}
            ${formInputLabelState}
          `}
          >
            <span className="bg-inherit">{label}</span>
          </label>
        </div>
      </>
    );
  },
);

export default FormInput;
