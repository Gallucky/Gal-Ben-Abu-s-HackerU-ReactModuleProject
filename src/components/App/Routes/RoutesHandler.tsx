import { Route, Routes } from "react-router-dom";
import Home from "../../../pages/Home.page";
import About from "../../../pages/About/About.page";
import Test from "../../../pages/Test.page";
import Login from "../../../pages/Login.page";
import Error from "../../../pages/Error.page";
import Registration from "../../../pages/Registration/Registration.page";
import RouteGuard from "./RouteGuard";
import Profile from "../../../pages/Profile/Profile.page";
import Favorites from "../../../pages/Favorites.page";
import CardDetails from "../../../pages/CardDetails/CardDetails.page";
import UserCreatedCards from "../../../pages/UserCreatedCards/UserCreatedCards.page";

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

        <Route
          path="/profile"
          element={
            <RouteGuard>
              <Profile />
            </RouteGuard>
          }
        />

        <Route
          path="/favorites"
          element={
            <RouteGuard allowLoggedUser>
              <Favorites />
            </RouteGuard>
          }
        />

        <Route
          path="/card-details/:cardID"
          element={
            <RouteGuard allowLoggedUser>
              <CardDetails />
            </RouteGuard>
          }
        />

        <Route
          path="my-cards"
          element={
            <RouteGuard allowBusiness>
              <UserCreatedCards />
            </RouteGuard>
          }
        />
        <Route path="/*" element={<Error />} />
      </Routes>
    </>
  );
};

export default RoutesHandler;
