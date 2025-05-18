import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import useAuth from "./useAuth";

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
        const axiosError: AxiosError = error as AxiosError;
        console.error("Error submitting form", axiosError);

        const axiosErrorResponse = axiosError.response;

        const errorMessage =
          axiosErrorResponse && axiosErrorResponse.data
            ? (axiosErrorResponse.data as string)
            : axiosError.message.includes("status code 400")
              ? "Invalid registration data"
              : axiosError.message ?? "Error Occurred";

        toast.error(errorMessage);
      }
    }
  };

  return {
    likeDislikeCard,
  };
};

export default useContent;
