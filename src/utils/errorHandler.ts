import { AxiosError } from "axios";
import { toast } from "react-toastify";

export const errorHandler = (
  axiosError: AxiosError,
  logErrorMessage?: string,
  toastErrorMessage?: string,
) => {
  // If console error message has been provided then print the error to the console.
  if (logErrorMessage) console.error(logErrorMessage, axiosError);

  const axiosErrorResponse = axiosError.response;

  let errorMessage = "";

  if (toastErrorMessage) errorMessage = toastErrorMessage;
  else if (axiosErrorResponse && axiosErrorResponse.data)
    errorMessage = axiosErrorResponse.data as string;
  else if (axiosError.message.includes("status code 400"))
    errorMessage = "Invalid registration data";
  else if (axiosError.message) errorMessage = axiosError.message;
  else errorMessage = "Error Occurred";

  toast.error(errorMessage);
};
