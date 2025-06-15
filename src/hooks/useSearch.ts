import { useSelector } from "react-redux";
import { CardProps } from "../components/card/Card";
import { TRootState } from "../store/store";
import { TCardData } from "../types/card.t";
import { TUser } from "../types/user.t";

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

  const dataSearch = (cards: TCardData[]): TCardData[] | null => {
    if (!filterBy) return cards;

    // Creating a copy of the cards array to avoid mutating the original array.
    const cardsCopy = [...cards];

    // Filtering the cards based on the search input and each card's title, subtitle, and description.
    let filteredCards = cardsCopy.filter(
      (card) =>
        card.title.toLowerCase().includes(filterBy) ||
        card.subtitle.toLowerCase().includes(filterBy) ||
        card.description.toLowerCase().includes(filterBy),
    );

    let searchByField = "email:";

    // Search by email
    if (filterBy.startsWith(searchByField)) {
      filteredCards = cardsCopy.filter((card) =>
        card.email.includes(filterBy.slice(searchByField.length)),
      );
    }

    // Search by phone
    searchByField = "phone:";
    if (filterBy.startsWith(searchByField)) {
      filteredCards = cardsCopy.filter((card) =>
        card.phone.includes(filterBy.slice(searchByField.length)),
      );
    }

    if (filteredCards.length === 0) return null;

    return filteredCards;
  };

  const userSearch = (users: TUser[]): TUser[] | null => {
    if (!filterBy) return users;

    // Creating a copy of the users array to avoid mutating the original array.
    const usersCopy = [...users];

    // Filtering the users based on the search input and user properties like first name, middle name, and last name.
    let filteredUsers = usersCopy.filter(
      (user) =>
        user.name.first.toLowerCase().includes(filterBy) ||
        (user.name.middle &&
          user.name.middle.toLowerCase().includes(filterBy)) ||
        user.name.last.toLowerCase().includes(filterBy),
    );

    let searchByField = "email:";

    // Search by email
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        user.email.includes(filterBy.slice(searchByField.length)),
      );
    }

    // Search by phone
    searchByField = "phone:";
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        user.phone.includes(filterBy.slice(searchByField.length)),
      );
    }

    // Search by country
    searchByField = "country:";
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        user.address.country.includes(filterBy.slice(searchByField.length)),
      );
    }

    // Search by state
    searchByField = "state:";
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        user.address.state.includes(filterBy.slice(searchByField.length)),
      );
    }

    // Search by city
    searchByField = "city:";
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        user.address.city.includes(filterBy.slice(searchByField.length)),
      );
    }

    // Search by if the user is admin
    // To search admin users - searchByField = "is_admin:true"
    // To search non-admin users - searchByField = "is_admin:false"
    searchByField = "is_admin:";
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        String(user.isAdmin)
          .toLocaleLowerCase()
          .includes(filterBy.slice(searchByField.length).toLocaleLowerCase()),
      );
    }

    // Search by if the user is business
    // To search business users - searchByField = "is_business:true"
    // To search non-business users - searchByField = "is_business:false"
    searchByField = "is_business:";
    if (filterBy.startsWith(searchByField)) {
      filteredUsers = usersCopy.filter((user) =>
        String(user.isBusiness)
          .toLocaleLowerCase()
          .includes(filterBy.slice(searchByField.length).toLocaleLowerCase()),
      );
    }

    if (filteredUsers.length === 0) return null;

    return filteredUsers;
  };

  return { generalSearch, dataSearch, userSearch };
};

export default useSearch;
