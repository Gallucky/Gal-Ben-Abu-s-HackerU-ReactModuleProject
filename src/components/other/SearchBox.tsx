import { HiOutlineSearch } from "react-icons/hi";

export type SearchBoxProps = {
  className?: string;
  iconClassName?: string;
  inputClassName?: string;
};

const SearchBox = (props: SearchBoxProps) => {
  const { className, iconClassName, inputClassName } = props;

  return (
    <>
      <div className={`search-box ${className}`}>
        <HiOutlineSearch className={`search-icon ${iconClassName}`} />

        <input placeholder="Search..." className={`${inputClassName}`} />
      </div>
    </>
  );
};

export default SearchBox;
