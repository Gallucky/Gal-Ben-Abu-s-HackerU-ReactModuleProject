import CustomNavbar from "./components/CustomNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomFooter from "./components/CustomFooter";
import Home from "./Pages/Home.page";
import About from "./Pages/About.page";
import Error from "./Pages/Error.page";

const App = () => {
  document.body.classList.add("bg-teal-100", "dark:bg-slate-900");

  return (
    <>
      <BrowserRouter>
        <main className="xs size-full bg-teal-100 dark:bg-slate-900">
          <CustomNavbar />
          <CustomFooter />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </main>
      </BrowserRouter>
    </>
  );
};

export default App;
