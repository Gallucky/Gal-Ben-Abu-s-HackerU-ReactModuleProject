import { TableCell, TableRow } from "flowbite-react";
import { TCardData } from "../types/card.t";

const convertCardToTableRecord = (card: TCardData) => {
  const { _id, title, subtitle, description, email, phone, createdAt } = card;

  const tableCellsClassName =
    "border-l-white border-l truncate whitespace-nowrap  text-gray-900 dark:text-white max-w-[153px] overflow-hidden w-1/6";

  const tableCellTitle = (column: string) => {
    return column.length > 100 ? column.substring(0, 100) + "..." : column;
  };

  return (
    <TableRow key={_id} className="overflow-scroll">
      <TableCell className={`${tableCellsClassName}`}>{title}</TableCell>
      <TableCell className={`${tableCellsClassName}`}>{subtitle}</TableCell>
      <TableCell
        className={`${tableCellsClassName} `}
        title={tableCellTitle(description)}
      >
        {description}
      </TableCell>
      <TableCell className={`${tableCellsClassName}`}>{email}</TableCell>
      <TableCell className={`${tableCellsClassName}`}>{phone}</TableCell>
      <TableCell className={`${tableCellsClassName}`}>
        <span>
          {new Date(createdAt).toLocaleString().split(", ").join(" | ")}
        </span>
      </TableCell>
    </TableRow>
  );
};

export default convertCardToTableRecord;
