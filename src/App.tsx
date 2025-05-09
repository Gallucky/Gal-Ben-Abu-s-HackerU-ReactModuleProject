import CustomNavbar from "./components/layout/CustomNavbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import CustomFooter from "./components/layout/CustomFooter";
import Home from "./pages/Home.page";
import About from "./pages/About.page";
import Error from "./pages/Error.page";
import Test from "./pages/Test.page";
import Login from "./pages/Login.page";
import { ToastContainer } from "react-toastify";
import Registration from "./pages/Registration.page";

const App = () => {
  document.body.classList.add("bg-teal-100", "dark:bg-slate-900");

  return (
    <>
      <HashRouter>
        <main className="xs size-full bg-teal-100 dark:bg-slate-900">
          <CustomNavbar />
          <ToastContainer />
          <CustomFooter />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  );
};

export default App;
