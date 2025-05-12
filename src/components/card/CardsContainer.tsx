import { Pagination } from "flowbite-react";
import Card, { CardProps } from "./Card";
import { useEffect, useState } from "react";
import { ViewMode } from "../../enums/ViewModes.Enum";

type CardsContainerProps = {
  cards?: CardProps[];
};

const CardsContainer = (props: CardsContainerProps) => {
  const cards = props.cards ?? [];

  const getViewMode = (width: number) => {
    if (width <= ViewMode.Mobile) return ViewMode.Mobile;
    if (width <= ViewMode.Tablet) return ViewMode.Tablet;
    return ViewMode.PCAndLarger;
  };

  const [viewMode, setViewMode] = useState(getViewMode(window.innerWidth));

  useEffect(() => {
    const handleResize = () => setViewMode(getViewMode(window.innerWidth));
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [viewMode]);

  const cardsAmountToShowEachTime =
    viewMode === ViewMode.Mobile ? 3 : viewMode === ViewMode.Tablet ? 6 : 9;

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsAfterSplit, setCardsAfterSplit] = useState<CardProps[][]>([]);

  const splitArray = (array: CardProps[], chunkLength: number) => {
    const resultArray = [];

    for (let i = 0; i < array.length; i += chunkLength) {
      resultArray.push(array.slice(i, i + chunkLength));
    }

    return resultArray;
  };

  // Checking when getting response of the cards request/s.
  useEffect(() => {
    const splitResult = splitArray(cards, cardsAmountToShowEachTime);
    setCardsAfterSplit(splitResult);
    setCurrentPage(1);
  }, [cards, viewMode, cardsAmountToShowEachTime]);

  console.log(
    "splitArray(cards, cardsAmountToShowEachTime):",
    splitArray(cards, cardsAmountToShowEachTime),
  );

  const onPageChange = (page: number) => {
    console.log("Page number:", page);
    setCurrentPage(page);
  };

  return (
    <>
      {/* Cards Container */}
      <div
        className="m-[5vh] flex w-fit flex-col justify-center self-center
                  justify-self-center rounded-lg border-8 border-gray-200
                  bg-gray-300 p-5 dark:border-slate-700 dark:bg-gray-900"
      >
        {/* Cards Wrapper */}
        <div className="my-5 grid w-full !grid-cols-1 place-items-center justify-items-center gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* 
              The ?. is if the value before it is undefined or null then
              it returns it undefined and in this case nothing happens.
            */}
          {cardsAfterSplit.length > 0 &&
            cardsAfterSplit[currentPage - 1]?.map((card, index) => (
              <Card
                key={index}
                address={card.address}
                cardNumber={card.cardNumber}
                description={card.description}
                phone={card.phone}
                title={card.title}
                subTitle={card.subTitle}
                imgSrc={card.imgSrc}
                imgAlt={card.imgAlt}
              />
            ))}
        </div>

        <div className="flex items-center justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(cards.length / cardsAmountToShowEachTime)}
            onPageChange={onPageChange}
            layout={viewMode === ViewMode.Mobile ? "table" : "navigation"}
            showIcons
          />
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
