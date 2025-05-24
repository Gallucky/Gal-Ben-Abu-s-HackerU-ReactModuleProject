import CustomNavbar from "./components/layout/CustomNavbar";
import { BrowserRouter } from "react-router-dom";
import CustomFooter from "./components/layout/CustomFooter";
import { ToastContainer } from "react-toastify";
import RoutesHandler from "./components/App/Routes/RoutesHandler";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { userActions } from "./store/userSlice";
import { Token } from "./types/token.t";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  document.body.classList.add("bg-teal-100", "dark:bg-slate-900");

  // Checking if the user is already connected.
  useEffect(() => {
    const checkUserIsLoggedIn = async () => {
      const token = localStorage.getItem("token");
      // If there is no token exit the method.
      if (!token) return;

      // Parsing the token.
      const parsedToken = jwtDecode(token) as Token;

      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = token;

      // Getting the user data.
      const user = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${parsedToken._id}`,
      );

      if (user) {
        dispatch(userActions.autoLogin(user.data));
      }
    };

    checkUserIsLoggedIn();
  }, [dispatch]);

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
