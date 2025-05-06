type FormAreaTitleProps = {
  text: string;
  className?: string;
};

const FormAreaTitle = (props: FormAreaTitleProps) => {
  const { text, className } = props;
  return (
    <span
      className={`pointer-events-none z-[1] ml-4 size-fit px-4 text-xl text-white ${className}`}
    >
      {text}
    </span>
  );
};

export default FormAreaTitle;
