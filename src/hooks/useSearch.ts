import { useSelector } from "react-redux";
import { CardProps } from "../components/card/Card";
import { TRootState } from "../store/store";

const useSearch = () => {
  const filterBy = useSelector(
    (state: TRootState) => state.searchSlice.searchWord,
  ).toLowerCase();

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

  return { generalSearch };
};

export default useSearch;
