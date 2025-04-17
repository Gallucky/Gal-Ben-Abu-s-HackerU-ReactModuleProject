import Divider from "../components/Divider";
import Header from "../components/Header";

const Test = () => {
  return (
    <>
      <Header
        title="Test Page"
        paragraph="This is a page dedicated for testing and will be removed."
      />
      <Divider />

      <div className="flex h-[75vh] w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
        <div className="size-1/2 rounded bg-teal-500 p-6 shadow-lg ring-4 ring-teal-300 ring-opacity-50 dark:ring-teal-400 dark:ring-opacity-60">
          <h2 className="font-Raleway -mt-2 text-center text-3xl font-semibold text-black dark:text-white">
            Login Page
          </h2>
        </div>
      </div>
    </>
  );
};

export default Test;
