import { useDispatch, useSelector } from "react-redux";
import { TRootState } from "../store/store";
import axios, { AxiosError } from "axios";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { userActions } from "../store/userSlice";
import { Token } from "../types/token.t";
import { errorHandler } from "../utils/errorHandler";
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

export type CreateCardFormData = {
  title: string;
  subtitle: string;
  description: string;
  phone: string;
  email: string;
  web?: string;
  image: {
    url?: string;
    alt?: string;
  };
  address: {
    city: string;
    country: string;
    state?: string;
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

      dispatch(userActions.login(resUser.data));

      if (showToast) toast.success("Login Successful");

      navigate("../home");
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      console.error("Error submitting form", axiosError);

      errorHandler(axiosError, "Error submitting form at loginRequest.");
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
      errorHandler(axiosError, "Error submitting form at registerRequest.");
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
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      errorHandler(axiosError, "Error submitting form at userUpdateRequest.");
    } finally {
      unlockAfterDelay();
    }
  };

  const cardCreationRequest = async (data: CreateCardFormData) => {
    if (!user) {
      console.error("User not found");
      toast.error("User not found.");
      return;
    }

    if (!userToken) {
      console.error("User token not found");
      toast.error("User token not found.");
      return;
    }

    if (!user.isBusiness) {
      console.error("User is not a business");
      toast.error("User is not a business.");
      return;
    }

    try {
      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = userToken;

      const response = await axios.post(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`,
        data,
      );

      if (response.status === 200) {
        // TODO: To add later.
        // Updating the user data in the store.
        // dispatch(userActions.addCard(response.data));
      }

      toast.success("Card created successfully!");
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      const toastErrorMessage =
        axiosError.response &&
        typeof axiosError.response.data === "string" &&
        axiosError.response.data.includes(
          "Mongoose Error: E11000 duplicate key error collection: business_card_app.cards index: email_1 dup key:",
        )
          ? "Card with the same email already exists."
          : undefined;
      errorHandler(
        axiosError,
        "Error submitting form at cardCreationRequest.",
        toastErrorMessage,
      );
    }
  };

  const cardEditRequest = async (cardID: string, data: CreateCardFormData) => {
    try {
      axios.defaults.headers.common["x-auth-token"] = userToken;

      await axios.put(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardID}`,
        data,
      );

      toast.success("Card edited successfully!");
    } catch (error) {
      errorHandler(error as AxiosError, "Error trying to edit a card.");
    }
  };

  const cardDeleteRequest = async (cardID: string) => {
    try {
      axios.defaults.headers.common["x-auth-token"] = userToken;

      await axios.delete(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardID}`,
      );

      toast.success("Card deleted successfully!");
    } catch (error) {
      errorHandler(error as AxiosError, "Error trying to delete a card.");
    }
  };

  return {
    user,
    userToken,
    loginRequest,
    registerRequest,
    userUpdateRequest,
    cardCreationRequest,
    cardEditRequest,
    cardDeleteRequest,
  };
};

export default useAuth;
