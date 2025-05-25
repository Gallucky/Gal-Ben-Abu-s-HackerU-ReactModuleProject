import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { searchActions } from "../../store/searchSlice";

export type SearchBoxProps = {
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  const dispatch = useDispatch();
  const { className, iconClassName, inputClassName } = props;

  const handleSearch = (e: React.FormEvent<HTMLInputElement>) => {
    // Extracting the current value in each change and sending it to the search slice.
    dispatch(searchActions.setSearchWord(e.currentTarget.value));

    // Filter Logic Code: TODO
    // const filterBy = state.searchWord.toLowerCase();
    // const cardsToFilter = action.payload;

    // return cardsToFilter.filter(
    //   (card) =>
    //     card.title.toLowerCase().includes(filterBy) ||
    //     card.subTitle.toLowerCase().includes(filterBy),
    // );
  };

  return (
    <>
      <div className={`search-box ${className}`}>
        <HiOutlineSearch className={`search-icon ${iconClassName}`} />

        <input
          placeholder="Search..."
          className={`${inputClassName}`}
          onInput={handleSearch}
        />
      </div>
    </>
  );
};

export default SearchBox;
