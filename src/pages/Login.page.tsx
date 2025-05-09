import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import { loginSchema } from "../validations/login.joi";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../components/layout/PageWrapper";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
    resolver: joiResolver(loginSchema),
  });

  const submitForm = async (data: FormData) => {
    try {
      const res = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users/login",
        data,
      );
      console.log("Success", res);
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

  return (
    <>
      {/* Page Wrapper */}
      <PageWrapper>
        {/* Content - Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className="content-form relative"
        >
          <h2 className="font-Raleway form-fluid-text form-page-title">
            Login Page
          </h2>
          <div className="flex flex-col gap-4">
            <FormInput
              {...register("email")}
              id={"email"}
              label={"Email"}
              state={errors.email ? "error" : "default"}
              labelClassName="text-xl select-none w-1/2"
            />
            {errors.email && (
              <p className="-mt-3 w-full place-self-center text-sm text-red-500">
                {errors.email.message}
              </p>
            )}
            <FormInput
              {...register("password")}
              id={"password"}
              label={"Password"}
              state={errors.password ? "error" : "default"}
              className="-mt-3"
              labelClassName="text-xl select-none w-1/2"
            />
            {errors.password && (
              <p className="-mt-3 w-full place-self-center text-wrap text-sm text-red-500">
                {errors.password.message}
              </p>
            )}
          </div>

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
