import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { TCardData } from "../../types/card.t";
import { errorHandler } from "../../utils/errorHandler";
import CardsContainer from "../../components/card/CardsContainer";
import { CardProps } from "../../components/card/Card";
import { convertCardDataToProps } from "../../utils/cardDataPropsConvertor";
import Header from "../../components/other/Header";
import Divider from "../../components/other/Divider";
import CreateCard from "../CreateCard/CreateCard.page";

const UserCreatedCards = () => {
  const { user, userToken } = useAuth();
  const [cards, setCards] = useState<TCardData[]>([]);
  const [cardsProps, setCardsProps] = useState<CardProps[]>([]);
  const [createdNewCardFlag, setCreatedNewCardFlag] = useState(false);

  useEffect(() => {
    const getUserCreatedCards = async () => {
      try {
        if (userToken === null) return;
        axios.defaults.headers.common["x-auth-token"] = userToken;

        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards",
        );

        setCards(response.data);
        console.log("response.data", response.data);
      } catch (error) {
        errorHandler(error as AxiosError, "Error getting user created cards.");
      }
    };

    getUserCreatedCards();

    if (createdNewCardFlag) {
      // Resetting the flag after the card
      // is created and handling the creation of a new card.
      setCreatedNewCardFlag(false);
    }
  }, [userToken, createdNewCardFlag]);

  useEffect(() => {
    setCardsProps(convertCardDataToProps(cards, user?._id));
  }, [cards]);

  const handleCreateCard = (createdNewCard: boolean) => {
    setCreatedNewCardFlag(createdNewCard);
  };

  return (
    <>
      <Header
        title="My Cards"
        paragraph="Here are all the cards created by you."
      />
      <Divider />

      <CardsContainer cards={cardsProps} />
      <CreateCard onCreatedCard={handleCreateCard} />
    </>
  );
};

export default UserCreatedCards;
