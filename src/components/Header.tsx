import { Button } from "flowbite-react";
import { useNavigate } from "react-router-dom";

export type HeaderProps = {
  title?: string;
  paragraph?: string;

  titleClassName?: string;
  paragraphClassName?: string;
};

const Header = (props: HeaderProps) => {
  const title = props.title ?? "New Page";
  const paragraph =
    props.paragraph ??
    "A paragraph to add description or more information in the header.";

  const paragraphLines = paragraph.split("\n");

  const titleClassName =
    props.titleClassName ?? "text-black dark:text-white pt-20";
  const paragraphClassName =
    props.paragraphClassName ?? "text-black dark:text-white";

  const navigate = useNavigate();

  const onTestWorkSpaceButtonClick = () => {
    navigate("/test");
  };

  return (
    <>
      <h1
        className={
          `
          ms-3 h-fit overflow-hidden pb-1 
          font-[Raleway] text-5xl
          ` + titleClassName
        }
      >
        {title}
      </h1>
      <p
        className={
          `
          ms-3 max-w-[75%] text-wrap
          pb-1 pt-2 font-[Raleway]
          text-xl
          ` + paragraphClassName
        }
      >
        {paragraphLines.map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </p>
      <Button onClick={onTestWorkSpaceButtonClick}>To Test Workspace</Button>
    </>
  );
};

export default Header;
