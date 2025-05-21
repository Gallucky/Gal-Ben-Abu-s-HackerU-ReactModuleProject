import PageWrapper from "../components/layout/PageWrapper";
import PageForm from "../components/utils/PageForm";
import FormInput from "../components/form/FormInput";

const Test = () => {
  document.body.style.overflowX = "hidden";

  return (
    <PageWrapper>
      <PageForm title="Test Page">
        <FormInput
          editable
          id="test-form-input"
          label="Test Input"
          type="text"
          className="w-[90%] md:w-1/3"
          labelClassName="!bg-teal-400 dark:bg-teal-600"
        />
      </PageForm>
    </PageWrapper>
  );
};

export default Test;
