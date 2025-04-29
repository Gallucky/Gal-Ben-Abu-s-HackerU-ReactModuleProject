import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { loginSchema } from "../validations/login.joi";
import axios from "axios";

type FormData = {
  email: string;
  password: string;
};

const Login = () => {
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
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <>
      {/* Content Wrapper */}
      <div className="content-wrapper flex flex-col">
        {/* Content - Form */}
        <form
          onSubmit={handleSubmit(submitForm)}
          className="content-form relative"
        >
          <h2 className="font-Raleway fluid-text login-page-title">
            Login Page
          </h2>
          <FormInput
            {...register("email")}
            id={"email"}
            label={"Email"}
            state={errors.email ? "error" : "default"}
            labelClassName="text-xl select-none w-1/2"
          />
          {errors.email && (
            <p className="-mt-3 place-self-center text-sm text-red-500">
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
            <p className="-mt-3 ml-12 w-2/5 text-sm text-red-500">
              {errors.password.message}
            </p>
          )}

          <FormButton text="Login" disabled={!isValid} type="submit" />
        </form>
      </div>
    </>
  );
};

export default Login;
