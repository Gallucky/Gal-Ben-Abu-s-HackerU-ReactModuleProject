import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import { loginSchema } from "../validations/login.joi";
import PageWrapper from "../components/layout/PageWrapper";
import Flex from "../components/utils/Flex";
import useAuth, { LoginFormData } from "../hooks/useAuth";

const Login = () => {
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

  const { loginRequest } = useAuth();

  const backgroundColors = "!bg-teal-300 dark:!bg-teal-600";

  return (
    <>
      {/* Page Wrapper */}
      <PageWrapper>
        {/* Content - Form */}
        <form
          onSubmit={handleSubmit((data) => loginRequest(data))}
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
