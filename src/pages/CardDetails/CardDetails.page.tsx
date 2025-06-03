import { Navigate, useNavigate, useParams } from "react-router-dom";
import PageWrapper from "../../components/layout/PageWrapper";
import PageForm from "../../components/utils/PageForm";
import useContent from "../../hooks/useContent";
import { useEffect, useState } from "react";
import { TCardData } from "../../types/card.t";
import { capitalizeString } from "../../utils/misc";
import { FaHeart } from "react-icons/fa";
import { clamp } from "../../utils/textSize";

const CardDetails = () => {
  const navigate = useNavigate();
  const { cardID } = useParams();
  const { getCardInfoByID } = useContent();
  const [cardData, setCardData] = useState<TCardData | null>(null);

  useEffect(() => {
    const loadCardDetails = async () => {
      // Card was not found.
      if (cardID && cardData === undefined) {
        navigate("/");
      }

      if (cardID && cardData === null) {
        const cardInfo = await getCardInfoByID(cardID);
        console.log("cardInfo", cardInfo);
        setCardData(cardInfo);
      }
    };

    loadCardDetails();
  }, [cardID, cardData]);

  if (!cardID) return <Navigate to="/*" />;

  return (
    <PageWrapper className="">
      <PageForm
        title={capitalizeString(cardData?.title ?? "")}
        titleClassName="underline"
        className="card-details-shadow card-details"
      >
        <h2
          className="text-form-fluid-text -my-2 text-center font-semibold"
          style={{ ...clamp("1.1rem", "5vw", "2rem") }}
        >
          {capitalizeString(cardData?.subtitle ?? "")}
        </h2>
        <div className="details-section">
          <div className="image-section">
            <img
              src={cardData?.image.url}
              alt={cardData?.image.alt}
              className="card-details-image"
            />

            {/* Created at and likes count part */}
            <div className="relative flex w-full flex-col items-center">
              <p className="ml-0 text-center">
                {cardData?.createdAt.toString().split("T")[0]}
                {" | "}
                {cardData?.createdAt.toString().split("T")[1].split(".")[0]}
              </p>
              <p className="flex items-center gap-1.5">
                <FaHeart color="red" />
                <span className="align-middle font-bold">
                  {cardData?.likes.length}
                </span>
              </p>
            </div>
          </div>

          {/* Info: */}
          <div className="info-section">
            <p>
              <span className="font-bold underline">Description:</span>
              <br />
              {capitalizeString(cardData?.description ?? "")}
            </p>
            <p>
              <span className="font-bold underline">Email:</span>
              <br />
              {capitalizeString(cardData?.email ?? "")}
            </p>
            <p>
              <span className="font-bold underline">Phone:</span>
              <br />
              {capitalizeString(cardData?.phone ?? "")}
            </p>
            {/* TODO: link opens in new tab but with the prefix of the current url location */}
            <p>
              <span className="font-bold underline">Website:</span>
              <br />
              <a
                href={
                  cardData?.web.includes("https://") ||
                  cardData?.web.includes("http://")
                    ? cardData?.web
                    : `https://${cardData?.web}`
                }
                target="_blank"
              >
                {cardData?.web}
              </a>
            </p>
            <p>
              <span className="font-bold underline">Business Number:</span>
              <br />
              {cardData?.bizNumber}
            </p>
            <p className="flex flex-col">
              <span className="font-bold underline">Address:</span>
              <span>
                ⤷&nbsp;<b>State:</b>&nbsp;{cardData?.address.state ?? "---"}
              </span>
              <span>
                ⤷&nbsp;<b>Country:</b>&nbsp;{cardData?.address.country}
              </span>
              <span>
                ⤷&nbsp;<b>City:</b>&nbsp;{cardData?.address.city}
              </span>
              <span>
                ⤷&nbsp;<b>Street:</b>&nbsp;{cardData?.address.street}
              </span>
              <span>
                ⤷&nbsp;<b>House Number:</b>&nbsp;{cardData?.address.houseNumber}
              </span>
              <span>
                ⤷&nbsp;<b>Zip:</b>&nbsp;{cardData?.address.zip}
              </span>
            </p>
          </div>
        </div>
      </PageForm>
    </PageWrapper>
  );
};

export default CardDetails;
