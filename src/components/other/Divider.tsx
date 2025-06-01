// prettier-ignore
type MarginNumeric =
  | 0 | 0.5 | 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4
  | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 14 | 16
  | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48
  | 52 | 56 | 60 | 64 | 72 | 80 | 96;

type MarginTypes = "m" | "mx" | "my" | "mt" | "mb" | "ml" | "mr";

type Margin =
  | `${MarginTypes}-${MarginNumeric}`
  | `-${MarginTypes}-${MarginNumeric}`
  | "auto";

type DividerProps = {
  bgColor?: string;
  margin?: Margin;
  className?: string;
};

const Divider = (props: DividerProps) => {
  const bgColor = props.bgColor;
  const margin = props.margin;

  return (
    <>
      {bgColor ? (
        <div
          style={{ backgroundColor: bgColor }}
          className={`h-px w-screen ${margin}`}
        />
      ) : (
        <div className={`h-px w-full bg-black dark:bg-slate-500 ${margin}`} />
      )}
    </>
  );
};

export default Divider;
