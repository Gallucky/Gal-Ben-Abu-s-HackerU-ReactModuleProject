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

    // After updating the search word, running the search functionality.
    // This is done to ensure that the search is performed with the latest input value.
    // This will be implemented at the location where the search functionality is needed.
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
