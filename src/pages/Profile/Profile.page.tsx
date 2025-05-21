import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import PageWrapper from "../../components/layout/PageWrapper";
import PageForm from "../../components/utils/PageForm";
import { RegisterFormData } from "../../hooks/useAuth";
import { registerSchema } from "../../validations/register.joi";
import NameSection from "../Registration/Name.section";
import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import AddressSection from "../Registration/Address.section";

// Should be replaced with the data from the user profile.
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

const Profile = () => {
  // const [imageUrl, setImageUrl] = useState("");

  const {
    register,
    // handleSubmit,
    formState: { errors },
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

  const backgroundColors = "!bg-teal-400 dark:bg-teal-600";

  return (
    <>
      <PageWrapper>
        <PageForm title="Profile Page">
          {/* 
            Grid area with the following sections:
            "blank blank"
            "Profile Picture NameSection"
            "Profile Picture AccountInfoSection"
            "Profile Picture PersonalInfoSection"
            "Profile Picture AddressSection"
            "blank"
          */}
          <div className="grid grid-cols-[1fr_3fr] gap-4 gap-x-10 p-6">
            {/* Top blank row */}
            <div className="col-span-2" />
            {/* Profile Picture spanning 4 rows */}
            <div className="row-span-4 flex items-start justify-center place-self-center">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="size-60 rounded-xl border border-black object-cover dark:border-white"
              />
            </div>
            {/* Sections to the right of the profile picture */}
            <NameSection
              editable
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              watch={watch}
              className="md:p-2 md:px-10"
              sectionBorderClassName="!border border-gray-400 dark:border-gray-600"
              sectionTitleClassName="!text-gray-800 dark:!text-gray-700"
            />
            {/* Account Info Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle
                text="Account Info"
                className={`${backgroundColors} !text-gray-800 dark:!text-gray-700`}
              />
              <FormAreaBorder className="!border border-gray-400 dark:border-gray-600" />

              <Flex
                className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                directionDynamic
              >
                <FormInput
                  editable
                  {...register("email")}
                  id="registration-form-email"
                  label="Email"
                  type="email"
                  className="w-[90%] md:w-1/2"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.email ? errors.email.message : ""}
                />
                <FormInput
                  editable
                  {...register("password")}
                  id="registration-form-password"
                  label="Password"
                  type="password"
                  className="w-[90%] md:w-1/2"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.password?.message}
                />
              </Flex>
            </Flex>
            {/* Personal Info Section */}
            <Flex direction="col" className="relative w-full">
              <FormAreaTitle
                text="Personal Info"
                className={`${backgroundColors} !text-gray-800 dark:!text-gray-700`}
              />
              <FormAreaBorder className="!border border-gray-400 dark:border-gray-600" />

              <Flex direction="col" directionDynamic>
                <Flex
                  className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
                  directionDynamic
                >
                  <FormInput
                    editable
                    {...register("phone")}
                    id="registration-form-phone"
                    label="Phone"
                    type="tel"
                    className="w-[90%] md:w-1/3"
                    labelClassName={`${backgroundColors}`}
                    errorMessage={errors.phone?.message}
                  />
                  <FormInput
                    editable
                    {...register("image.url")}
                    id="registration-form-image-url"
                    label="Image Url"
                    type="url"
                    className="w-[90%] md:w-1/3"
                    labelClassName={`${backgroundColors}`}
                    errorMessage={errors.image?.url?.message}
                  />
                  <FormInput
                    editable
                    {...register("image.alt")}
                    id="registration-form-image-alt"
                    label="Image Alt"
                    className="w-[90%] md:w-1/3"
                    labelClassName={`${backgroundColors}`}
                    errorMessage={errors.image?.alt?.message}
                  />
                </Flex>
              </Flex>
            </Flex>
            <AddressSection
              editable
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              className="md:p-2 md:px-0"
              sectionBorderClassName="!border border-gray-400 dark:border-gray-600"
              sectionTitleClassName="!text-gray-800 dark:!text-gray-700"
              watch={watch}
            />
            {/* Bottom blank row */}
            <div className="col-span-2" />
          </div>
        </PageForm>
      </PageWrapper>
    </>
  );
};

export default Profile;
