import { useForm } from "react-hook-form";
import { joiResolver } from "@hookform/resolvers/joi";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import { loginSchema } from "../validations/login.joi";
import PageWrapper from "../components/layout/PageWrapper";
import Flex from "../components/utils/Flex";
import useAuth from "../hooks/useAuth";
import PageForm from "../components/utils/PageForm";
import { LoginFormData } from "../types/forms/LoginFormData";

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
  const backgroundColors = "!bg-teal-400 dark:bg-teal-600";

  return (
    <>
      {/* Page Wrapper */}
      <PageWrapper>
        {/* Content - Form */}
        <PageForm
          title="Login Page"
          onSubmit={handleSubmit((data) => loginRequest(data))}
        >
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
              type="password"
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
        </PageForm>
      </PageWrapper>
    </>
  );
};

export default Login;
