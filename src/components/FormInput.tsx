import { forwardRef, HTMLInputTypeAttribute } from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  state?: "default" | "error" | "success";
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
      inputClassName = "",
      labelClassName = "",
      dir = "ltr",
      ...rest
    } = props;

    const formInputState = state === "default" ? "" : `form-input-${state}`;
    const formInputLabelState =
      state === "default" ? "" : `form-input-label-${state}`;

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
