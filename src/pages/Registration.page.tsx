import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import PageWrapper from "../components/PageWrapper";
import CheckBox from "../components/utils/CheckBox";
import Flex from "../components/utils/Flex";
import Grid from "../components/utils/Grid";
import GridItem from "../components/utils/GridItem";

const Registration = () => {
  return (
    <>
      <PageWrapper>
        <form className="content-form">
          <h2 className="font-Raleway form-fluid-text form-page-title">
            Signup Page
          </h2>

          <Flex direction="col" gap="1rem" className="w-2/3" items="center">
            {/* Name Section */}
            {/* <Flex direction="col">
              <span>Name</span>
              <Flex>
                <FormInput
                  id="registration-form-first-name"
                  label="First Name"
                />
                <FormInput
                  id="registration-form-middle-name"
                  label="Middle Name"
                />
                <FormInput id="registration-form-last-name" label="Last Name" />
              </Flex>
            </Flex> */}
            {/* Account Info Section */}
            {/* <Flex direction="col">
              <span>Account Info</span>
              <Flex>
                <FormInput
                  id="registration-form-email"
                  label="Email"
                  type="email"
                />
                <FormInput
                  id="registration-form-password"
                  label="Password"
                  type="password"
                />
                <FormInput
                  id="registration-form-confirm-password"
                  label="Confirm Password"
                  type="password"
                />
              </Flex>
            </Flex> */}
            {/* Personal Info Section */}
            {/* <Flex>
              <Flex>
                <span>Personal Info</span>
                <FormInput
                  id="registration-form-phone"
                  label="Phone"
                  type="tel"
                />
                <FormInput
                  id="registration-form-image"
                  label="Image"
                  type="image"
                />
              </Flex>
            </Flex> */}
            {/* Address Section */}
            <Flex direction="col" className="w-full">
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
            </Flex>
            <CheckBox
              id="registration-form-is-business"
              text="Is Business?"
              direction="row"
              className="px-4"
              size="2rem"
            />
            <FormButton text="Register" type="submit" className="w-fit" />
          </Flex>
        </form>
      </PageWrapper>
    </>
  );
};

export default Registration;
