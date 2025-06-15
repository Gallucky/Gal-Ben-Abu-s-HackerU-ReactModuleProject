import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  Pagination,
} from "flowbite-react";
import { ReactNode, Suspense, useEffect, useState, useTransition } from "react";
import CustomSpinner from "../../components/utils/CustomSpinner";
import useSearch from "../../hooks/useSearch";
import useUsers from "../../hooks/useUsers";
import convertUserToTableRecord from "../../utils/convertUserToTableRecord";

const UsersTab = () => {
  const tableRecordsCountPerPage = 5;
  const {
    users,
    refetch,
    userDeleteRequest,
    userBusinessPermissionChangeRequest,
  } = useUsers();
  const { userSearch } = useSearch();
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRecords, setTableRecords] = useState<ReactNode[]>([]);
  const [isUserBusiness, setIsUserBusiness] = useState<boolean>(false);
  const [, startTransition] = useTransition();

  const filteredUsers = userSearch(users);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleUsersModified = (usersModified: boolean) => {
    if (usersModified) {
      refetch();
    }
  };

  const handleDeleteUser = (userID: string, isDeleting: boolean) => {
    if (userID && isDeleting) {
      userDeleteRequest(userID);
      handleUsersModified(true);
    }
  };

  useEffect(() => {
    if (!filteredUsers) return;

    const totalPages = Math.ceil(
      filteredUsers.length / tableRecordsCountPerPage,
    );

    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, filteredUsers]);

  const handleBusinessPermissionChange = (
    userID: string,
    isBusiness: boolean,
  ) => {
    if (userID) {
      userBusinessPermissionChangeRequest(userID);
      setIsUserBusiness(isBusiness);
    }
  };

  useEffect(() => {
    // If there are cards and they are loaded.
    if (filteredUsers && filteredUsers.length !== 0) {
      const maxValidIndex = currentPage * tableRecordsCountPerPage - 1;
      const minValidIndex = maxValidIndex - tableRecordsCountPerPage + 1;

      const cardsToRender = filteredUsers.slice(
        minValidIndex,
        maxValidIndex + 1,
      );

      const records = cardsToRender.map((user) =>
        convertUserToTableRecord(
          user,
          (changed: boolean) =>
            handleBusinessPermissionChange(user._id, changed),
          handleDeleteUser,
        ),
      );

      startTransition(() => {
        setTableRecords(records);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filteredUsers, isUserBusiness]);

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-max">
          <Table striped hoverable>
            <TableHead>
              <TableHeadCell className="text-nowrap">First Name</TableHeadCell>
              <TableHeadCell className="text-nowrap">Middle Name</TableHeadCell>
              <TableHeadCell className="text-nowrap">Last Name</TableHeadCell>
              <TableHeadCell className="text-nowrap">Email</TableHeadCell>
              <TableHeadCell className="text-nowrap">Phone</TableHeadCell>
              <TableHeadCell className="text-nowrap">Country</TableHeadCell>
              <TableHeadCell className="text-nowrap">State</TableHeadCell>
              <TableHeadCell className="text-nowrap">City</TableHeadCell>
              <TableHeadCell className="text-nowrap">Is Admin</TableHeadCell>
              <TableHeadCell className="text-nowrap">Is Business</TableHeadCell>
              <TableHeadCell className="text-nowrap">Actions</TableHeadCell>
            </TableHead>
            <Suspense
              fallback={
                <CustomSpinner
                  size="md"
                  ariaLabel="Loading cards data for admin CRM view."
                />
              }
            >
              <TableBody>{tableRecords.map((record) => record)}</TableBody>
            </Suspense>
          </Table>
        </div>
      </div>

      {/* Pagination */}
      {filteredUsers && filteredUsers.length > 0 && (
        <div className="mt-10 flex w-full items-center justify-center">
          <div className="flex max-md:min-w-max max-md:scale-75 max-md:place-self-center">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(
                filteredUsers.length / tableRecordsCountPerPage,
              )}
              onPageChange={onPageChange}
              layout="pagination"
              showIcons
            />
          </div>
        </div>
      )}
    </>
  );
};

export default UsersTab;
