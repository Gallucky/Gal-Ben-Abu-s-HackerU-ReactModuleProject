import {
  Pagination,
  TabItem,
  Table,
  TableBody,
  TableHead,
  TableHeadCell,
  Tabs,
} from "flowbite-react";
import Divider from "../../components/other/Divider";
import Header from "../../components/other/Header";
import { RxCardStack } from "react-icons/rx";
import { FaUsers } from "react-icons/fa";
import useCards from "../../hooks/useCards";
import { ReactNode, Suspense, useEffect, useState, useTransition } from "react";
import useViewMode from "../../hooks/useViewMode";
import convertCardToTableRecord from "../../utils/convertCardToTableRecord";
import CustomSpinner from "../../components/utils/CustomSpinner";

const CRM = () => {
  const tableRecordsCountPerPage = 5;
  const { cards } = useCards();
  const [currentPage, setCurrentPage] = useState(1);
  const { isPCAndLarger } = useViewMode();
  const [shownCards, setShownCards] = useState(cards);
  const [tableRecords, setTableRecords] = useState<ReactNode[]>([]);
  const [, startTransition] = useTransition();

  useEffect(() => {
    // If there are cards and they are loaded.
    if (cards.length !== 0) {
      const maxValidIndex = currentPage * tableRecordsCountPerPage - 1;
      const minValidIndex = maxValidIndex - tableRecordsCountPerPage + 1;
      const cardsToRender = cards.filter((_card, index) => {
        return index <= maxValidIndex && index >= minValidIndex;
      });

      startTransition(() => {
        setShownCards(cardsToRender);
      });
    }
  }, [cards, currentPage]);

  useEffect(() => {
    if (shownCards && shownCards.length !== 0) {
      const records: ReactNode[] = [];
      shownCards.forEach((shownCard) => {
        records.push(convertCardToTableRecord(shownCard));
      });

      setTableRecords(records);
    }
  }, [shownCards]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Header
        title="CRM Page"
        paragraph="Welcome admin! This is the CRM page. Here you can manage your business cards."
      />
      <Divider />
      <div className="page-wrapper">
        <Tabs
          style="default"
          className="w-3/4"
          theme={{
            tablist: {
              base: "flex !w-full",
              tabitem: {
                base: "flex items-center justify-center rounded-t-lg p-4 text-sm font-medium first:ml-0 focus:outline-none focus:!ring-0 disabled:cursor-not-allowed disabled:text-gray-400 disabled:dark:text-gray-500",
              },
            },
          }}
        >
          <TabItem active title="Cards" icon={RxCardStack}>
            <Table striped hoverable border={1}>
              <TableHead>
                <TableHeadCell className="text-base">Title</TableHeadCell>
                <TableHeadCell className="text-base">Subtitle</TableHeadCell>
                <TableHeadCell className="text-base">Description</TableHeadCell>
                <TableHeadCell className="text-base">Mail</TableHeadCell>
                <TableHeadCell className="text-base">
                  Phone Number
                </TableHeadCell>
                <TableHeadCell className="text-base">Created At</TableHeadCell>
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

            {/* Pagination */}
            <div className="mt-10 flex items-center justify-center">
              <Pagination
                currentPage={currentPage}
                totalPages={Math.ceil(cards.length / tableRecordsCountPerPage)}
                onPageChange={onPageChange}
                layout={isPCAndLarger ? "table" : "pagination"}
                showIcons
              />
            </div>
          </TabItem>
          <TabItem title="Users" icon={FaUsers}></TabItem>
        </Tabs>
      </div>
    </>
  );
};

export default CRM;
