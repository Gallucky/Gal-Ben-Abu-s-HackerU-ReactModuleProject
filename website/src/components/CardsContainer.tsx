import Card, { CardProps } from "./Card";

type CardsContainerProps = {
  cards?: CardProps[];
};

const CardsContainer = (props: CardsContainerProps) => {
  const cards = props.cards ?? [];
  return (
    <>
      {/* Cards Container */}
      <div className="m-[5vh] flex justify-center ">
        {/* Cards Wrapper */}
        <div
          className="grid w-[90vw] justify-items-center gap-5 rounded-lg border-8 border-gray-200 bg-gray-300 p-3 dark:border-slate-700 dark:bg-gray-900"
          style={{
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          }}
        >
          {cards.map((card, index) => (
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
      </div>
    </>
  );
};

export default CardsContainer;
