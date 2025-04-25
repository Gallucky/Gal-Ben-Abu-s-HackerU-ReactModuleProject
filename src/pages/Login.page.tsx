import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const Login = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div className="content-wrapper flex flex-col">
        {/* Content - Form */}
        <form className="content-form relative">
          <h2 className="font-Raleway fluid-text font-semibold text-white">
            Login Page
          </h2>
          <div className="scale-125">
            <FormInput
              id={"email"}
              label={"Email"}
              color="default"
              labelClassName="text-xl select-none"
            />
            <FormInput
              id={"password"}
              label={"Password"}
              color="default"
              labelClassName="text-xl select-none"
            />
          </div>
          <FormButton text="Login" disabled />
        </form>
      </div>
    </>
  );
};

export default Login;
