import { CSSProperties } from "react";

type JustifyContent =
  | "start"
  | "end"
  | "center"
  | "between"
  | "around"
  | "evenly";

type AlignItems =
  | "start"
  | "end"
  | "center"
  | "stretch"
  | "baseline"
  | "normal";

type FlexProp = {
  direction?: "row" | "col" | "row-reverse" | "col-reverse";
  // Applies only for row and row-reverse directions.
  directionDynamic?: boolean;
  gap?: string;
  textSize?: string;

  justify?: JustifyContent;
  justifySelf?: AlignItems;

  items?: AlignItems;
  alignSelf?: AlignItems;
  placeSelf?: "auto" | "start" | "end" | "center" | "stretch";

  wrap?: "wrap" | "wrap-reverse" | "nowrap";
  className?: string;
  children?: React.ReactNode;
  style?: CSSProperties;
};

const Flex = (props: FlexProp) => {
  const {
    direction = "row",
    directionDynamic,
    gap,
    textSize,
    justify,
    items,
    alignSelf,
    justifySelf,
    placeSelf,
    wrap,
    className,
    children,
    style,
  } = props;

  return (
    <div
      style={{
        gap: gap,
        fontSize: textSize,
        ...style,
      }}
      className={`
        flex ${"flex-" + direction}
        justify-${justify} items-${items}
        self-${alignSelf} justify-self-${justifySelf}
        place-self-${placeSelf}
        flex-${wrap ? wrap : "nowrap"}

        ${directionDynamic && direction === "row" ? "flex-col md:flex-row" : ""}
        ${directionDynamic && direction === "row-reverse" ? "flex-col-reverse md:flex-row-reverse" : ""}
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export default Flex;
