import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import Home from "./Pages/Home.page";
import About from "./Pages/About.page";
import Error from "./Pages/Error.page";

export const projectRoot = "/Gal-Ben-Abu-s-HackerU-ReactModuleProject/";

const App = () => {
  document.body.classList.add("bg-teal-100", "dark:bg-slate-900");

  return (
    <>
      <BrowserRouter basename={projectRoot}>
        <main className="xs size-full bg-teal-100 dark:bg-slate-900">
          <CustomNavbar />
          <CustomFooter />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path={projectRoot} element={<Home />} />
            <Route path={projectRoot + "home"} element={<Home />} />
            <Route path={projectRoot + "about"} element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
