import FormInput from "../components/FormInput";

const Login = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Content - Form */}
        <form className="content-form relative">
          <FormInput id={"test"} label={"test"} color="default" />
        </form>
      </div>
    </>
  );
};

export default Login;
