import { useCallback, useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import { errorHandler } from "../utils/errorHandler";
import useAuth from "./useAuth";
import { TUser } from "../types/user.t";
import { toast } from "react-toastify";

const useUsers = () => {
  const [refetchUsers, setRefetchUsers] = useState(false);
  const [users, setUsers] = useState<TUser[]>([]);
  const { userToken } = useAuth();
  const refetch = () => setRefetchUsers(true);

  const getUsers = useCallback(async () => {
    try {
      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = userToken;

      const response = await axios.get(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
      );

      setUsers(response.data);
    } catch (error) {
      errorHandler(error as AxiosError, "Error getting users.");
    }
  }, [userToken]);

  useEffect(() => {
    getUsers();

    if (refetchUsers) {
      setRefetchUsers(false);
    }
  }, [getUsers, refetchUsers]);

  const userDeleteRequest = async (userID: string) => {
    try {
      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = userToken;

      await axios.delete(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${userID}`,
      );

      toast.success("User deleted successfully!");
    } catch (error) {
      errorHandler(error as AxiosError, "Error trying to delete a user.");
    }
  };

  const userBusinessPermissionChangeRequest = async (userID: string) => {
    try {
      // Setting the authentication token as an header of the request.
      axios.defaults.headers.common["x-auth-token"] = userToken;

      await axios.patch(
        `https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/${userID}`,
      );

      toast.success("User business permission changed successfully!");
    } catch (error) {
      errorHandler(
        error as AxiosError,
        "Error trying to change user business permission.",
      );
    }
  };

  return {
    users,
    getUsers,
    refetch,
    userDeleteRequest,
    userBusinessPermissionChangeRequest,
  };
};

export default useUsers;
