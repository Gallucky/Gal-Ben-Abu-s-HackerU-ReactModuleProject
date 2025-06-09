import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { CreateCardFormData } from "../../types/forms/CreateCardFormData";
import { SectionProps } from "../../types/pages/SectionProps.t";

const ContactSection = (props: SectionProps<CreateCardFormData>) => {
  const {
    register,
    errors,
    backgroundColors,
    className,
    sectionBorderClassName,
    sectionTitleClassName,
    editable,
  } = props;

  return (
    <Flex direction="col" className="relative w-full">
      <FormAreaTitle
        text="Contact"
        className={`${backgroundColors} ${sectionTitleClassName}`}
      />
      <FormAreaBorder className={sectionBorderClassName} />

      <Flex
        directionDynamic
        className={`-mt-4 gap-2 p-4 ${className}`}
        justify="center"
      >
        <FormInput
          editable={editable}
          {...register("phone")}
          id="create-card-form-phone"
          label="Phone"
          type="tel"
          className="w-[90%] md:w-1/3"
          state="grayscale"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.phone?.message}
        />
        <FormInput
          editable={editable}
          {...register("email")}
          id="create-card-form-email"
          label="Email"
          type="email"
          className="w-[90%] md:w-1/3"
          state="grayscale"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.email?.message}
        />
        <FormInput
          editable={editable}
          {...register("web")}
          id="create-card-form-web"
          label="Web"
          type="url"
          className="w-[90%] md:w-1/3"
          state="grayscale"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.web?.message}
        />
      </Flex>
    </Flex>
  );
};

export default ContactSection;
