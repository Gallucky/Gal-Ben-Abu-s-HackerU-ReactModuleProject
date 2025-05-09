import Grid from "../components/utils/Grid";
import FormInput from "../components/form/FormInput";
import PageWrapper from "../components/layout/PageWrapper";

const Test = () => {
  return (
    <PageWrapper>
      <div className="mx-auto flex w-3/4 flex-col gap-6 bg-red-500 p-4">
        <span className="text-xl text-white">Address</span>

        <Grid
          className="bg-teal-500 px-10 py-6"
          gridColumns={{ sm: 1, md: 2, lg: 3 }}
          gridRows={{ sm: 3, md: 3, lg: 3 }}
          gap="1.5rem"
        >
          <FormInput
            id="registration-form-country"
            label="Country"
            className="w-full"
          />
          <FormInput
            id="registration-form-state"
            label="State"
            className="w-full"
          />
          <FormInput
            id="registration-form-city"
            label="City"
            className="w-full"
          />
          <FormInput
            id="registration-form-street"
            label="Street"
            className="w-full"
          />
          <FormInput
            id="registration-form-house-number"
            label="House Number"
            type="number"
            min={0}
            className="w-full"
          />
          <FormInput
            id="registration-form-zip"
            label="Zip"
            type="number"
            min={0}
            className="w-full"
          />
        </Grid>
      </div>
    </PageWrapper>
  );
};

export default Test;
