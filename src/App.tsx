import CustomNavbar from "./components/layout/CustomNavbar";
import { BrowserRouter } from "react-router-dom";
import CustomFooter from "./components/layout/CustomFooter";
import { ToastContainer } from "react-toastify";
import RoutesHandler from "./components/App/Routes/RoutesHandler";

const App = () => {
  document.body.classList.add("bg-teal-100", "dark:bg-slate-900");

  return (
    <>
      <BrowserRouter>
        <CustomNavbar />
        <CustomFooter />

        <ToastContainer />
        <RoutesHandler />
      </BrowserRouter>
    </>
  );
};

export default App;
