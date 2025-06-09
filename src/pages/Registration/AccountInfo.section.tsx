import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { RegisterFormData } from "../../types/forms/RegisterFormData";
import { SectionProps } from "../../types/pages/SectionProps.t";

type AccountInfoSectionProps = SectionProps<RegisterFormData> & {
  confirmPasswordError?: string;
  setConfirmPasswordError?: (error: string) => void;
  withoutConfirmPassword?: boolean;
  disabled?: boolean;
};

const AccountInfoSection = (props: AccountInfoSectionProps) => {
  const {
    register,
    errors,
    backgroundColors,
    watch,
    confirmPasswordError,
    setConfirmPasswordError = () => {},
    withoutConfirmPassword = false,
    disabled = false,
  } = props;

  const confirmPasswordValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
    const confirmPassword = e.target.value;
    const password = watch("password");

    const regex = /(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*-]).{9,20}/;

    if (confirmPassword === "") {
      setConfirmPasswordError("Confirm password is required");
    } else if (confirmPassword !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else if (!regex.test(confirmPassword)) {
      setConfirmPasswordError(
        "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
      );
    } else {
      setConfirmPasswordError("");
    }
  };

  const passwordValidator = (e: React.ChangeEvent<HTMLInputElement>) => {
    const password = e.target.value;
    const confirmPassword = document.getElementById(
      "form-input-registration-form-confirm-password",
    ) as HTMLInputElement;

    if (confirmPassword && confirmPassword.value !== password) {
      setConfirmPasswordError("Passwords do not match");
    } else if (confirmPassword.value === "") {
      setConfirmPasswordError("Confirm password is required");
    } else {
      setConfirmPasswordError("");
    }
  };

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle text="Account Info" className={`${backgroundColors}`} />
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
          className={`w-[90%] ${!withoutConfirmPassword ? "md:w-1/3" : "md:w-1/2"}`}
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.email ? errors.email.message : ""}
          disabled={disabled}
        />
        <FormInput
          {...register("password")}
          id="registration-form-password"
          label="Password"
          type="password"
          className={`w-[90%] ${!withoutConfirmPassword ? "md:w-1/3" : "md:w-1/2"}`}
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.password?.message}
          onInput={passwordValidator}
          disabled={disabled}
        />
        {!withoutConfirmPassword && (
          <FormInput
            id="registration-form-confirm-password"
            label="Confirm Password"
            type="password"
            className="w-[90%] md:w-1/3"
            labelClassName={`max-lg:!text-xs max-lg:peer-[&:not(:placeholder-shown)]:!top-0
                    max-lg:peer-placeholder-shown:!top-[42%] max-lg:peer-focus:!top-0 ${backgroundColors}`}
            errorMessage={
              confirmPasswordError && confirmPasswordError !== ""
                ? confirmPasswordError
                : undefined
            }
            onInput={confirmPasswordValidator}
            disabled={disabled}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default AccountInfoSection;
