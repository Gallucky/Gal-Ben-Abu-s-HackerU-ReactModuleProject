import { Navbar, NavbarToggle, NavbarCollapse } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import DarkModeButton from "./DarkModeButton";
import { useEffect, useState } from "react";
import SearchBox from "./SearchBox";
import { projectRoot } from "../App";

const CustomNavbar = () => {
  const [pathname, setPathName] = useState<string>("/");

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

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
            <Link to={projectRoot} className="hover:cursor-default">
              BCards
            </Link>
          </span>
          <Link
            to={projectRoot + "about"}
            className={`
              ${pathname === `${projectRoot}about` ? "text-teal-600 dark:text-teal-400" : "text-black dark:text-white"}
              custom-navbar-link ml-3 mt-1
            `}
          >
            About
          </Link>
        </div>
        <SearchBox className="flex size-fit items-center justify-center border-2" />
        <NavbarToggle />
        <NavbarCollapse>
          <div className="mx-2.5 hidden gap-2.5 md:flex">
            <DarkModeButton />
            <Link
              to={projectRoot + "registration"}
              className={`
                custom-navbar-link
                ${pathname === `${projectRoot}registration` ? "text-teal-600 dark:text-teal-400" : "text-black dark:text-white"}
              `}
            >
              Signup
            </Link>
            <Link
              to={projectRoot + "login"}
              className={`
                custom-navbar-link
                ${pathname === `${projectRoot}login` ? "text-teal-600 dark:text-teal-400" : "text-black dark:text-white"}
              `}
            >
              Login
            </Link>
          </div>

          <div
            id="navbar-collapse-content"
            className="flex h-fit w-full flex-col gap-2.5 self-center border-t border-black p-2.5 dark:border-t dark:border-white md:hidden"
          >
            <DarkModeButton />
            <Link
              to={projectRoot + "registration"}
              className="custom-navbar-link"
            >
              Signup
            </Link>
            <Link to={projectRoot + "login"} className="custom-navbar-link">
              Login
            </Link>
          </div>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
