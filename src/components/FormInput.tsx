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
  className?: string;
};

const FormInput = (props: FormInputProps) => {
  const { id, label } = props;
  const classList = props.className ?? "";
  const type = props.type ?? "text";
  const color = props.color ?? "default";

  const formInputColor = color === "default" ? "" : `form-input-${color}`;
  const formInputLabelColor = color === "default" ? "" : `form-label-${color}`;

  return (
    <>
      <div
        className={`relative flex h-12 items-center justify-center place-self-center px-2`}
      >
        <input
          id={"form-input-" + id}
          className={`base-form-input font-Rubik font-base peer ${classList} ${formInputColor}`}
          placeholder=" "
          type={type}
        ></input>
        <label
          htmlFor={"form-input-" + id}
          className={`
            font-Rubik absolute left-4
            top-3 z-10
            rounded-lg bg-teal-500 px-1
            text-base text-gray-500 transition-all
            duration-300 ease-linear
            peer-placeholder-shown:top-3
            peer-placeholder-shown:text-base
            peer-focus:-top-0.5
            peer-focus:text-sm
            peer-focus:text-blue-700
            peer-[&:not(:placeholder-shown)]:-top-0.5
            peer-[&:not(:placeholder-shown)]:text-sm
            peer-[&:not(:placeholder-shown)]:text-blue-700
            ${formInputLabelColor}
          `}
        >
          {label}
        </label>
      </div>
    </>
  );
};

export default FormInput;
