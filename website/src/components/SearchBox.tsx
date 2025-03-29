import { IoSearch } from "react-icons/io5";
import "../styles/Searchbox.css";

type SearchBoxProps = {
  width?: string;
  height?: string;

  borderColor?: string;
  backgroundColor?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  // If one or more of the following props were
  // not provided (undefined) then default to:
  const width = props.width ?? "200px";
  const height = props.height ?? "1.5rem";

  return (
    <>
      <div id="searchbox-wrapper" className="searchbox">
        <input
          type="text"
          placeholder="Search a card..."
          style={{
            width: width,
            height: height,
          }}
          className="
                  search-box-dark-mode-styling
                  search-box-focus-styling
                  rounded-lg
                  border border-gray-500 
                  px-4 py-2
                  "
        />
        <IoSearch className="search-icon hover:cursor-pointer dark:fill-white" />
      </div>
    </>
  );
};

export default SearchBox;
