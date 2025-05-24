import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../store/store";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userActions } from "../store/userSlice";
import { Token } from "../types/token.t";

export type LoginFormData = { email: string; password: string };

export type RegisterFormData = {
  name: { first: string; middle: string; last: string };
  phone: string;
  email: string;
  password: string;
  image: { url: string; alt: string };
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

export type UpdateUserFormData = {
  name: { first: string; middle?: string; last: string };
  phone: string;
  image: { url: string; alt: string };
  address: {
    state?: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
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
      const resUser = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${parsedToken._id}`,
      );

      console.log("User data", resUser.data);

      dispatch(userActions.login(resUser.data));

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
      loginRequest({ email: data.email, password: data.password }, false);
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

  const userUpdateRequest = async (
    data: UpdateUserFormData,
    lockMethod: (locked: boolean) => void,
    unlockDelay: number,
  ) => {
    const unlockAfterDelay = () => {
      setTimeout(() => {
        lockMethod(false);
      }, unlockDelay);
    };

    if (!user) {
      console.error("User not found");
      unlockAfterDelay();
      return;
    }

    if (!userToken) {
      console.error("User token not found");
      unlockAfterDelay();
      return;
    }

    try {
      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = userToken;

      // Parsing the token.
      const parsedToken = jwtDecode(userToken) as Token;

      const response = await axios.put(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${parsedToken._id}`,
        data,
      );

      if (response.status === 200) {
        // Updating the user data in the store.
        dispatch(userActions.setUser(response.data));
      }
      unlockAfterDelay();
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
      unlockAfterDelay();
    }
  };

  return { user, userToken, loginRequest, registerRequest, userUpdateRequest };
};

export default useAuth;
