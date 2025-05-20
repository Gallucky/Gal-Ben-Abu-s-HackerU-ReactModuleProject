import { CiImageOn } from "react-icons/ci";
import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { restrictNonPhoneRelatedKeys } from "../../events/input/phone";
import { RegisterFormData } from "../../hooks/useAuth";
import { SectionProps } from "../../types/pages/SectionProps.t";

type PersonalInfoSectionProps = SectionProps<RegisterFormData> & {
  setImageUrl: (url: string) => void;
  imageUrl: string;
};

const PersonalInfoSection = (props: PersonalInfoSectionProps) => {
  const { register, errors, backgroundColors, setImageUrl, imageUrl } = props;

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle text="Personal Info" className={`${backgroundColors}`} />
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
          <img
            src={imageUrl}
            alt={"image Preview"}
            width={200}
            height={200}
            className="mb-4 self-center rounded-xl"
          ></img>
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
  );
};

export default PersonalInfoSection;
