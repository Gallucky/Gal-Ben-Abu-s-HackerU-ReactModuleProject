import { TableCell, TableRow } from "flowbite-react";
import { TCardData } from "../types/card.t";
import CardsTableActionsCell from "../components/utils/CardsTableActionsCell";

const convertCardToTableRecord = (
  card: TCardData,
  userID: string | undefined,
  onEditAction?: (cardID: string, isEditing: boolean) => void,
  onDeleteAction?: (cardID: string, isDeleting: boolean) => void,
) => {
  const {
    _id,
    title,
    subtitle,
    description,
    email,
    phone,
    createdAt,
    user_id,
  } = card;

  const tableCellsClassName =
    "border-l-white truncate whitespace-nowrap  text-gray-900 dark:text-white max-w-[153px] overflow-hidden w-1/6";

  const tableCellTitle = (column: string) => {
    return column.length > 100 ? column.substring(0, 100) + "..." : column;
  };

  const createdAtDate = new Date(createdAt)
    .toLocaleString()
    .split(", ")
    .join(" | ");

  return (
    <TableRow key={_id} className="overflow-scroll">
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(title)}
      >
        {title}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(subtitle)}
      >
        {subtitle}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName} `}
        title={tableCellTitle(description)}
      >
        {description}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(email)}
      >
        {email}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(phone)}
      >
        {phone}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(createdAtDate)}
      >
        <span>{createdAtDate}</span>
      </TableCell>
      <CardsTableActionsCell
        editable={user_id === userID}
        onEdit={onEditAction}
        onDelete={onDeleteAction}
      />
    </TableRow>
  );
};

export default convertCardToTableRecord;
