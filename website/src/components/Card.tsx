import { FaPhoneAlt } from "react-icons/fa";

type CardProps = {
  title: string;
  description: string;
  phone: string;
  address: string;
  cardNumber: string;
};

const Card = (props: CardProps) => {
  const { title, description, phone, address, cardNumber } = props;
  return (
    <>
      <div className="card w-fit">
        <img
          src="https://picsum.photos/200/250"
          alt="The card's image."
          className="rounded-md"
        />
        <h2 className="my-1 ml-[3px] font-[Raleway] text-3xl capitalize">
          {title}
        </h2>
        <p className="my-1 ml-[3px] font-[Raleway] text-xl capitalize">
          {description}
        </p>
        <hr style={{ width: "90%" }} />
        <span>
          <strong>Phone:</strong> {phone}
        </span>
        <span>
          <strong>Address:</strong>
          {address}
        </span>
        <span>
          <strong>Card Number:</strong> {cardNumber}
        </span>
        <FaPhoneAlt />
      </div>
    </>
  );
};

export default Card;
