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
        <Route
          path="/test"
          element={
            <RouteGuard allowAdmin>
              <Test />
            </RouteGuard>
          }
        />
        <Route
          path="/login"
          element={
            <RouteGuard guestOnly>
              <Login />
            </RouteGuard>
          }
        />
        <Route
          path="/registration"
          element={
            <RouteGuard guestOnly>
              <Registration />
            </RouteGuard>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RoutesHandler;
