import DarkModeButton from "./DarkModeButton";
import NavbarLink, { NavbarLinkProps } from "./NavbarLink";
import SearchBox from "./SearchBox";

/* eslint-disable tailwindcss/classnames-order */
type NavbarProps = {
  brandImgSrc?: string;
  brandImgAlt?: string;

  links?: NavbarLinkProps[];
};

const Navbar = (props: NavbarProps) => {
  const linksArray = props.links ?? [];

  const brandImgSrc =
    props.brandImgSrc ?? "https://flowbite.com/docs/images/logo.svg";
  const brandImgAlt = props.brandImgAlt ?? "Flowbite Logo";

  return (
    <>
      <nav className="fixed start-0 top-0 z-20 w-full border-b border-gray-200 bg-white dark:border-gray-600 dark:bg-gray-900">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          {/* Navbar Icon/Logo */}
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={brandImgSrc} className="h-8" alt={brandImgAlt} />
            <span className="self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
              BCards
            </span>
            <NavbarLink href="#" text="About" />
          </a>
          <div className="flex space-x-3 md:order-1 md:space-x-0 rtl:space-x-reverse">
            <SearchBox />
          </div>
          {/* Navbar Links */}
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <DarkModeButton className="mr-4" />
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 bg-gray-50 p-4 font-medium dark:border-gray-700 dark:bg-gray-800 md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 md:dark:bg-gray-900 rtl:space-x-reverse">
              {linksArray.map((navbarLink, index) => (
                <NavbarLink
                  key={index}
                  href={navbarLink.href}
                  text={navbarLink.text}
                />
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
