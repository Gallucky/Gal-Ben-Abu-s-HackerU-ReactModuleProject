import FormButton from "../../components/form/FormButton";
import PageWrapper from "../../components/layout/PageWrapper";
import CheckBox from "../../components/utils/CheckBox";
import Flex from "../../components/utils/Flex";
import { joiResolver } from "@hookform/resolvers/joi";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../validations/register.joi";
import { useEffect, useState } from "react";
import useAuth, { RegisterFormData } from "../../hooks/useAuth";
import PageForm from "../../components/utils/PageForm";
import NameSection from "./Name.section";
import AccountInfoSection from "./AccountInfo.section";
import PersonalInfoSection from "./PersonalInfo.section";
import AddressSection from "./Address.section";

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
            <PersonalInfoSection
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              watch={watch}
            />
            {/* Address Section */}
            <AddressSection
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              watch={watch}
            />
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
