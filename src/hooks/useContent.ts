import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
import { errorHandler } from "../utils/errorHandler";
import React from "react";

const useContent = () => {
  const { userToken } = useAuth();

  /**
   * This method will try to request the cards from the api.
   * If the request succeeds the server response will be saved in the state.
   */
  const getCards = async () => {
    try {
      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards",
      );
      return response.data;
    } catch (error) {
      errorHandler(error as AxiosError, "Error getting cards.");
    }
  };

  const likeDislikeCard = async (
    e: React.MouseEvent<SVGElement>,
    cardID: string,
  ) => {
    // This will stop the card's onClick event from firing...
    e.stopPropagation();

    const likeButton = e.currentTarget;
    const card = likeButton.closest(".card");
    const liking = !likeButton.classList.contains("text-red-500");

    if (card && likeButton) {
      try {
        // Setting the authentication token as an header of the request.
        axios.defaults.headers.common["x-auth-token"] = userToken;

        await axios.patch(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardID}`,
        );

        likeButton.classList.toggle("text-red-500");

        likeButton.classList.add(
          "transition-transform",
          "duration-300",
          liking ? "scale-125" : "scale-90",
        );

        setTimeout(() => {
          likeButton.classList.remove("scale-125", "scale-90");
        }, 300);

        toast.success(
          (liking ? "Liked" : "Disliked") + " the card successfully",
        );
      } catch (error) {
        errorHandler(error as AxiosError, "Error liking/unlinking a card.");
      }
    }
  };

  const getCardInfoByID = async (cardID: string) => {
    try {
      const response = await axios.get(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardID}`,
      );

      return response.data;
    } catch (error) {
      const axiosError = error as AxiosError;
      const toastErrorMessage =
        axiosError.status === 404 ? "Card not found" : undefined;

      errorHandler(axiosError, "Error getting card info.", toastErrorMessage);
    }
  };

  return {
    getCards,
    likeDislikeCard,
    getCardInfoByID,
  };
};

export default useContent;
