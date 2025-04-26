import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const Login = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div className="content-wrapper flex flex-col">
        {/* Content - Form */}
        <form className="content-form relative">
          <h2 className="font-Raleway fluid-text login-page-title">
            Login Page
          </h2>
          <FormInput
            id={"email"}
            label={"Email"}
            color="default"
            className="-mb-1"
            labelClassName="text-xl select-none w-1/2"
          />
          <FormInput
            id={"password"}
            label={"Password"}
            color="default"
            className="-mt-1"
            labelClassName="text-xl select-none w-1/2"
          />
          <FormButton text="Login" disabled />
        </form>
      </div>
    </>
  );
};

export default Login;
