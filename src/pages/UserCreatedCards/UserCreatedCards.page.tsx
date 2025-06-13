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
import useSearch from "../../hooks/useSearch";
import CardsNotFound from "../../components/utils/CardsNotFound";
import CustomSpinner from "../../components/utils/CustomSpinner";

const UserCreatedCards = () => {
  const { user, userToken } = useAuth();
  const [cards, setCards] = useState<TCardData[]>([]);
  const [cardsChangeFlag, setCardsChangeFlag] = useState(false);
  const [loading, setLoading] = useState(true);

  /**
   * This method is used to convert the cards received from the server / api to an array
   * of objects (@see CardProps) used to create and render all of the cards.
   * @see Card component.
   * @param responseData The cards in the response from the server / api.
   * @returns Array of objects containing all the necessary card component attributes - CardProps.
   */
  const getRelevantCardData = (responseData?: TCardData[]): CardProps[] => {
    if (!responseData) return [];

    return convertCardDataToProps(responseData, user?._id);
  };

  useEffect(() => {
    const getUserCreatedCards = async () => {
      try {
        if (userToken === null) return;
        axios.defaults.headers.common["x-auth-token"] = userToken;

        const response = await axios.get(
          "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/my-cards",
        );

        setCards(response.data);
        setLoading(false);
      } catch (error) {
        errorHandler(error as AxiosError, "Error getting user created cards.");
      }
    };

    getUserCreatedCards();

    if (cardsChangeFlag) {
      // Resetting the flag after the card
      // is created and handling the creation of a new card.
      setCardsChangeFlag(false);
    }
  }, [cardsChangeFlag, userToken]);

  const myCardsProps = getRelevantCardData(cards);

  const { generalSearch } = useSearch();
  const filteredMyCardsProps = generalSearch(myCardsProps);

  const handleCreateCard = (createdNewCard: boolean) => {
    setCardsChangeFlag(createdNewCard);
  };

  const handleEditedCard = (editedCard: boolean) => {
    setCardsChangeFlag(editedCard);
  };

  const handleDeletedCard = (deletedCard: boolean) => {
    setCardsChangeFlag(deletedCard);
  };

  return (
    <>
      <Header
        title="My Cards"
        paragraph="Here are all the cards created by you."
      />
      <Divider />
      {!loading &&
        filteredMyCardsProps &&
        filteredMyCardsProps.length !== 0 && (
          <CardsContainer
            cards={filteredMyCardsProps}
            onCardsEdited={handleEditedCard}
            onCardsDeleted={handleDeletedCard}
          />
        )}
      {!loading &&
        filteredMyCardsProps &&
        filteredMyCardsProps.length === 0 && (
          <CardsNotFound
            message="There are no cards that were created by you..."
            hint="Create new business cards and they will be listed here."
          />
        )}
      {!loading && !filteredMyCardsProps && (
        <CardsNotFound
          message="There are no cards that were created by you and with the search term..."
          hint="Try to search for something else."
          messageClassName="max-w-[50rem] mx-5"
        />
      )}
      {loading && (
        <CustomSpinner
          size="sm"
          ariaLabel="Loading cards created by you..."
          text="Loading cards created by you..."
        />
      )}
      <CreateCard onCreatedCard={handleCreateCard} />
    </>
  );
};

export default UserCreatedCards;
