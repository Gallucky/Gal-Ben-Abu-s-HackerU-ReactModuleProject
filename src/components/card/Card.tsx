import { FaHeart, FaPhoneAlt } from "react-icons/fa";
import useContent from "../../hooks/useContent";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdOutlineModeEditOutline } from "react-icons/md";

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
  userCardCreator?: boolean;
  isUserAdmin?: boolean;
  onEdit?: (cardID: string, toEdit: boolean) => void;
  onDelete?: (cardID: string, toDelete: boolean) => void;
  onUnliked?: (cardID: string, toUnliked: boolean) => void;
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
    userCardCreator = false,
    isUserAdmin = false,
    onEdit = () => {},
    onDelete = () => {},
    onUnliked = () => {},
  } = props;

  const { likeDislikeCard } = useContent();
  const navigate = useNavigate();

  const cardClickedHandler = () => {
    navigate(`/card-details/${_id}`);
  };

  const editCardHandler = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onEdit(_id, true);
  };

  const deleteCardHandler = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    onDelete(_id, true);
  };

  const unlikedCardHandler = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation();
    likeDislikeCard(e, _id);
    onUnliked(_id, true);
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
          <div className="absolute bottom-5 mt-5 flex w-full justify-evenly overflow-hidden">
            <a href={"tel:" + phone} onClick={(e) => e.stopPropagation()}>
              <FaPhoneAlt className="animate-tilt-hover absolute left-5 hover:cursor-pointer hover:text-blue-700" />
            </a>

            {/* Edit Card */}
            {userConnected && userCardCreator && (
              <MdOutlineModeEditOutline
                className={`animate-tilt-hover hover:cursor-pointer hover:text-yellow-300`}
                onClick={editCardHandler}
              />
            )}

            {/* Delete Card */}
            {userConnected && (userCardCreator || isUserAdmin) && (
              <MdDelete
                className={`animate-tilt-hover hover:cursor-pointer hover:text-slate-700`}
                onClick={deleteCardHandler}
              />
            )}

            {userConnected && !alreadyLiked && (
              <FaHeart
                className={`animate-tilt-hover hover:cursor-pointer hover:text-red-500`}
                onClick={(e) => likeDislikeCard(e, _id)}
              />
            )}

            {userConnected && alreadyLiked && (
              <FaHeart
                className={`animate-tilt-hover text-red-500 hover:cursor-pointer`}
                onClick={unlikedCardHandler}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
