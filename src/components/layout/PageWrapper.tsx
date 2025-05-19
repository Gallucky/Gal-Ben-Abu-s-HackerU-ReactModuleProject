import { ReactNode } from "react";

type PageWrapperProps = {
  children?: ReactNode;
  className?: string;
};

const PageWrapper = (props: PageWrapperProps) => {
  return (
    <div className={`page-wrapper ${props.className}`}>{props.children}</div>
  );
};

export default PageWrapper;
