import { forwardRef, HTMLInputTypeAttribute } from "react";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  // If the type is specified as file then the fileText will be used.
  fileText?: string | undefined;
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
      fileText = "Upload File",
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
            className={`base-form-input font-Rubik font-base peer w-full
              ${type === "file" ? "hidden" : ""}
              ${inputClassName} ${formInputState}
            `}
            placeholder=" "
            type={type}
            ref={ref}
            {...rest}
          ></input>
          {/* Render the floating label incase the input is not of type 'file' because,
              it doesn't really needs a floating label. */}
          {type !== "file" && (
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
          )}
          {/* Render the custom label styling incase the input is of type 'file'. */}
          {type === "file" && (
            <label
              htmlFor={"form-input-" + id}
              className={`
                block cursor-pointer rounded-xl
                bg-cyan-500 px-4 py-2 font-semibold
                text-black transition duration-200
                ease-in-out hover:bg-cyan-400
                focus:outline-none focus:ring-2
                focus:ring-cyan-300 dark:text-white
                dark:hover:bg-cyan-700`}
            >
              {fileText}
            </label>
          )}
        </div>
      </>
    );
  },
);

export default FormInput;
