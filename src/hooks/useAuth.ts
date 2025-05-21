import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../store/store";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userActions } from "../store/userSlice";
import { Token } from "../types/token.t";

export type LoginFormData = {
  email: string;
  password: string;
};

export type RegisterFormData = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  image: {
    url: string;
    alt: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: string;
    zip: string;
  };
  isBusiness: boolean;
};

const useAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state: TRootState) => state.userSlice.user);
  const userToken = localStorage.getItem("token");

  const loginRequest = async (
    data: LoginFormData,
    showToast: boolean = true,
  ) => {
    try {
      const token = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        data,
      );

      // Saving the token in local storage.
      localStorage.setItem("token", token.data);

      // Parsing the token.
      const parsedToken = jwtDecode(token.data) as Token;

      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = token.data;

      // Getting the user data.
      const user = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${parsedToken._id}`,
      );

      dispatch(userActions.login(user.data));

      if (showToast) toast.success("Login Successful");

      navigate("../home");
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      console.error("Error submitting form", axiosError);

      const errorMessage = axiosError.message.includes("status code 400")
        ? "Invalid email or password"
        : (axiosError.message ?? "Error Occurred");
      toast.error(errorMessage);
    }
  };

  const registerRequest = async (data: RegisterFormData) => {
    try {
      await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
        data,
      );

      toast.success("Registration Successful");

      // Logging in the user after registration.
      loginRequest(
        {
          email: data.email,
          password: data.password,
        },
        false,
      );
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      console.error("Error submitting form", axiosError);

      const axiosErrorResponse = axiosError.response;

      const errorMessage =
        axiosErrorResponse && axiosErrorResponse.data
          ? (axiosErrorResponse.data as string)
          : axiosError.message.includes("status code 400")
            ? "Invalid registration data"
            : (axiosError.message ?? "Error Occurred");

      toast.error(errorMessage);
    }
  };

  return {
    user,
    userToken,
    loginRequest,
    registerRequest,
  };
};

export default useAuth;
