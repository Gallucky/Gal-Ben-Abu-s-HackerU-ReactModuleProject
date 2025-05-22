import {
  forwardRef,
  HTMLInputTypeAttribute,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import ErrorText from "../utils/ErrorText";
import { FaEdit } from "react-icons/fa";
import { LuSave } from "react-icons/lu";

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
  editable?: boolean;
  onSave?: (value: string) => void;
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
      errorMessage = "",
      className = "",
      inputClassName = "",
      labelClassName = "",
      dir = "ltr",
      editable = false,
      onSave,
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

    const [editMode, setEditMode] = useState(false);
    const [prevValue, setPrevValue] = useState("");

    const inputRef = useRef<HTMLInputElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Links the forwarded ref to inputRef so that both the parent (outside)
    // and this component (inside) reference the same input element.
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    // Focus input on entering edit mode for seamless editing.
    useEffect(() => {
      if (editMode && inputRef.current) {
        // Store previous value to allow canceling edits on outside click.
        setPrevValue(inputRef.current.value);
        inputRef.current.focus();
      }
    }, [editMode]);

    // Handle click outside the input to cancel edit mode.
    useEffect(() => {
      // If not in edit mode then abort.
      if (!editMode) return;

      const handleClickOutside = (e: MouseEvent) => {
        // Check if the user is not clicking inside the `FormInput` component.
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          if (inputRef.current) {
            // Restoring the previous value to the input field.
            inputRef.current.value = prevValue;
          }
          setEditMode(false);
        }
      };

      // Add event listener to check if mouse clicks are outside the input.
      document.addEventListener("mousedown", handleClickOutside);

      // On unmount, remove the event listener to prevent memory leaks.
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [editMode, prevValue]);

    const invertEditMode = (e: React.MouseEvent) => {
      e.preventDefault();
      if (editMode) {
        // Exiting edit mode: save changes
        const newValue = inputRef.current?.value || "";
        onSave && newValue !== "" && onSave(newValue);
        setEditMode(false);
      } else {
        // Entering edit mode
        setEditMode(true);
      }
    };

    return (
      <>
        <div
          className={`w-[clamp(1rem, 5vw, 2rem)] flex h-fit flex-col justify-center place-self-center ${className}`}
          dir={dir}
          ref={containerRef}
        >
          <div className="relative flex items-center justify-center gap-2">
            <input
              id={"form-input-" + id}
              className={`base-form-input font-Rubik font-base peer w-full
                  ${editable && !editMode ? "hover:cursor-default" : "hover:cursor-text"}
                  ${type === "file" ? "hidden" : ""}
                  ${inputClassName} ${formInputState}
                `}
              placeholder=" "
              type={type}
              ref={inputRef}
              disabled={editable && !editMode}
              onInput={(e) => {
                // If passed custom onInput function then call it.
                rest.onInput && rest.onInput(e);
              }}
              {...rest}
              // value={"test"}
            />
            {/* Render the floating label incase the input is not of type 'file' because,
                  it doesn't really needs a floating label. */}
            {type !== "file" && (
              <label
                htmlFor={"form-input-" + id}
                className={`
                base-form-input-label font-Rubik rtl-form-input-label
                select-none bg-teal-500
                ${editable && !editMode ? "hover:cursor-default" : "hover:cursor-text"}
                ${labelClassName}
                ${formInputLabelState}
              `}
              >
                <span className="bg-inherit">{label}</span>
              </label>
            )}

            {editable && !editMode && (
              <button
                type="button"
                className="absolute right-2 top-[30%] p-1"
                onClick={invertEditMode}
              >
                <FaEdit scale={200} />
              </button>
            )}
            {editable && editMode && (
              <button type="button" className="absolute right-2 top-[30%] p-1">
                <LuSave onClick={invertEditMode} />
              </button>
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
