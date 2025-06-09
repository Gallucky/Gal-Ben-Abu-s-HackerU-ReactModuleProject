import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { RegisterFormData } from "../../types/forms/RegisterFormData";
import { SectionProps } from "../../types/pages/SectionProps.t";

const NameSection = (
  props: SectionProps<RegisterFormData> & {
    onNameSave?: (value: string, part: "First" | "Middle" | "Last") => void;
  },
) => {
  const {
    register,
    errors,
    backgroundColors,
    className,
    sectionBorderClassName,
    sectionTitleClassName,
    editable = false,
  } = props;

  // What action to take when the name is saved.
  // Do nothing if the onNameSave is not defined.
  const onNameSave = props.onNameSave ?? (() => {});

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle
        text="Name"
        className={`${backgroundColors} ${sectionTitleClassName}`}
      />
      <FormAreaBorder className={sectionBorderClassName} />

      <Flex
        className={`w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10 ${"!" + className}`}
        directionDynamic
      >
        <FormInput
          editable={editable}
          onSave={(val) => onNameSave(val, "First")}
          {...register("name.first")}
          id="registration-form-first-name"
          label="First Name"
          className="w-[90%] md:w-1/3"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.name?.first?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onNameSave(val, "Middle")}
          {...register("name.middle")}
          id="registration-form-middle-name"
          label="Middle Name"
          labelClassName={`${backgroundColors}`}
          className="w-[90%] md:w-1/3"
          errorMessage={errors.name?.middle?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onNameSave(val, "Last")}
          {...register("name.last")}
          id="registration-form-last-name"
          label="Last Name"
          className="w-[90%] md:w-1/3"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.name?.last?.message}
        />
      </Flex>
    </Flex>
  );
};

export default NameSection;
