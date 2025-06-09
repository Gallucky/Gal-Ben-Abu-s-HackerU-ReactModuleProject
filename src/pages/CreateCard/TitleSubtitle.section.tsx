import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { CreateCardFormData } from "../../types/forms/CreateCardFormData";
import { SectionProps } from "../../types/pages/SectionProps.t";

const TitleSubtitleSection = (props: SectionProps<CreateCardFormData>) => {
  const {
    register,
    errors,
    backgroundColors,
    className,
    sectionBorderClassName,
    sectionTitleClassName,
  } = props;

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle
        text="Title & Subtitle"
        className={`${backgroundColors} ${sectionTitleClassName}`}
      />
      <FormAreaBorder className={sectionBorderClassName} />

      <Flex directionDynamic className={`-mt-4 gap-2 p-4 ${className}`}>
        <FormInput
          {...register("title")}
          id="create-card-form-title"
          label="Title"
          state="grayscale"
          className="w-[90%] md:w-1/2"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.title?.message}
        />

        <FormInput
          {...register("subtitle")}
          id="create-card-form-subtitle"
          label="Subtitle"
          state="grayscale"
          className="w-[90%] md:w-1/2"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.subtitle?.message}
        />
      </Flex>
    </Flex>
  );
};

export default TitleSubtitleSection;
