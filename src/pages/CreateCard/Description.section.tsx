import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { CreateCardFormData } from "../../hooks/useAuth";
import { SectionProps } from "../../types/pages/SectionProps.t";

const DescriptionSection = (props: SectionProps<CreateCardFormData>) => {
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
        text="Description"
        className={`${backgroundColors} ${sectionTitleClassName}`}
      />
      <FormAreaBorder className={sectionBorderClassName} />

      <Flex className={`-mt-4 gap-2 p-4 ${className}`} justify="center">
        <FormInput
          {...register("description")}
          id="create-card-form-description"
          label="Description"
          className="w-[90%] md:w-1/2"
          state="grayscale"
          inputClassName="h-20"
          labelClassName={`!top-9 peer-focus:!-top-0.5 peer-[&:not(:placeholder-shown)]:!-top-0.5 ${backgroundColors}`}
          errorMessage={errors.description?.message}
        />
      </Flex>
    </Flex>
  );
};

export default DescriptionSection;
