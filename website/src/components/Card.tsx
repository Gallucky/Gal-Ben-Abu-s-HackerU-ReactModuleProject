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
      <div className="card relative m-5 flex w-fit flex-col rounded-lg border-2 border-black">
        <img src="https://picsum.photos/200/200" alt="The card's image." />
        {/* The card's text content. */}
        <div className="justify-content-center flex flex-col items-start p-3">
          <h2 className="font-[Raleway] text-3xl font-semibold capitalize">
            {title}
          </h2>
          <p className="font-[Raleway] text-xl capitalize">{description}</p>
          <hr style={{ width: "90%" }} />
          <span>
            <span className="font-semibold">Phone:</span> {phone}
          </span>
          <span>
            <span className="font-semibold">Address:</span> {address}
          </span>
          <span>
            <span className="font-semibold">Card Number:</span> {cardNumber}
          </span>
          <a href={"tel:" + phone}>
            <FaPhoneAlt className="absolute bottom-3 right-3 hover:cursor-pointer" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Card;
