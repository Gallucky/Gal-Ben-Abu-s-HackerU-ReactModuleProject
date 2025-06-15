import { Button, TableCell } from "flowbite-react";
import Flex from "./Flex";
import { MdDelete } from "react-icons/md";

type UsersTableActionsCellProps = {
  className?: string;
  userID: string;
  userAdmin: boolean;
  onDelete?: (userID: string, isDeleting: boolean) => void;
};

const UsersTableActionsCell = (props: UsersTableActionsCellProps) => {
  const { className, userID, onDelete = () => {}, userAdmin } = props;

  const deleteCardHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete(userID, true);
  };

  return (
    <TableCell className={`${className}`}>
      <Flex directionDynamic gap="1rem" placeSelf="center">
        {/* Delete Action Button */}
        <abbr
          title={
            userAdmin
              ? "Cannot delete admin users at the frontend platform for security reasons."
              : "Delete"
          }
        >
          <Button
            onClick={deleteCardHandler}
            className="parent !bg-red-700 hover:text-slate-600 focus:scale-100 focus:!border-none focus:!outline-none focus:!ring-0"
            disabled={userAdmin}
          >
            <MdDelete className={`${userAdmin ? "" : "animate-tilt"} size-4`} />
          </Button>
        </abbr>
      </Flex>
    </TableCell>
  );
};

export default UsersTableActionsCell;
