import { forwardRef, HTMLInputTypeAttribute } from "react";
import ErrorText from "../utils/ErrorText";

type FormInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  id: string;
  label: string;
  type?: HTMLInputTypeAttribute | undefined;
  // If the type is specified as file then the fileText will be used.
  fileText?: string | undefined;
  state?: "default" | "error" | "success";
  errorMessage?: string;
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
      errorMessage = "",
      className = "",
      inputClassName = "",
      labelClassName = "",
      dir = "ltr",
      ...rest
    } = props;

    // If there is an error message override the state
    // prop and define the dynamic state as an error.
    // Otherwise continue with the state given.
    const dynamicState = errorMessage === "" ? state : "error";
    const formInputState =
      dynamicState === "default" ? "" : `form-input-${dynamicState}`;
    const formInputLabelState =
      dynamicState === "default" ? "" : `form-input-label-${dynamicState}`;

    return (
      <>
        <div
          className={`w-[clamp(1rem, 5vw, 2rem)] flex h-fit flex-col justify-center place-self-center ${className}`}
          dir={dir}
        >
          <div className="relative flex flex-col items-center">
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
              base-form-input-label font-Rubik rtl-form-input-label
              select-none bg-teal-500
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
          <ErrorText
            message={errorMessage}
            className="!ml-0 mt-1 max-w-52 text-wrap text-start text-red-700 dark:text-red-500"
          />
        </div>
      </>
    );
  },
);

export default FormInput;
