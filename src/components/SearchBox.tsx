import { HiOutlineSearch } from "react-icons/hi";

export type SearchBoxProps = {
  className?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  const className = props.className ?? "";
  return (
    <>
      <div className={`search-box ${className}`}>
        <HiOutlineSearch className="search-icon" />

        <input placeholder="Search..." />
      </div>
    </>
  );
};

export default SearchBox;
