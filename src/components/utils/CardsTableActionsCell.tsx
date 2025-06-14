import { Button, TableCell } from "flowbite-react";
import Flex from "./Flex";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

type CardsTableActionsCellProps = {
  className?: string;
  editable?: boolean;
  userID?: string;
  onEdit?: (cardID: string, isEditing: boolean) => void;
  onDelete?: (cardID: string, isDeleting: boolean) => void;
};

const CardsTableActionsCell = (props: CardsTableActionsCellProps) => {
  const {
    className,
    editable,
    userID,
    onEdit = () => {},
    onDelete = () => {},
  } = props;

  const editCardHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (userID) {
      onEdit(userID, true);
    }
  };

  const deleteCardHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    if (userID) {
      onDelete(userID, true);
    }
  };

  return (
    <TableCell className={`${className}`}>
      <Flex directionDynamic gap="1rem" placeSelf="center">
        {/* Edit Action Button */}
        {editable && (
          <abbr title="Edit">
            <Button
              onClick={editCardHandler}
              className="parent !bg-teal-700 hover:text-yellow-300 focus:scale-100 focus:!border-none focus:!outline-none focus:!ring-0"
            >
              <FaEdit className="animate-tilt size-4" />
            </Button>
          </abbr>
        )}

        {/* Delete Action Button */}
        <abbr title="Delete">
          <Button
            onClick={deleteCardHandler}
            className="parent !bg-red-700 hover:text-slate-600 focus:scale-100 focus:!border-none focus:!outline-none focus:!ring-0"
          >
            <MdDelete className="animate-tilt size-4" />
          </Button>
        </abbr>
      </Flex>
    </TableCell>
  );
};

export default CardsTableActionsCell;
