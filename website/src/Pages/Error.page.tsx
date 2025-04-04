import { BiSolidError } from "react-icons/bi";
import Header from "../components/Header";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center">
        <div className="xs-error error-page-wrapper bg-yellow-50">
          <Header
            title="404 - Error"
            paragraph="Sorry, the page you are looking for is not available."
            titleClassName="text-red-700 font-bold p-0 max-w-[90%] header-title"
            paragraphClassName="text-yellow-400 font-semibold header-paragraph max-w-full text-center mb-4"
          />
          <BiSolidError
            size={"25vh"}
            className="error-icon m-0 text-yellow-500"
          />
          <div className="flex flex-col gap-3 text-black hover:text-teal-600 dark:text-white">
            <Button className="m-4">
              <Link to={"/"}>Go Home</Link>
            </Button>
            <Link
              to={"/about"}
              className="text-center text-black hover:text-teal-600 dark:text-white"
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
