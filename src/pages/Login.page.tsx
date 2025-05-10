import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import { loginSchema } from "../validations/login.joi";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";
import Flex from "../components/utils/Flex";
import { jwtDecode } from "jwt-decode";
import { userActions } from "../store/userSlice";
import { useDispatch } from "react-redux";
import { Token } from "../types/token.t";

type LoginFormData = {
  email: string;
  password: string;
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: joiResolver(loginSchema),
  });

  const submitForm = async (data: LoginFormData) => {
    try {
      const token = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        data,
      );

      console.log("Login Successful");

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

      toast.success("Login Successful");
      navigate("../home");
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      console.error("Error submitting form", axiosError);

      const errorMessage = axiosError.message.includes("status code 400")
        ? "Invalid email or password"
        : axiosError.message ?? "Error Occurred";
      toast.error(errorMessage);
    }
  };

  const backgroundColors = "!bg-teal-300 dark:!bg-teal-600";

  return (
    <>
      {/* Page Wrapper */}
      <PageWrapper>
        {/* Content - Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className={`content-form ${backgroundColors} relative`}
        >
          <h2 className="font-Raleway form-fluid-text form-page-title">
            Login Page
          </h2>
          <Flex direction="col" className="gap-4">
            <FormInput
              {...register("email")}
              id={"email"}
              label={"Email"}
              errorMessage={errors.email ? errors.email.message : ""}
              labelClassName={`text-xl select-none w-1/2 ${backgroundColors}`}
            />

            <FormInput
              {...register("password")}
              id={"password"}
              label={"Password"}
              state={errors.password ? "error" : "default"}
              className="-mt-3"
              labelClassName={`text-xl select-none w-1/2 ${backgroundColors}`}
              errorMessage={errors.password ? errors.password.message : ""}
            />
          </Flex>

          <FormButton
            text="Login"
            disabled={!isValid}
            type="submit"
            className="!w-1/2"
          />
        </form>
      </PageWrapper>
    </>
  );
};

export default Login;
