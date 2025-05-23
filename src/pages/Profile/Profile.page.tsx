import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import PageWrapper from "../../components/layout/PageWrapper";
import PageForm from "../../components/utils/PageForm";
import useAuth, { RegisterFormData } from "../../hooks/useAuth";
import { registerSchema } from "../../validations/register.joi";
import NameSection from "../Registration/Name.section";
import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import AddressSection from "../Registration/Address.section";
import { TUser } from "../../types/user.t";
import {
  convertTUserToRegisterFormData,
  convertTUserToUpdateUserFormData,
} from "../../utils/convertTUser";
import PersonalProfileInfoSection from "./PersonalProfileInfo.section";

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
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<RegisterFormData>({
    defaultValues,
    mode: "onChange",
    resolver: joiResolver(registerSchema),
  });

  useEffect(() => {
    trigger(); // ⬅️ Trigger validation on load
  }, [trigger]);

  const backgroundColors = "!bg-teal-400 dark:bg-teal-600";

  const { user, userUpdateRequest } = useAuth();
  const profileImageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (user) {
      // Convert user to form structure
      const userFormData = convertTUserToRegisterFormData(user);
      // Set the form data to the user data
      reset(userFormData);
    }
  }, [user, reset]);

  const handleSave = (updatedUser: TUser) => {
    // Handle the updated user data here
    userUpdateRequest(convertTUserToUpdateUserFormData(updatedUser));
  };

  const handleNameSave = (
    changedVal: string,
    part: "First" | "Middle" | "Last",
  ) => {
    // Handle name save logic here
    if (user) {
      // Updating the chosen part of the name.
      if (part === "First") {
        user.name.first = changedVal;
      } else if (part === "Middle") {
        user.name.middle = changedVal;
      } else if (part === "Last") {
        user.name.last = changedVal;
      }

      // Sync the changes with the server.
      handleSave(user);
    }
  };

  const handlePersonalInfoSave = (
    changedVal: string,
    field: "Phone" | "Image.Url" | "Image.Alt",
  ) => {
    if (user) {
      // Handle personal info save logic here
      if (field === "Phone") user.phone = changedVal;
      else if (field === "Image.Url") user.image.url = changedVal;
      else if (field === "Image.Alt") user.image.alt = changedVal;

      if (profileImageRef.current) {
        // Update the image source to the new URL.
        if (field === "Image.Url") profileImageRef.current.src = changedVal;
        // Update the image source to the new alt.
        else if (field === "Image.Alt")
          profileImageRef.current.alt = changedVal;
      }

      // Sync the changes with the server.
      handleSave(user);
    }
  };

  const handleAddressSave = (
    changedVal: string,
    field: "Country" | "State" | "City" | "Street" | "HouseNumber" | "Zip",
  ) => {
    if (user) {
      const userDataCopy = { ...user };
      // Handle address save logic here
      // Update the address field in the user object

      if (field === "Country") userDataCopy.address.country = changedVal;
      else if (field === "State") userDataCopy.address.state = changedVal;
      else if (field === "City") userDataCopy.address.city = changedVal;
      else if (field === "Street") userDataCopy.address.street = changedVal;
      else if (field === "HouseNumber")
        userDataCopy.address.houseNumber = parseInt(changedVal, -1);
      else if (field === "Zip")
        userDataCopy.address.zip = parseInt(changedVal, -1);

      // Sync the changes with the server.
      handleSave(userDataCopy);
    }
  };

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
                ref={profileImageRef}
              />
            </div>
            {/* Sections to the right of the profile picture */}
            <NameSection
              editable
              onNameSave={handleNameSave}
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
                  disabled
                  {...register("email")}
                  id="registration-form-email"
                  label="Email"
                  type="email"
                  className="w-[90%] md:w-1/2"
                  labelClassName={`${backgroundColors}`}
                  errorMessage={errors.email ? errors.email.message : ""}
                />
                <FormInput
                  disabled
                  id="registration-form-password"
                  label="Password"
                  type="password"
                  className="w-[90%] md:w-1/2"
                  labelClassName={`${backgroundColors}`}
                />
              </Flex>
            </Flex>
            {/* Personal Info Section */}
            <PersonalProfileInfoSection
              editable
              onPersonalInfoSave={handlePersonalInfoSave}
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              watch={watch}
            />

            <AddressSection
              editable
              onAddressSave={handleAddressSave}
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
