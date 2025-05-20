import FormButton from "../../components/form/FormButton";
import FormInput from "../../components/form/FormInput";
import PageWrapper from "../../components/layout/PageWrapper";
import CheckBox from "../../components/utils/CheckBox";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import Grid from "../../components/utils/Grid";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validations/register.joi";
import { restrictNonPhoneRelatedKeys } from "../../events/input/phone";
import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";
import useAuth, { RegisterFormData } from "../../hooks/useAuth";
import PageForm from "../../components/utils/PageForm";
import NameSection from "./Name.section";
import AccountInfoSection from "./AccountInfo.section";

const defaultValues = {
  name: {
    first: "",
    middle: "",
    last: "",
  },
  phone: "",
  email: "",
  password: "",
  image: {
    url: "",
    alt: "",
  },
  address: {
    state: "",
    country: "",
    city: "",
    street: "",
    houseNumber: "",
    zip: "",
  },
  isBusiness: false,
};

const Registration = () => {
  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    watch,
    // setError,
  } = useForm<RegisterFormData>({
    defaultValues,
    mode: "onChange",
    resolver: joiResolver(registerSchema),
  });

  useEffect(() => {
    trigger(); // ⬅️ Trigger validation on load
  }, [trigger]);

  const { registerRequest } = useAuth();

  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "Confirm password is required",
  );

  const backgroundColors = "!bg-teal-400 dark:bg-teal-600";

  return (
    <>
      <PageWrapper>
        <PageForm title="Signup Page" onSubmit={handleSubmit(registerRequest)}>
          <Flex
            direction="col"
            gap="1rem"
            className="w-full md:w-[90%]"
            items="center"
          >
            {/* Name Section */}
            <NameSection
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              watch={watch}
            />
            {/* Account Info Section */}
            <AccountInfoSection
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              watch={watch}
              setConfirmPasswordError={setConfirmPasswordError}
              confirmPasswordError={confirmPasswordError}
            />
            {/* Personal Info Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle
                text="Personal Info"
                className={`${backgroundColors}`}
              />
              <FormAreaBorder />

              <Flex direction="col" directionDynamic>
                <Flex
                  className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                  directionDynamic
                >
                  <FormInput
                    {...register("phone")}
                    id="registration-form-phone"
                    label="Phone"
                    type="tel"
                    className="w-[90%] md:w-1/3"
                    labelClassName={`${backgroundColors}`}
                    errorMessage={errors.phone?.message}
                    onKeyDown={restrictNonPhoneRelatedKeys}
                  />
                  <FormInput
                    {...register("image.url")}
                    id="registration-form-image-url"
                    label="Image Url"
                    type="url"
                    className="w-[90%] md:w-1/3"
                    labelClassName={`${backgroundColors}`}
                    errorMessage={errors.image?.url?.message}
                    onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                      setImageUrl(e.target.value);
                    }}
                  />
                  <FormInput
                    {...register("image.alt")}
                    id="registration-form-image-alt"
                    label="Image Alt"
                    className="w-[90%] md:w-1/3"
                    labelClassName={`${backgroundColors}`}
                    errorMessage={errors.image?.alt?.message}
                  />
                </Flex>
                {/* imageUrl:
                    checks if contains a value
                    !errors.image?.url:
                    checks if the errors.image exists
                    if so it proceeds to the url and only if this is doesn't exists
                    (undefined or null) then render the image instead of the fallback default image.
                */}
                {imageUrl && !errors.image?.url ? (
                  // If the image url is valid then display.
                  <>
                    <img
                      src={imageUrl}
                      alt={"image Preview"}
                      width={200}
                      height={200}
                      className="mb-4 self-center rounded-xl"
                    ></img>
                    {console.log("imageUrl", imageUrl)}
                  </>
                ) : (
                  // If the image url is invalid then display this default preview image.
                  <CiImageOn
                    size={200}
                    color="black"
                    className="mb-4 self-center rounded-xl"
                  />
                )}
              </Flex>
            </Flex>
            {/* Address Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle text="Address" className={`${backgroundColors}`} />
              <FormAreaBorder />

              <Grid
                className="mx-2 w-[90%] gap-3 self-center py-3 md:gap-6 md:py-6"
                gridColumns={{ sm: 1, md: 2, lg: 3 }}
                gridRows={{ sm: 3, md: 3, lg: 3 }}
              >
                <FormInput
                  {...register("address.country")}
                  id="registration-form-country"
                  label="Country"
                  className="w-[90%] md:w-full"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.address?.country?.message}
                />
                <FormInput
                  {...register("address.state")}
                  id="registration-form-state"
                  label="State"
                  className="w-[90%] md:w-full"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.address?.state?.message}
                />
                <FormInput
                  {...register("address.city")}
                  id="registration-form-city"
                  label="City"
                  className="w-[90%] md:w-full"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.address?.city?.message}
                />
                <FormInput
                  {...register("address.street")}
                  id="registration-form-street"
                  label="Street"
                  className="w-[90%] md:w-full"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.address?.street?.message}
                />
                <FormInput
                  {...register("address.houseNumber")}
                  id="registration-form-house-number"
                  label="House Number"
                  type="number"
                  min={0}
                  className="w-[90%] md:w-full"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.address?.houseNumber?.message}
                />
                <FormInput
                  {...register("address.zip")}
                  id="registration-form-zip"
                  label="Zip"
                  type="number"
                  min={0}
                  className="w-[90%] md:w-full"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.address?.zip?.message}
                />
              </Grid>
            </Flex>
            <CheckBox
              {...register("isBusiness")}
              id="registration-form-is-business"
              text="Is Business?"
              direction="row"
              className="!gap-2 px-4"
              size="size-[1.5rem]"
              textSize="2xl"
            />
            <FormButton
              text="Register"
              type="submit"
              className="!w-1/2"
              disabled={!isValid || confirmPasswordError !== ""}
            />
          </Flex>
        </PageForm>
      </PageWrapper>
    </>
  );
};

export default Registration;
