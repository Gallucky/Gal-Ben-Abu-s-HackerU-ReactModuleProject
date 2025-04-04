import { Navbar, NavbarToggle, NavbarCollapse } from "flowbite-react";
import { Link } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";

const CustomNavbar = () => {
  return (
    <>
      <Navbar
        fluid
        className="fixed start-0 top-0 z-20 w-full border-b border-gray-600 bg-cyan-100 dark:border-gray-600 dark:bg-slate-800"
      >
        <div className="flex">
          <img
            src="https://picsum.photos/200"
            className="mr-3 h-6 sm:h-9"
            alt="Flowbite React Logo"
          />
          <span className="self-center whitespace-nowrap text-xl font-semibold hover:cursor-default hover:text-teal-600 dark:text-white dark:hover:cursor-default dark:hover:text-teal-600">
            BCards
          </span>
          <Link to={"/about"} className="custom-navbar-link ml-3 mt-1">
            About
          </Link>
        </div>
        <NavbarToggle />
        <NavbarCollapse>
          <div className="mx-2.5 hidden gap-2.5 md:flex">
            <DarkModeButton />
            <Link to={"/"} className="custom-navbar-link">
              Home
            </Link>
            <Link to={"/services"} className="custom-navbar-link">
              Services
            </Link>
          </div>

          <div
            id="navbar-collapse-content"
            className="flex h-fit w-full flex-col gap-2.5 self-center border-t border-black p-2.5 dark:border-t dark:border-white md:hidden"
          >
            <DarkModeButton />
            <Link to={"/"} className="custom-navbar-link">
              Home
            </Link>
            <Link to={"/services"} className="custom-navbar-link">
              Services
            </Link>
          </div>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
