/* prettier-ignore */
type GridColumnsAndRowsValidCount =
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12;

type GridProps = {
  areas?: string[];
  gridColumns?: {
    sm?: GridColumnsAndRowsValidCount;
    md?: GridColumnsAndRowsValidCount;
    lg?: GridColumnsAndRowsValidCount;
  };
  gridRows?: {
    sm?: GridColumnsAndRowsValidCount;
    md?: GridColumnsAndRowsValidCount;
    lg?: GridColumnsAndRowsValidCount;
  };
  gap?: string;
  children?: React.ReactNode;
  className?: string;
};

const Grid = (props: GridProps) => {
  const { areas, gridColumns, gridRows, gap, children, className } = props;

  // Because tailwind doesn't have support for grid areas,
  // creating the styles manually.
  const gridStyles: React.CSSProperties = {};

  if (areas)
    gridStyles.gridTemplateAreas = areas.map((row) => `"${row}"`).join(" ");
  if (gap) gridStyles.gap = gap;

  return (
    <div
      style={gridStyles}
      className={`
      grid ${gridColumns && gridColumns.sm ? `sm:grid-cols-${gridColumns.sm}` : ""}
      ${gridColumns && gridColumns.md ? `md:grid-cols-${gridColumns.md}` : ""}
      ${gridColumns && gridColumns.lg ? `lg:grid-cols-${gridColumns.lg}` : ""}
      ${gridRows && gridRows.sm ? `sm:grid-rows-${gridRows.sm}` : ""}
      ${gridRows && gridRows.md ? `md:grid-rows-${gridRows.md}` : ""}
      ${gridRows && gridRows.lg ? `lg:grid-rows-${gridRows.lg}` : ""}
      ${className}
    `}
    >
      {children}
    </div>
  );
};

export default Grid;
