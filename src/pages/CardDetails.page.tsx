import { Navigate, useParams } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import PageForm from "../components/utils/PageForm";
import useContent from "../hooks/useContent";
import { useEffect, useState } from "react";
import { TCardData } from "../types/card.t";
import { capitalizeString } from "../utils/misc";
import { FaHeart } from "react-icons/fa";

const CardDetails = () => {
  const { cardID } = useParams();
  const { getCardInfoByID } = useContent();
  const [cardData, setCardData] = useState<TCardData | null>(null);

  useEffect(() => {
    const loadCardDetails = async () => {
      if (cardID && cardData === null) {
        const cardInfo = await getCardInfoByID(cardID);
        console.log("cardInfo", cardInfo);
        setCardData(cardInfo);
      }
    };

    loadCardDetails();
  }, [cardData, cardID, getCardInfoByID]);

  if (!cardID) return <Navigate to="/*" />;

  return (
    <PageWrapper>
      <PageForm
        title={capitalizeString(cardData?.title ?? "")}
        titleClassName="underline"
      >
        <h2 className="-my-2 text-center font-semibold sm:text-lg md:text-2xl">
          {capitalizeString(cardData?.subtitle ?? "")}
        </h2>

        <img
          src={cardData?.image.url}
          alt={cardData?.image.alt}
          className="w-1/2 rounded-lg md:w-fit"
          style={{
            boxShadow: "8px 8px 29px 0px rgba(2,6,23,0.75)",
          }}
        />

        {/* Info: */}
        <div className="mt-4 flex flex-col items-center gap-2 md:items-start">
          <p className="w-3/4 md:w-fit">
            <span className="font-bold underline">Description:</span>
            <br />
            {capitalizeString(cardData?.description ?? "")}
          </p>
          <p className="w-3/4 md:w-fit">
            <span className="font-bold underline">Email:</span>
            <br />
            {capitalizeString(cardData?.email ?? "")}
          </p>
          <p className="w-3/4 md:w-fit">
            <span className="font-bold underline">Phone:</span>
            <br />
            {capitalizeString(cardData?.phone ?? "")}
          </p>
          {/* TODO: link opens in new tab but with the prefix of the current url location */}
          <p className="w-3/4 md:w-fit">
            <span className="font-bold underline">Website:</span>
            <br />
            <a href={cardData?.web} target="_blank">
              {cardData?.web}
            </a>
          </p>

          <p className="w-3/4">
            <span className="font-bold underline">Business Number:</span>
            <br />
            {cardData?.bizNumber}
          </p>

          <p className="w-3/4">
            <span className="font-bold underline">Address:</span>
            <br />
            State: {cardData?.address.state ?? "---"}
            <br />
            Country: {cardData?.address.country}
            <br />
            City: {cardData?.address.city}
            <br />
            Street: {cardData?.address.street}
            <br />
            House Number: {cardData?.address.houseNumber}
            <br />
            Zip: {cardData?.address.zip}
          </p>
          <div className="relative flex w-full">
            <p className="absolute right-3">
              {cardData?.createdAt.toString().split("T")[0]}
              {" | "}
              {cardData?.createdAt.toString().split("T")[1].split(".")[0]}
            </p>
            <p className="ml-3 flex gap-1">
              <FaHeart color="red" size={20} />
              <span className="font-bold">{cardData?.likes.length}</span>
            </p>
          </div>
        </div>
      </PageForm>
    </PageWrapper>
  );
};

export default CardDetails;
