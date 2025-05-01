type GridItemProps = {
  area: string;
  children: React.ReactNode;
};

const GridItem = (props: GridItemProps) => {
  return (
    <div
      style={{
        gridArea: props.area,
      }}
    >
      {props.children}
    </div>
  );
};

export default GridItem;
