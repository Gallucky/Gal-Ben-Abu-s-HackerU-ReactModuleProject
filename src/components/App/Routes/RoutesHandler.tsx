import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import RouteGuard from "./RouteGuard";
import CustomSpinner from "../../utils/CustomSpinner";
import { lazyImportPage } from "../../../utils/lazyImport";

// Lazy imports
const Home = lazyImportPage("Home");
const About = lazyImportPage("About", true);
const Test = lazyImportPage("Test");
const Login = lazyImportPage("Login");
const Error = lazyImportPage("Error");
const Registration = lazyImportPage("Registration", true);
const Profile = lazyImportPage("Profile", true);
const Favorites = lazyImportPage("Favorites");
const CardDetails = lazyImportPage("CardDetails", true);
const UserCreatedCards = lazyImportPage("UserCreatedCards", true);
const CRM = lazyImportPage("CRM", true);

const RoutesHandler = () => {
  return (
    <>
      <Suspense fallback={<CustomSpinner ariaLabel="Loading..." />}>
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
              <RouteGuard>
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
          <Route
            path="/crm"
            element={
              <RouteGuard allowAdmin>
                <CRM />
              </RouteGuard>
            }
          ></Route>
          <Route path="/*" element={<Error />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default RoutesHandler;
