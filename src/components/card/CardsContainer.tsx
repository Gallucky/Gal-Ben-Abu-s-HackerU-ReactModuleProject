import { Pagination } from "flowbite-react";
import Card, { CardProps } from "./Card";
import { useEffect, useState } from "react";
import { ViewMode } from "../../enums/ViewModes.Enum";
import CustomSpinner from "../utils/CustomSpinner";
import useAuth, { CreateCardFormData } from "../../hooks/useAuth";
import CardsNotFound from "../utils/CardsNotFound";
import axios, { AxiosError } from "axios";
import { errorHandler } from "../../utils/errorHandler";
import CreateCard from "../../pages/CreateCard/CreateCard.page";

type CardsContainerProps = {
  cards: CardProps[] | null;
  isCardsFiltered?: boolean;
};

const CardsContainer = (props: CardsContainerProps) => {
  const { user } = useAuth();
  const cards = props.cards;

  const getViewMode = (width: number) => {
    if (width < ViewMode.Tablet) return ViewMode.Mobile;
    if (width < ViewMode.PCAndLarger) return ViewMode.Tablet;
    return ViewMode.PCAndLarger;
  };

  const [viewMode, setViewMode] = useState(getViewMode(window.innerWidth));
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsAfterSplit, setCardsAfterSplit] = useState<CardProps[][]>([]);
  const cardsAmountToShowEachTime =
    viewMode === ViewMode.Mobile ? 3 : viewMode === ViewMode.Tablet ? 6 : 9;

  // Modal State.
  const [editCardID, setEditCardID] = useState<string | null>(null);
  const [editCardData, setEditCardData] = useState<CreateCardFormData | null>(
    null,
  );

  useEffect(() => {
    const handleResize = () => setViewMode(getViewMode(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const splitArray = (array: CardProps[], chunkLength: number) => {
    const resultArray = [];

    for (let i = 0; i < array.length; i += chunkLength) {
      resultArray.push(array.slice(i, i + chunkLength));
    }

    return resultArray;
  };

  // Checking when getting response of the cards request/s.
  useEffect(() => {
    if (cards !== null) {
      const splitResult = splitArray(cards, cardsAmountToShowEachTime);
      setCardsAfterSplit(splitResult);
      setCurrentPage(1);
    }
  }, [cards, viewMode, cardsAmountToShowEachTime]);

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
    }
  }, [editCardID]);

  // If there is no response value(s) / no cards found.
  if (cards === null || cards.length === 0)
    return (
      <CardsNotFound
        message="No cards found..."
        hint="Try to search for something else."
      />
    );

  if (cards.length === 0)
    return <CustomSpinner size="sm" text="Loading cards..." />;

  const onPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleEditCard = (cardID: string) => {
    setEditCardID(cardID);
  };

  const closeModal = () => {
    setEditCardID(null);
    setEditCardData(null);
  };

  return (
    <>
      {/* Cards Container */}
      <div
        className="m-[5vh] flex w-[95%] flex-col items-center justify-center place-self-center rounded-lg
                    border-8 border-gray-200 bg-gray-300 p-5
                    dark:border-slate-700 dark:bg-gray-900 md:w-auto"
      >
        {/* Cards Wrapper */}
        <div className="mb-2 grid w-fit gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/*
                The ?. is if the value before it is undefined or null then
                it returns it undefined and in this case nothing happens.
                */}
          {cardsAfterSplit.length > 0 &&
            cardsAfterSplit[currentPage - 1]?.map((card, index) => (
              <Card
                key={index}
                {...card}
                userConnected={user ? true : false}
                onEdit={handleEditCard}
              />
            ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(cards.length / cardsAmountToShowEachTime)}
            onPageChange={onPageChange}
            layout={viewMode === ViewMode.Mobile ? "table" : "pagination"}
            showIcons
          />
        </div>
      </div>

      {/* Edit Card Modal */}
      {editCardData && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          onClick={closeModal}
        >
          <div onClick={(e) => e.stopPropagation()}>
            <CreateCard
              initialValues={editCardData}
              onClose={closeModal}
              cardID={editCardID || ""}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default CardsContainer;
