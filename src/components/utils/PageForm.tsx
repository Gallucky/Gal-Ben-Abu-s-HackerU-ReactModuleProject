import { ReactNode } from "react";

type PageFormProps = {
  title: string;
  titleClassName?: string;
  className?: string;
  children?: ReactNode;
} & React.FormHTMLAttributes<HTMLFormElement>;

const PageForm = (props: PageFormProps) => {
  const { title, titleClassName, className, children, ...rest } = props;
  const backgroundColors = "!bg-teal-400 dark:bg-teal-600";

  return (
    <form
      className={`content-form my-[10vh] !w-3/4 ${backgroundColors} ${className}`}
      {...rest}
    >
      <h2
        className={`font-Raleway form-fluid-text form-page-title ${titleClassName}`}
      >
        {title}
      </h2>

      {children}
    </form>
  );
};

export default PageForm;
