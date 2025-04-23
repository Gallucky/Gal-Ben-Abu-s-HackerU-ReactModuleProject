import FormInput from "../components/FormInput";

const Login = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Content - Form */}
        <form className="content-form">
          <FormInput id={"test"} label={"test"} color="error" />
        </form>
      </div>
    </>
  );
};

export default Login;
