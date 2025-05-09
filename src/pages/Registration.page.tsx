import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import PageWrapper from "../components/layout/PageWrapper";
import CheckBox from "../components/utils/CheckBox";
import Flex from "../components/utils/Flex";
import FormAreaBorder from "../components/utils/FormAreaBorder";
import FormAreaTitle from "../components/utils/FormAreaTitle";
import Grid from "../components/utils/Grid";

const Registration = () => {
  return (
    <>
      <PageWrapper>
        <form className="content-form my-[10vh] !w-3/4 bg-teal-500">
          <h2 className="font-Raleway form-fluid-text form-page-title">
            Signup Page
          </h2>

          <Flex
            direction="col"
            gap="1rem"
            className="w-full md:w-[90%]"
            items="center"
          >
            {/* Name Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle text="Name" className="bg-teal-500" />
              <FormAreaBorder />
              <Flex
                className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                directionDynamic
              >
                <FormInput
                  id="registration-form-first-name"
                  label="First Name"
                  className="w-[90%] md:w-1/3"
                />
                <FormInput
                  id="registration-form-middle-name"
                  label="Middle Name"
                  className="w-[90%] md:w-1/3"
                />
                <FormInput
                  id="registration-form-last-name"
                  label="Last Name"
                  className="w-[90%] md:w-1/3"
                />
              </Flex>
            </Flex>
            {/* Account Info Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle text="Account Info" className="bg-teal-500" />
              <FormAreaBorder />

              <Flex
                className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                directionDynamic
              >
                <FormInput
                  id="registration-form-email"
                  label="Email"
                  type="email"
                  className="w-[90%] md:w-1/3"
                />
                <FormInput
                  id="registration-form-password"
                  label="Password"
                  type="password"
                  className="w-[90%] md:w-1/3"
                />
                <FormInput
                  id="registration-form-confirm-password"
                  label="Confirm Password"
                  type="password"
                  className="w-[90%] md:w-1/3"
                  labelClassName="
                    max-lg:!text-xs max-lg:peer-[&:not(:placeholder-shown)]:!top-0
                    max-lg:peer-placeholder-shown:!top-[42%] max-lg:peer-focus:!top-0"
                />
              </Flex>
            </Flex>
            {/* Personal Info Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle text="Personal Info" className="bg-teal-500" />
              <FormAreaBorder />

              <Flex
                className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                directionDynamic
              >
                <FormInput
                  id="registration-form-phone"
                  label="Phone"
                  type="tel"
                  className="w-[90%] md:w-1/2"
                />
                <FormInput
                  id="registration-form-image"
                  label="Image"
                  type="file"
                  fileText="Upload Image"
                  accept="image/*"
                  className="w-[90%] md:w-1/2"
                />
              </Flex>
            </Flex>
            {/* Address Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle text="Address" className="bg-teal-500" />
              <FormAreaBorder />

              <Grid
                className="mx-2 w-[90%] gap-3 self-center bg-teal-500 py-3 md:gap-6 md:py-6"
                gridColumns={{ sm: 1, md: 2, lg: 3 }}
                gridRows={{ sm: 3, md: 3, lg: 3 }}
              >
                <FormInput
                  id="registration-form-country"
                  label="Country"
                  className="w-[90%] md:w-full"
                />
                <FormInput
                  id="registration-form-state"
                  label="State"
                  className="w-[90%] md:w-full"
                />
                <FormInput
                  id="registration-form-city"
                  label="City"
                  className="w-[90%] md:w-full"
                />
                <FormInput
                  id="registration-form-street"
                  label="Street"
                  className="w-[90%] md:w-full"
                />
                <FormInput
                  id="registration-form-house-number"
                  label="House Number"
                  type="number"
                  min={0}
                  className="w-[90%] md:w-full"
                />
                <FormInput
                  id="registration-form-zip"
                  label="Zip"
                  type="number"
                  min={0}
                  className="w-[90%] md:w-full"
                />
              </Grid>
            </Flex>
            <CheckBox
              id="registration-form-is-business"
              text="Is Business?"
              direction="row"
              className="!gap-2 px-4"
              size="size-[1.5rem]"
              textSize="2xl"
            />
            <FormButton text="Register" type="submit" className="w-fit" />
          </Flex>
        </form>
      </PageWrapper>
    </>
  );
};

export default Registration;
