/**
  Inheriting the type of React's
  ButtonHTMLAttributes<HTMLButtonElement>
  and modifying and/or extending it.
*/
type FormButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  disabled?: boolean;
  type?: "button" | "reset" | "submit";
  className?: string;
};

const FormButton = (props: FormButtonProps) => {
  const { disabled, text, type = "button", className = "", ...rest } = props;

  return (
    <button
      className={`form-btn ${className}`}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {text}
    </button>
  );
};

export default FormButton;
