import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  Pagination,
} from "flowbite-react";
import { ReactNode, Suspense, useEffect, useState, useTransition } from "react";
import CustomSpinner from "../../components/utils/CustomSpinner";
import CreateCard from "../CreateCard/CreateCard.page";
import axios, { AxiosError } from "axios";
import useAuth from "../../hooks/useAuth";
import useCards from "../../hooks/useCards";
import useSearch from "../../hooks/useSearch";
import { CreateCardFormData } from "../../types/forms/CreateCardFormData";
import convertCardToTableRecord from "../../utils/convertCardToTableRecord";
import { errorHandler } from "../../utils/errorHandler";
import { useNavigate } from "react-router-dom";

const CardsTab = () => {
  const tableRecordsCountPerPage = 5;
  const { cards, getCards } = useCards();
  const { dataSearch } = useSearch();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [tableRecords, setTableRecords] = useState<ReactNode[]>([]);
  const [, startTransition] = useTransition();
  const { user, cardEditRequest, cardDeleteRequest } = useAuth();

  const filteredCards = dataSearch(cards);

  // Modal State.
  const [editCardTriggered, setEditCardTriggered] = useState(false);
  const [editCardID, setEditCardID] = useState<string | null>(null);
  const [editCardData, setEditCardData] = useState<CreateCardFormData | null>(
    null,
  );

  const handleEditCard = (cardID: string, isEditing: boolean) => {
    setEditCardID(cardID);
    setEditCardTriggered(isEditing);
  };

  const closeModal = () => {
    setEditCardID(null);
    setEditCardData(null);
    getCards();
  };

  const handleDeleteCard = (cardID: string, isDeleting: boolean) => {
    if (cardID && isDeleting) {
      cardDeleteRequest(cardID);
      handleCardsModified(true);
    }
  };

  useEffect(() => {
    if (!filteredCards) return;

    const totalPages = Math.ceil(
      filteredCards.length / tableRecordsCountPerPage,
    );

    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(totalPages);
    }
  }, [currentPage, filteredCards]);

  useEffect(() => {
    // If there are cards and they are loaded.
    if (filteredCards && filteredCards.length !== 0) {
      const maxValidIndex = currentPage * tableRecordsCountPerPage - 1;
      const minValidIndex = maxValidIndex - tableRecordsCountPerPage + 1;

      const cardsToRender = filteredCards.slice(
        minValidIndex,
        maxValidIndex + 1,
      );

      startTransition(() => {
        const records = cardsToRender.map((card) =>
          convertCardToTableRecord(
            card,
            user?._id,
            navigate,
            handleEditCard,
            handleDeleteCard,
          ),
        );
        setTableRecords(records);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, filteredCards, user?._id]);

  useEffect(() => {
    if (editCardID) {
      axios
        .get(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${editCardID}`,
        )
        .then((res) => setEditCardData(res.data))
        .catch((error) =>
          errorHandler(error as AxiosError, "Error getting card info."),
        );

      // Resetting the flag state so that the card can be edited again immediately if the user wants to.
      setEditCardTriggered(false);
    }
  }, [editCardID, editCardTriggered]);

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleCardsModified = (cardsModified: boolean) => {
    if (cardsModified) {
      getCards();
    }
  };

  const handleEditedCard = (data: CreateCardFormData) => {
    if (editCardID) {
      cardEditRequest(editCardID, data);
      handleCardsModified(true);
    }
  };

  return (
    <>
      <div className="w-full overflow-x-auto">
        <div className="min-w-max">
          <Table striped hoverable>
            <TableHead>
              <TableHeadCell className="md:text-base">Title</TableHeadCell>
              <TableHeadCell className="md:text-base">Subtitle</TableHeadCell>
              <TableHeadCell className="md:text-base">
                Description
              </TableHeadCell>
              <TableHeadCell className="md:text-base">Mail</TableHeadCell>
              <TableHeadCell className="md:text-base">
                Phone Number
              </TableHeadCell>
              <TableHeadCell className="md:text-base">Created At</TableHeadCell>
              <TableHeadCell className="md:text-base">Actions</TableHeadCell>
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
      {filteredCards && filteredCards.length > 0 && (
        <div className="mt-10 flex w-full items-center justify-center">
          <div className="flex max-md:min-w-max max-md:scale-75 max-md:place-self-center">
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(
                filteredCards.length / tableRecordsCountPerPage,
              )}
              onPageChange={onPageChange}
              layout="pagination"
              showIcons
            />
          </div>
        </div>
      )}

      {/* Edit Card Modal */}
      {editCardData && (
        <CreateCard
          initialValues={editCardData}
          onClose={closeModal}
          onEditedCard={handleEditedCard}
        />
      )}

      <CreateCard onCreatedCard={handleCardsModified} />
    </>
  );
};

export default CardsTab;
