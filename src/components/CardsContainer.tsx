import { Pagination } from "flowbite-react";
import Card, { CardProps } from "./Card";
import { useEffect, useState } from "react";

type CardsContainerProps = {
  cards?: CardProps[];
};

const CardsContainer = (props: CardsContainerProps) => {
  const cards = props.cards ?? [];
  const cardsAmountToShowEachTime = 9;

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
  }, [cards]);

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
      <div className="m-[5vh] flex w-fit flex-col justify-center self-center justify-self-center rounded-lg border-8 border-gray-200 bg-gray-300 dark:border-slate-700 dark:bg-gray-900">
        {/* Cards Wrapper */}
        <div
          className="grid w-fit justify-items-center gap-3"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
          }}
        >
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
            showIcons
          />
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
