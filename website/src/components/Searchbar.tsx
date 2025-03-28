import { IoSearch } from "react-icons/io5";
import "../styles/Searchbar.css";

type SearchbarProps = {
  width?: string;
  height?: string;

  borderColor?: string;
  backgroundColor?: string;
};

const Searchbar = (props: SearchbarProps) => {
  // If one or more of the following props were
  // not provided (undefined) then default to:
  const width = props.width ?? "200px";
  const height = props.height ?? "1.5rem";

  return (
    <>
      <div id="searchbar-wrapper" className="searchbar">
        <input
          type="text"
          placeholder="Search a card..."
          style={{
            width: width,
            height: height,
          }}
          className="w-full rounded-lg border border-gray-500 px-4 py-2 focus:border-gray-500 
                  focus:outline-none focus:ring-2 focus:ring-white
                  dark:border-gray-600 dark:bg-gray-800 dark:text-white 
                  dark:focus:ring-blue-400"
        />
        <IoSearch className="search-icon hover:cursor-pointer dark:fill-white" />
      </div>
    </>
  );
};

export default Searchbar;
