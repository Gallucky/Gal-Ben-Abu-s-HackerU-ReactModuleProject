import axios from "axios";
import { useState, useEffect } from "react";
import CardsContainer from "../components/card/CardsContainer";
import Divider from "../components/other/Divider";
import Header from "../components/other/Header";
import useAuth from "../hooks/useAuth";
import useSearch from "../hooks/useSearch";
import { TCardData } from "../types/card.t";
import { convertCardDataToProps } from "../utils/cardDataPropsConvertor";
import { CardProps } from "../components/card/Card";
import CardsNotFound from "../components/utils/CardsNotFound";

const Favorites = () => {
  const { user } = useAuth();
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

  const getFavoriteCardsData = (responseData?: TCardData[]): CardProps[] => {
    if (!responseData || !user) return [];

    // Filtering only the cards that the user liked.
    const res: TCardData[] = responseData.filter((item) =>
      item.likes.includes(user._id),
    );

    return convertCardDataToProps(res, user._id);
  };

  // Requesting to get the cards from api on mount.
  useEffect(() => {
    getCards();
  }, []);

  document.body.style.overflowX = "hidden";

  const { generalSearch } = useSearch();

  // Getting the converted cards array ready for components creation.
  const favoritesCardsData = getFavoriteCardsData(memeCards);

  const filteredCards = generalSearch(favoritesCardsData);

  return (
    <>
      <Header
        title="Favorites Page"
        paragraph="Here you can find all your liked and bookmarked cards."
      />
      <Divider />
      {filteredCards && filteredCards.length !== 0 && (
        <CardsContainer cards={filteredCards} />
      )}
      {filteredCards && filteredCards.length === 0 && (
        <CardsNotFound
          message="No favorite cards found..."
          hint="Like some cards to see them here."
        />
      )}
      {!filteredCards && (
        <CardsNotFound
          message="No favorite cards with the search term found..."
          hint="Try to search for something else."
        />
      )}
      <br />
      <br />
      <br />
    </>
  );
};

export default Favorites;
