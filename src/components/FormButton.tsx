type FormButtonProps = {
  text: string;
  disabled?: boolean;
  className?: string;
};

const FormButton = (props: FormButtonProps) => {
  const classList =
    "w-1/2 place-self-center rounded-xl " +
    "bg-violet-700 p-2 font-semibold text-gray-400 " +
    "hover:bg-violet-800 hover:text-gray-300 " +
    "disabled:bg-gray-600 disabled:hover:cursor-not-allowed";

  return (
    <button
      className={`${classList} ${props.className}`}
      disabled={props.disabled}
    >
      {props.text}
    </button>
  );
};

export default FormButton;
