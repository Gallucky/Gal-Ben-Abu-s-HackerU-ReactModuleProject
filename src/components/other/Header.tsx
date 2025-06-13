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

  const titleClassName = props.titleClassName ?? "text-black dark:text-white";
  const paragraphClassName =
    props.paragraphClassName ?? "text-black dark:text-white";

  return (
    <>
      <h1
        className={
          `
          ms-3 mt-20 h-fit overflow-hidden 
          pb-1 font-[Raleway] text-5xl
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
    </>
  );
};

export default Header;
