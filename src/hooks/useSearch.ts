import { useSelector } from "react-redux";
import { CardProps } from "../components/card/Card";
import { TRootState } from "../store/store";
import useAuth from "./useAuth";
import { TCardData } from "../types/card.t";
import { convertCardDataToProps } from "../utils/cardDataPropsConvertor";

const useSearch = () => {
  const filterBy = useSelector(
    (state: TRootState) => state.searchSlice.searchWord,
  ).toLowerCase();
  const { user } = useAuth();

  const generalSearch = (cards: CardProps[]): CardProps[] | null => {
    if (!filterBy) return cards;

    // Creating a copy of the cards array to avoid mutating the original array.
    const cardsCopy = [...cards];

    // Filtering the cards based on the search input and each card's title, subtitle, and description.
    const filteredCards = cardsCopy.filter(
      (card) =>
        card.title.toLowerCase().includes(filterBy) ||
        card.subTitle.toLowerCase().includes(filterBy) ||
        card.description.toLowerCase().includes(filterBy),
    );

    if (filteredCards.length === 0) return null;

    return filteredCards;
  };

  const getFavoriteCardsData = (responseData?: TCardData[]): CardProps[] => {
    if (!responseData || !user) return [];

    // Filtering only the cards that the user liked.
    const res: TCardData[] = responseData.filter((item) =>
      item.likes.includes(user._id),
    );

    return convertCardDataToProps(res);
  };

  return { generalSearch, getFavoriteCardsData };
};

export default useSearch;
