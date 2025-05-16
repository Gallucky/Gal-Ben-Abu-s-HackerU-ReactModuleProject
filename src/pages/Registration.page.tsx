import axios, { AxiosError } from "axios";
import FormButton from "../components/form/FormButton";
import FormInput from "../components/form/FormInput";
import PageWrapper from "../components/layout/PageWrapper";
import CheckBox from "../components/utils/CheckBox";
import Flex from "../components/utils/Flex";
import FormAreaBorder from "../components/utils/FormAreaBorder";
import FormAreaTitle from "../components/utils/FormAreaTitle";
import Grid from "../components/utils/Grid";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerSchema } from "../validations/register.joi";
import { restrictNonPhoneRelatedKeys } from "../events/input/phone";
import { useEffect, useState } from "react";
import { CiImageOn } from "react-icons/ci";

type RegisterFormData = {
  name: {
    first: string;
    middle: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
  image: {
    url: string;
    alt: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: string;
    zip: string;
  };
  isBusiness: boolean;
};

const Registration = () => {
  const navigate = useNavigate();

  const [confirmPasswordError, setConfirmPasswordError] = useState(
    "Confirm password is required",
  );

  const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    trigger,
    setError,
  } = useForm<RegisterFormData>({
    defaultValues: {
      name: {
        first: "",
        middle: "",
        last: "",
      },
      phone: "",
      email: "",
      password: "",
      confirmPassword: "",
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
    },
    mode: "onChange",
    resolver: joiResolver(registerSchema),
  });

  useEffect(() => {
    trigger(); // ⬅️ Trigger validation on load
    trigger("confirmPassword");
  }, [trigger]);

  useEffect(() => {
    setError("confirmPassword", {
      type: "custom",
      message: "Confirm password is required",
    });
  }, [setError]);

  const submitForm = async (data: RegisterFormData) => {
    try {
      const res = await axios.post(
        "https://monkfish-app-z9uza.ondigitalocean.app/bcard2/users",
        data,
      );
      console.log("Success", res);
      toast.success("Registration Successful");
      navigate("../home");
    } catch (error) {
      const axiosError: AxiosError = error as AxiosError;
      console.error("Error submitting form", axiosError);

      const errorMessage = axiosError.message.includes("status code 400")
        ? "Invalid fields"
        : axiosError.message ?? "Error Occurred";
      toast.error(errorMessage);
    }
  };

  const backgroundColors = "!bg-teal-400 dark:bg-teal-600";

  return (
    <>
      <PageWrapper>
        <form
          onSubmit={handleSubmit(submitForm)}
          className={`content-form my-[10vh] !w-3/4 ${backgroundColors}`}
        >
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
              <FormAreaTitle text="Name" className={`${backgroundColors}`} />
              <FormAreaBorder />

              <Flex
                className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                directionDynamic
              >
                <FormInput
                  {...register("name.first")}
                  id="registration-form-first-name"
                  label="First Name"
                  className="w-[90%] md:w-1/3"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.name?.first?.message}
                />
                <FormInput
                  {...register("name.middle")}
                  id="registration-form-middle-name"
                  label="Middle Name"
                  labelClassName={`${backgroundColors}`}
                  className="w-[90%] md:w-1/3"
                  errorMessage={errors.name?.middle?.message}
                />
                <FormInput
                  {...register("name.last")}
                  id="registration-form-last-name"
                  label="Last Name"
                  className="w-[90%] md:w-1/3"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.name?.last?.message}
                />
              </Flex>
            </Flex>
            {/* Account Info Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle
                text="Account Info"
                className={`${backgroundColors}`}
              />
              <FormAreaBorder />

              <Flex
                className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                directionDynamic
              >
                <FormInput
                  {...register("email")}
                  id="registration-form-email"
                  label="Email"
                  type="email"
                  className="w-[90%] md:w-1/3"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.email ? errors.email.message : ""}
                />
                <FormInput
                  {...register("password")}
                  id="registration-form-password"
                  label="Password"
                  type="password"
                  className="w-[90%] md:w-1/3"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.password?.message}
                />
                <FormInput
                  {...register("confirmPassword")}
                  id="registration-form-confirm-password"
                  label="Confirm Password"
                  type="password"
                  className="w-[90%] md:w-1/3"
                  labelClassName={`max-lg:!text-xs max-lg:peer-[&:not(:placeholder-shown)]:!top-0
                    max-lg:peer-placeholder-shown:!top-[42%] max-lg:peer-focus:!top-0 ${backgroundColors}`}
                  errorMessage={
                    confirmPasswordError || errors.confirmPassword?.message
                  }
                  onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setConfirmPasswordError("");

                    if (e.target.value === "") {
                      setConfirmPasswordError("Confirm password is required");
                    }
                  }}
                />
              </Flex>
            </Flex>
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
              disabled={!isValid}
            />
          </Flex>
        </form>
      </PageWrapper>
    </>
  );
};

export default Registration;
