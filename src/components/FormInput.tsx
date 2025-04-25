/* prettier-ignore */
type InputType = "button" | "checkbox" | "color" |
  "date" | "datetime-local" | "email" |
  "file" | "hidden" | "image" |
  "month" | "number" | "password" |
  "radio" | "range" | "reset" |
  "search" | "submit" | "tel" |
  "text" | "time" | "url" | "week";

type FormInputProps = {
  id: string;
  label: string;
  type?: InputType;
  color?: "default" | "error" | "success";
  dir?: "ltr" | "rtl";
  className?: string;
  labelClassName?: string;
};

const FormInput = (props: FormInputProps) => {
  const { id, label } = props;
  const classList = props.className ?? "";
  const type = props.type ?? "text";
  const color = props.color ?? "default";

  const formInputColor = color === "default" ? "" : `form-input-${color}`;
  const formInputLabelColor =
    color === "default" ? "" : `form-input-label-${color}`;
  const labelClassName = props.labelClassName ?? "";
  const direction = props.dir ?? "ltr";

  return (
    <>
      <div
        className={`relative flex h-12 items-center justify-center place-self-center px-2`}
        dir={direction}
      >
        <input
          id={"form-input-" + id}
          className={`base-form-input font-Rubik font-base peer
            border-black dark:border-white ${classList} ${formInputColor}`}
          placeholder=" "
          type={type}
        ></input>
        <label
          htmlFor={"form-input-" + id}
          className={`
            base-form-input-label font-Rubik
            rtl-form-input-label
            ${formInputLabelColor}
            ${labelClassName}
          `}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default FormInput;
