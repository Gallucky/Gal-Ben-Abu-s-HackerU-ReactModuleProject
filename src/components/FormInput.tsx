import { forwardRef, HTMLInputTypeAttribute } from "react";
import { Color } from "../types/color.t";
import { colorToTailwindClassSuffix, valueOfColor } from "../utils/color";

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

type FormInputColors = {
  lightMode?: {
    input?: FormInput_InputColors;
    label?: FormInput_LabelColors;
  };
  darkMode?: {
    input?: FormInput_InputColors;
    label?: FormInput_LabelColors;
  };
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

// Needed the forwardRef to support the ref that is required so
// this whole component can support the register method from useForm hook.
const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (props: FormInputProps, ref) => {
    const {
      id,
      label,
      type = "text",
      state = "default",
      className = "",
      colors = {
        lightMode: {
          input: {
            borderColor: "cyan-500",
            textColor:,
            caretColor:,
            focusBorderColor:,
          },
          label: {
            textColor:,
            focusTextColor:,
            peerFocusTextColor:,
            peerPlaceholderHiddenTextColor:,
          },
        },
        darkMode: {},
      },
      inputClassName = "",
      labelClassName = "",
      dir = "ltr",
      ...rest
    } = props;

    const formInputState = state === "default" ? "" : `form-input-${state}`;
    const formInputLabelColor =
      state === "default" ? "" : `form-input-label-${state}`;

    const formInputColors = `
      border-${colorToTailwindClassSuffix(colors.lightMode?.input?.borderColor)}
      text-[${}]
      caret-[${}]
      focus:border-[${}]

      dark:border-[${}]
      dark:text-[${}]
      dark:caret-[${}]
      dark:focus:border-[${}]
    `;
    return (
      <>
        <div
          className={`w-[clamp(1rem, 5vw, 2rem)] relative flex h-14 items-center justify-center place-self-center ${className}`}
          dir={dir}
        >
          <input
            id={"form-input-" + id}
            className={`base-form-input font-Rubik font-base peer
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
            ${labelClassName}
            ${formInputLabelColor}
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
