import axios from "axios";
import { useState, useEffect } from "react";
import PageWrapper from "../components/layout/PageWrapper";
import { TCardData } from "../types/card.t";
import { CardProps } from "../components/card/Card";
import CustomSpinner from "../components/utils/CustomSpinner";
import Flex from "../components/utils/Flex";

const Test = () => {
  const [memeCards, setCards] = useState<TCardData[]>();

  /**
   * This method will try to request the cards from the api.
   * If the request succeeds the server response will be saved in the state.
   */
  const getCards = async () => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
      );
      setCards(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  /**
   * This method is used to convert the cards received from the server / api to an array
   * of objects (@see CardProps) used to create and render all of the cards.
   * @see Card component.
   * @param responseData The cards in the response from the server / api.
   * @returns Array of objects containing all the necessary card component attributes - CardProps.
   */
  const getRelevantCardData = (responseData?: TCardData[]): CardProps[] => {
    if (!responseData) return [];

    const res: CardProps[] = [];
    responseData.map((item) => {
      const street = item.address.street ?? "Unknown";
      const city = item.address.city ?? "Unknown";
      const country = item.address.country ?? "Unknown";
      const cardNumber = item.__v ?? "Unknown";
      const description = item.description ?? "Unknown";
      const title = item.title ?? "Unknown";
      const subtitle = item.subtitle ?? "Unknown";
      const phone = item.phone ?? "Unknown";
      const imgSrc = item.image.url ?? "";
      const imgAlt = item.image.alt ?? "The card's image.";

      const relevantCardData: CardProps = {
        address: street + ", " + city + ", " + country,
        cardNumber: cardNumber,
        description: description,
        title: title,
        subTitle: subtitle,
        phone: phone,
        imgSrc: imgSrc,
        imgAlt: imgAlt,
      };

      res.push(relevantCardData);
    });

    return res;
  };

  // Requesting to get the cards from api on mount.
  useEffect(() => {
    getCards();
  }, []);

  document.body.style.overflowX = "hidden";

  // Getting the converted cards array ready for components creation.
  const memeCardsWithRelevantData = getRelevantCardData(memeCards);

  return (
    <PageWrapper>
      <Flex className="flex">
        <CustomSpinner size="xl" ariaLabel="Loading..." text="Loading..." />
      </Flex>
    </PageWrapper>
  );
};

export default Test;
