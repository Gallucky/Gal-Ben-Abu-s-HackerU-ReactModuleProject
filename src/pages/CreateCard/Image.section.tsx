import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { CreateCardFormData } from "../../hooks/useAuth";
import { SectionProps } from "../../types/pages/SectionProps.t";
import { CiImageOn } from "react-icons/ci";

const ImageSection = (props: SectionProps<CreateCardFormData>) => {
  const {
    register,
    watch,
    errors,
    backgroundColors,
    className,
    sectionBorderClassName,
    sectionTitleClassName,
  } = props;

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle
        text="Image"
        className={`${backgroundColors} ${sectionTitleClassName}`}
      />
      <FormAreaBorder className={sectionBorderClassName} />

      <Flex
        direction="col"
        directionDynamic
        className={`-mt-4 gap-2 p-4 ${className}`}
        justify="center"
      >
        <Flex directionDynamic className="gap-4">
          <FormInput
            {...register("image.url")}
            id="create-card-form-image-url"
            label="Url"
            type="url"
            state="grayscale"
            className="w-[90%] md:w-1/2"
            labelClassName={`${backgroundColors}`}
            errorMessage={errors.image?.url?.message}
          />

          <FormInput
            {...register("image.alt")}
            id="create-card-form-image-alt"
            label="Alt"
            state="grayscale"
            className="w-[90%] md:w-1/2"
            labelClassName={`${backgroundColors}`}
            errorMessage={errors.image?.alt?.message}
          />
        </Flex>

        {(!errors.image?.url && watch("image.url") !== "" && (
          <img
            width={"200px"}
            height={"200px"}
            src={!errors.image?.url ? watch("image.url") : ""}
            alt={watch("image.alt")}
            className="mt-2 place-self-center rounded-lg"
          />
        )) || (
          <CiImageOn size={200} color="black" className="place-self-center" />
        )}
      </Flex>
    </Flex>
  );
};

export default ImageSection;
