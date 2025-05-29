import { useParams } from "react-router-dom";

const CardDetails = () => {
  const { cardID } = useParams();

  return (
    <div>
      <h1>Card Details</h1>
      <p>Card ID: {cardID}</p>
    </div>
  );
};

export default CardDetails;
