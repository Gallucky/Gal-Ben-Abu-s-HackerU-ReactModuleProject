import axios from "axios";
import { CardProps } from "../components/card/Card";
import { useEffect, useState } from "react";
import Header from "../components/other/Header";
import Divider from "../components/other/Divider";
import CardsContainer from "../components/card/CardsContainer";
import { TCardData } from "../types/card.t";
// import useAuth from "../hooks/useAuth";
import { convertCardDataToProps } from "../utils/cardDataPropsConvertor";
import useSearch from "../hooks/useSearch";
import useAuth from "../hooks/useAuth";

const Home = () => {
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
      console.log("response.data", response.data);
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

    return convertCardDataToProps(responseData, user?._id);
  };

  // Requesting to get the cards from api on mount.
  useEffect(() => {
    getCards();
  }, []);

  document.body.style.overflowX = "hidden";

  // Getting the converted cards array ready for components creation.
  const memeCardsWithRelevantData = getRelevantCardData(memeCards);

  const { generalSearch } = useSearch();
  const filteredCards = generalSearch(memeCardsWithRelevantData);

  return (
    <>
      <div className="h-screen w-screen py-20">
        <Header
          title="Cards Page"
          paragraph="Here you can find business cards from all categories."
        />
        <Divider />
        <CardsContainer cards={filteredCards} />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default Home;
