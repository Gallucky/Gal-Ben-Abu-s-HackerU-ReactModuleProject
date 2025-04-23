import FormInput from "../components/FormLabel";

const Login = () => {
  return (
    <>
      {/* Content Wrapper */}
      <div className="content-wrapper">
        {/* Content - Form */}
        <form className="content-form">
          <FormInput id={"test"} label={"test"} />
        </form>
      </div>
    </>
  );
};

export default Login;
