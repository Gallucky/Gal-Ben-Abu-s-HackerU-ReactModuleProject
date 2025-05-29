import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import useAuth from "./useAuth";
import { errorHandler } from "../utils/errorHandler";

const useContent = () => {
  const { userToken } = useAuth();

  const likeDislikeCard = async (
    e: React.MouseEvent<SVGElement>,
    cardID: string,
  ) => {
    const likeButton = e.currentTarget;
    const card = likeButton.closest(".card");
    const liking = !likeButton.classList.contains("text-red-500");

    if (card && likeButton) {
      try {
        // Setting the authentication token as an header of the request.
        axios.defaults.headers.common["x-auth-token"] = userToken;

        const res = await axios.patch(
          `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards/${cardID}`,
        );

        console.log("Response from like/dislike request:", res.data);

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
    likeDislikeCard,
    getCardInfoByID,
  };
};

export default useContent;
