import { Navbar, NavbarToggle, NavbarCollapse } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import DarkModeButton from "../other/DarkModeButton";
import { useEffect, useState } from "react";
import SearchBox from "../other/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../../store/store";
import { userActions } from "../../store/userSlice";
import { FiLogOut } from "react-icons/fi";
import LogoIcon from "../icons/LogoIcon";

const CustomNavbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state: TRootState) => state.userSlice.user);

  const [pathname, setPathName] = useState<string>("/");

  const location = useLocation();

  useEffect(() => {
    setPathName(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar fluid className={`navbar`}>
        <div className="flex">
          <LogoIcon size={32} className="mr-3 hover:fill-teal-600" />
          <span className="self-center whitespace-nowrap text-xl font-semibold hover:cursor-default hover:text-teal-600 dark:text-white dark:hover:cursor-default dark:hover:text-teal-600">
            <Link to="/" className="hover:cursor-default">
              BCards
            </Link>
          </span>
          <Link
            to="/about"
            className={`
              ${pathname === `/about` ? "text-teal-600 dark:text-teal-400" : "text-black dark:text-white"}
              custom-navbar-link ml-3 mt-1
            `}
          >
            About
          </Link>
        </div>
        <SearchBox className="hidden size-fit items-center justify-center border-2 md:flex" />
        <NavbarToggle />
        <NavbarCollapse>
          <div className={`navbar-collapse`}>
            <DarkModeButton />
            <SearchBox
              className="flex size-fit items-center justify-center border-2 md:hidden"
              inputClassName="h-8"
            />

            {/* Guest only */}
            {!user && (
              <>
                <Link
                  to="/registration"
                  className={`custom-navbar-link ${
                    pathname === "/registration"
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-black dark:text-white"
                  }`}
                >
                  Signup
                </Link>
                <Link
                  to="/login"
                  className={`custom-navbar-link ${
                    pathname === "/login"
                      ? "text-teal-600 dark:text-teal-400"
                      : "text-black dark:text-white"
                  }`}
                >
                  Login
                </Link>
              </>
            )}

            {/* User connected */}
            {user && (
              <div className="flex items-center gap-4">
                <Link
                  to="/favorites"
                  className={`custom-navbar-link dark:text-white`}
                >
                  Favorites
                </Link>

                <Link
                  to="/profile"
                  className={`custom-navbar-link dark:text-white`}
                >
                  Profile
                </Link>

                <Link
                  to="/home"
                  className={`custom-navbar-link gap-2 dark:text-white`}
                  onClick={() => {
                    dispatch(userActions.logout());
                  }}
                >
                  <abbr title="Signout">
                    <FiLogOut />
                  </abbr>
                </Link>
              </div>
            )}
          </div>
        </NavbarCollapse>
      </Navbar>
    </>
  );
};

export default CustomNavbar;
