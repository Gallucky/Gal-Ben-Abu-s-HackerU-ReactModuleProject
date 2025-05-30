import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import useContent from "../../hooks/useContent";
import { useNavigate } from "react-router-dom";

export type CardProps = {
  _id: string;
  title: string;
  subTitle: string;
  description: string;
  phone: string;
  address: string;
  cardNumber: number;
  imgSrc: string;
  imgAlt: string;
  userConnected?: boolean;
  alreadyLiked?: boolean;
};

const Card = (props: CardProps) => {
  const {
    _id,
    title,
    subTitle,
    description,
    phone,
    address,
    cardNumber,
    imgSrc,
    imgAlt,
    userConnected = false,
    alreadyLiked = false,
  } = props;

  const { likeDislikeCard } = useContent();
  const navigate = useNavigate();

  const cardClickedHandler = () => {
    navigate(`/card-details/${_id}`);
  };

  return (
    <>
      <div
        onClick={cardClickedHandler}
        className="card relative flex h-[425px] w-[250px] max-w-sm flex-col text-wrap rounded-lg border-2 border-black hover:scale-[0.99] hover:cursor-pointer hover:shadow-lg hover:shadow-slate-400 hover:transition-all dark:border-slate-700 dark:text-white"
      >
        <img
          src={imgSrc}
          alt={imgAlt}
          style={{ width: "250px", height: "200px" }}
          className="select-none rounded-t-md"
        />
        {/* The card's text content. */}
        <div className="justify-content-center flex flex-col items-start p-3">
          <h2 className="font-JetBrains-Mono singleline-ellipsis overflow-hidden text-2xl font-extrabold capitalize">
            {title}
          </h2>
          <h3
            className="singleline-ellipsis overflow-hidden text-xl font-semibold capitalize"
            style={{ fontFamily: "JetBrains Mono" }}
          >
            {subTitle}
          </h3>
          <p className="text-fit singleline-ellipsis font-[JetBrains Mono] text-wrap">
            {description}
          </p>
          <hr style={{ width: "90%" }} />
          <span className="overflow-hidden">
            <span className="font-semibold">Phone:</span> {phone}
          </span>
          <span className="singleline-ellipsis">
            <span className="font-semibold">Address:</span> {address}
          </span>
          <span className="overflow-hidden">
            <span className="font-semibold">Card Number:</span> {cardNumber}
          </span>
          <div className="mt-5 flex w-full justify-evenly">
            <a href={"tel:" + phone}>
              <FaPhoneAlt className="absolute left-5 hover:cursor-pointer" />
            </a>
            {userConnected && !alreadyLiked && (
              <FaHeart
                className={`animate-tilt-hover absolute right-5 hover:cursor-pointer hover:text-red-500`}
                onClick={(e) => likeDislikeCard(e, _id)}
              />
            )}

            {userConnected && alreadyLiked && (
              <FaHeart
                className={`animate-tilt-hover absolute right-5 text-red-500 hover:cursor-pointer`}
                onClick={(e) => likeDislikeCard(e, _id)}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
