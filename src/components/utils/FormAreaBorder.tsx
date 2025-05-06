type FormAreaBorderProps = {
  className?: string;
};

const FormAreaBorder = (props: FormAreaBorderProps) => {
  const { className } = props;
  return (
    <div
      className={`pointer-events-none absolute inset-x-0 bottom-0 top-4 rounded-xl border-2 ${className}`}
    />
  );
};

export default FormAreaBorder;
