import { ReactNode } from "react";

type PageWrapperProps = {
  children?: ReactNode;
};

const PageWrapper = (props: PageWrapperProps) => {
  return <div className="page-wrapper">{props.children}</div>;
};

export default PageWrapper;
