type DividerProps = {
  bgColor?: string;
};

const Divider = (props: DividerProps) => {
  const bgColor = props.bgColor;

  return (
    <>
      {bgColor ? (
        <div style={{ backgroundColor: bgColor }} className="h-px w-screen" />
      ) : (
        <div className="h-[2px] w-screen bg-black dark:bg-slate-500" />
      )}
    </>
  );
};

export default Divider;
