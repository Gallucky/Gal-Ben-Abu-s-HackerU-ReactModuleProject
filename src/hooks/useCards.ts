import { useEffect, useState } from "react";
import { TCardData } from "../types/card.t";
import axios from "axios";

const useCards = () => {
  const [cards, setCards] = useState<TCardData[]>([]);

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

  useEffect(() => {
    getCards();
  }, []);

  return { cards, getCards };
};

export default useCards;
