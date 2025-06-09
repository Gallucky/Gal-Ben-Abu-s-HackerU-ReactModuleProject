import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { RegisterFormData } from "../../types/forms/RegisterFormData";
import { SectionProps } from "../../types/pages/SectionProps.t";

const PersonalProfileInfoSection = (
  props: SectionProps<RegisterFormData> & {
    onPersonalInfoSave?: (
      value: string,
      field: "Phone" | "Image.Url" | "Image.Alt",
    ) => void;
  },
) => {
  const { register, errors, backgroundColors, editable = false } = props;

  // What action to take when Phone or Image.Url or Image.Alt field is saved.
  // Do nothing if the onPersonalInfoSave is not defined.
  const onPersonalInfoSave = props.onPersonalInfoSave ?? (() => {});

  return (
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
            editable={editable}
            onSave={(val) => onPersonalInfoSave(val, "Phone")}
            {...register("phone")}
            id="registration-form-phone"
            label="Phone"
            type="tel"
            className="w-[90%] md:w-1/3"
            labelClassName={`${backgroundColors}`}
            errorMessage={errors.phone?.message}
          />
          <FormInput
            editable={editable}
            onSave={(val) => onPersonalInfoSave(val, "Image.Url")}
            {...register("image.url")}
            id="registration-form-image-url"
            label="Image Url"
            type="url"
            className="w-[90%] md:w-1/3"
            labelClassName={`${backgroundColors}`}
            errorMessage={errors.image?.url?.message}
          />
          <FormInput
            editable={editable}
            onSave={(val) => onPersonalInfoSave(val, "Image.Alt")}
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
  );
};

export default PersonalProfileInfoSection;
