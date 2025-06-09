import { joiResolver } from "@hookform/resolvers/joi";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import PageWrapper from "../../components/layout/PageWrapper";
import PageForm from "../../components/utils/PageForm";
import useAuth from "../../hooks/useAuth";
import { registerSchema } from "../../validations/register.joi";
import NameSection from "../Registration/Name.section";
import AddressSection from "../Registration/Address.section";
import { TUser } from "../../types/user.t";
import {
  convertTUserToRegisterFormData,
  convertTUserToUpdateUserFormData,
} from "../../utils/convertTUser";
import PersonalProfileInfoSection from "./PersonalProfileInfo.section";
import { toast } from "react-toastify";
import {
  defaultValuesRegisterFormData,
  RegisterFormData,
} from "../../types/forms/RegisterFormData";
import AccountInfoSection from "../Registration/AccountInfo.section";

const Profile = () => {
  // const [imageUrl, setImageUrl] = useState("");

  // Prevent multiple update requests from being sent at the same time.
  // This is used to prevent the user from clicking the save button multiple times
  // Also it solves the problem with more than one 'User data updated successfully' toast.
  const [lockUpdateRequests, setLockUpdateRequests] = useState(false);

  const {
    register,
    formState: { errors },
    trigger,
    watch,
    reset,
  } = useForm<RegisterFormData>({
    defaultValues: defaultValuesRegisterFormData,
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

      if (profileImageRef.current) {
        if (user.image.url) {
          // Set the profile image source to the user's image URL.
          profileImageRef.current.src = user.image.url;
          // Set the profile image alt text to the user's image alt text.
          profileImageRef.current.alt = user.image.alt ?? "";

          profileImageRef.current.style.objectFit = "contain";
          profileImageRef.current.style.objectPosition = "center";
        }
      }
    }
  }, [user, reset]);

  const handleSave = (updatedUser: TUser) => {
    if (!lockUpdateRequests) {
      // Handle the updated user data here
      setLockUpdateRequests(true);

      userUpdateRequest(
        convertTUserToUpdateUserFormData(updatedUser),
        setLockUpdateRequests,
        1000,
      );
    } else {
      toast.info("Please wait for the current update to complete.");
    }
  };

  const handleNameSave = (
    changedVal: string,
    part: "First" | "Middle" | "Last",
  ) => {
    // Handle name save logic here
    if (user) {
      // The structuredClone is used to create a deep copy of the user object.
      // This is necessary to avoid mutating the original user object directly.
      // So no matter how many nested objects in the main object it will create
      // a copy that is not linked to the original object.
      const userDataCopy = structuredClone(user);

      // Updating the chosen part of the name.
      if (part === "First") {
        userDataCopy.name.first = changedVal;
      } else if (part === "Middle") {
        userDataCopy.name.middle = changedVal;
      } else if (part === "Last") {
        userDataCopy.name.last = changedVal;
      }

      // Sync the changes with the server.
      handleSave(userDataCopy);
    }
  };

  const handlePersonalInfoSave = (
    changedVal: string,
    field: "Phone" | "Image.Url" | "Image.Alt",
  ) => {
    if (user) {
      // The structuredClone is used to create a deep copy of the user object.
      // This is necessary to avoid mutating the original user object directly.
      // So no matter how many nested objects in the main object it will create
      // a copy that is not linked to the original object.
      const userDataCopy = structuredClone(user);

      // Handle personal info save logic here
      if (field === "Phone") userDataCopy.phone = changedVal;
      else if (field === "Image.Url") userDataCopy.image.url = changedVal;
      else if (field === "Image.Alt") userDataCopy.image.alt = changedVal;

      if (profileImageRef.current) {
        // Update the image source to the new URL.
        if (field === "Image.Url") profileImageRef.current.src = changedVal;
        // Update the image source to the new alt.
        else if (field === "Image.Alt")
          profileImageRef.current.alt = changedVal;
      }

      // Sync the changes with the server.
      handleSave(userDataCopy);
    }
  };

  const handleAddressSave = (
    changedVal: string,
    field: "Country" | "State" | "City" | "Street" | "HouseNumber" | "Zip",
  ) => {
    if (user) {
      // The structuredClone is used to create a deep copy of the user object.
      // This is necessary to avoid mutating the original user object directly.
      // So no matter how many nested objects in the main object it will create
      // a copy that is not linked to the original object.
      const userDataCopy = structuredClone(user);

      // Handle address save logic here
      // Update the address field in the user object

      if (field === "Country") userDataCopy.address.country = changedVal;
      else if (field === "State") userDataCopy.address.state = changedVal;
      else if (field === "City") userDataCopy.address.city = changedVal;
      else if (field === "Street") userDataCopy.address.street = changedVal;
      else if (field === "HouseNumber")
        userDataCopy.address.houseNumber = parseInt(changedVal, 10);
      else if (field === "Zip")
        userDataCopy.address.zip = parseInt(changedVal, 10);

      // Sync the changes with the server.
      handleSave(userDataCopy);
    }
  };

  return (
    <>
      <PageWrapper>
        <PageForm
          title="Profile Page"
          titleClassName="underline underline-offset-[15px]"
        >
          {/* 
            Grid area with the following sections:
            "blank blank"
            "Profile Picture NameSection"
            "Profile Picture AccountInfoSection"
            "Profile Picture PersonalInfoSection"
            "Profile Picture AddressSection"
            "blank"
          */}
          <div className="flex w-3/4 flex-col gap-4 md:grid md:grid-cols-[1fr_3fr] md:gap-x-10 md:p-6">
            {/* Top blank row */}
            <div className="col-span-2 w-full" />
            {/* Profile Picture spanning 4 rows */}
            <div className="row-span-4 flex w-full items-start justify-center place-self-center">
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
            <AccountInfoSection
              register={register}
              errors={errors}
              backgroundColors={backgroundColors}
              watch={watch}
              withoutConfirmPassword
            />
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
              className="w-full md:p-2 md:px-0"
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
