import { FaPhoneAlt } from "react-icons/fa";

export type CardProps = {
  title: string;
  subTitle: string;
  description: string;
  phone: string;
  address: string;
  cardNumber: string;
  imgSrc: string;
  imgAlt: string;
};

const Card = (props: CardProps) => {
  const {
    title,
    subTitle,
    description,
    phone,
    address,
    cardNumber,
    imgSrc,
    imgAlt,
  } = props;
  return (
    <>
      <div className="card relative m-5 flex w-[250px] max-w-sm flex-col text-wrap rounded-lg border-2 border-black dark:border-slate-700 dark:text-white">
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: "250px", height: "200px" }}
          className="rounded-t-md"
        />
        {/* The card's text content. */}
        <div className="justify-content-center flex flex-col items-start p-3">
          <h2 className="font-[Raleway] text-3xl font-semibold capitalize">
            {title}
          </h2>
          <h3 className="font-[Raleway] text-xl font-semibold capitalize">
            {subTitle}
          </h3>
          <p className="text-fit text-wrap font-[Raleway]">{description}</p>
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
