type ErrorTextProps = {
  message?: string;
  bold?: boolean;
  semiBold?: boolean;
  className?: string;
};
const ErrorText = (props: ErrorTextProps) => {
  const { message = "", bold, semiBold, className } = props;
  if (message === "") return <></>;

  return (
    <p
      className={`-mt-3 text-sm text-red-500 ${semiBold ? "font-semibold" : ""} ${bold ? "font-bold" : ""} ${className}`}
    >
      * {message}
    </p>
  );
};
export default ErrorText;
