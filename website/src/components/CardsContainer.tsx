import Card, { CardProps } from "./Card";

type CardsContainerProps = {
  cards?: CardProps[];
};

const CardsContainer = (props: CardsContainerProps) => {
  const cards = props.cards ?? [];
  return (
    <>
      {/* Cards Container */}
      <div className="m-[5vh] flex justify-center">
        {/* Cards Wrapper */}
        <div
          className="justify-content-center w-50 grid max-w-6xl gap-4 rounded-lg border-8 border-gray-200 bg-gray-300 px-16"
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CardsContainer;
