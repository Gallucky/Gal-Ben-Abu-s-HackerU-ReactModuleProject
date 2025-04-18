import CustomNavbar from "./components/CustomNavbar";
import { HashRouter, Route, Routes } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import Home from "./Pages/Home.page";
import About from "./Pages/About.page";
import Error from "./Pages/Error.page";
import Test from "./Pages/Test.page";

const App = () => {
  document.body.classList.add("bg-teal-100", "dark:bg-slate-900");

  return (
    <>
      <HashRouter>
        <main className="xs size-full bg-teal-100 dark:bg-slate-900">
          <CustomNavbar />
          <CustomFooter />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/test" element={<Test />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </HashRouter>
    </>
  );
};

export default App;
