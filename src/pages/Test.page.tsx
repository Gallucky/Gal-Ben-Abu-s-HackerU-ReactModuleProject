import FormInput from "../components/form/FormInput";
import PageWrapper from "../components/layout/PageWrapper";

const Test = () => {
  return (
    <PageWrapper>
      <div className="mx-auto flex w-3/4 flex-col items-center gap-6 bg-teal-500 p-4">
        <div className="flex w-fit flex-col gap-4">
          <FormInput id="test-error" label="Test Error" errorMessage="ABC" />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Test;
