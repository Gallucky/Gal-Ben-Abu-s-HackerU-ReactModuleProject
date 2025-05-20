import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { RegisterFormData } from "../../hooks/useAuth";
import { SectionProps } from "../../types/pages/SectionProps.t";

const NameSection = (props: SectionProps<RegisterFormData>) => {
  const { register, errors, backgroundColors } = props;

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle text="Name" className={`${backgroundColors}`} />
      <FormAreaBorder />

      <Flex
        className="w-full gap-3 py-2 md:gap-5 md:p-3 md:px-10"
        directionDynamic
      >
        <FormInput
          {...register("name.first")}
          id="registration-form-first-name"
          label="First Name"
          className="w-[90%] md:w-1/3"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.name?.first?.message}
        />
        <FormInput
          {...register("name.middle")}
          id="registration-form-middle-name"
          label="Middle Name"
          labelClassName={`${backgroundColors}`}
          className="w-[90%] md:w-1/3"
          errorMessage={errors.name?.middle?.message}
        />
        <FormInput
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
