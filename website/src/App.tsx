import { Navbar, NavbarBrand, NavbarLink, NavbarToggle } from "flowbite-react";
import Searchbar from "./components/Searchbar";
import Divider from "./components/Divider";
import DarkModeButton from "./components/DarkModeButton";

function App() {
  return (
    <>
      <main className="h-screen w-screen bg-teal-100 dark:bg-slate-900">
        <Navbar fluid className="list-none bg-teal-400">
          <div className="flex items-center gap-5 text-center">
            <NavbarBrand href="#" className="">
              <img
                src="https://picsum.photos/50"
                className="mr-3 h-6 sm:h-9"
                alt="Flowbite React Logo"
              />
              <NavbarLink className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                BCard
              </NavbarLink>
            </NavbarBrand>
            <NavbarLink className="text-center hover:cursor-pointer">
              About
            </NavbarLink>
          </div>

          <Searchbar height="2rem" width="25rem" />

          <div className="mr-5 flex items-center gap-5">
            {/* <DarkThemeToggle className="hover:bg-transparent" /> */}
            <DarkModeButton />
            <NavbarLink className="font-semibold hover:cursor-pointer">
              Signup
            </NavbarLink>
            <NavbarLink className="font-semibold hover:cursor-pointer">
              Login
            </NavbarLink>
          </div>

          <NavbarToggle />
        </Navbar>
        <Divider />
      </main>
    </>
  );
}

export default App;
