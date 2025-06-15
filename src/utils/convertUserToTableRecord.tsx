import { TableCell, TableRow } from "flowbite-react";
import UsersTableActionsCell from "../components/utils/UsersTableActionsCell";
import { TUser } from "../types/user.t";
import { HiOutlineXMark } from "react-icons/hi2";
import { IoCheckmarkOutline } from "react-icons/io5";
import CustomToggleSwitch from "./CustomToggleSwitch";

const convertUserToTableRecord = (
  user: TUser,
  onChangeUserBusinessPermissions: (changed: boolean) => void,
  onDeleteAction?: (userID: string, isDeleting: boolean) => void,
) => {
  const tableCellsClassName =
    "border-l-white truncate whitespace-nowrap  text-gray-900 dark:text-white max-w-[153px] overflow-hidden w-1/6";

  const tableCellTitle = (column: string) => {
    return column.length > 100 ? column.substring(0, 100) + "..." : column;
  };

  return (
    <TableRow key={user._id} className="overflow-scroll">
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.name.first)}
      >
        {user.name.first}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(
          user.name.middle && user.name.middle.length > 0
            ? user.name.middle
            : "—",
        )}
      >
        {user.name.middle && user.name.middle.length > 0
          ? user.name.middle
          : "—"}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.name.last)}
      >
        {user.name.last}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.email)}
      >
        {user.email}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.phone)}
      >
        {user.phone}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.address.country)}
      >
        {user.address.country}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.address.state)}
      >
        {user.address.state}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.address.city)}
      >
        {user.address.city}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title={tableCellTitle(user.isAdmin ? "True" : "False")}
      >
        {user.isAdmin ? (
          <IoCheckmarkOutline className="size-8 place-self-center text-green-500" />
        ) : (
          <HiOutlineXMark className="size-8 place-self-center text-red-500" />
        )}
      </TableCell>
      <TableCell
        className={`${tableCellsClassName}`}
        title="Change User Business Permissions Status"
      >
        <CustomToggleSwitch
          checked={user.isBusiness}
          onChange={onChangeUserBusinessPermissions}
          className="place-self-center"
          color="green-500"
          id="user-business-permissions-switch"
        />
      </TableCell>
      <UsersTableActionsCell
        userID={user._id}
        onDelete={onDeleteAction}
        userAdmin={user.isAdmin}
      />
    </TableRow>
  );
};

export default convertUserToTableRecord;
