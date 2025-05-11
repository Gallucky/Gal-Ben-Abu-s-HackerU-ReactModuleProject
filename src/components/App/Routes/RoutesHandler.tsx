import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home.page";
import About from "../../../pages/About.page";
import Test from "../../../pages/Test.page";
import Login from "../../../pages/Login.page";
import Error from "../../../pages/Error.page";
import Registration from "../../../pages/Registration.page";
import RouteGuard from "./RouteGuard";

const RoutesHandler = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <RouteGuard allowAdmin>
          <Route path="/test" element={<Test />} />
        </RouteGuard>
        <RouteGuard guestOnly>
          <Route path="/login" element={<Login />} />
        </RouteGuard>
        <RouteGuard guestOnly>
          <Route path="/registration" element={<Registration />} />
        </RouteGuard>
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RoutesHandler;
