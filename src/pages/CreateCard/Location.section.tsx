import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { SectionProps } from "../../types/pages/SectionProps.t";
import Grid from "../../components/utils/Grid";
import { CreateCardFormData } from "../../types/forms/CreateCardFormData";

const LocationSection = (props: SectionProps<CreateCardFormData>) => {
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
        text="Address"
        className={`${backgroundColors} ${sectionTitleClassName}`}
      />
      <FormAreaBorder className={sectionBorderClassName} />

      <Grid
        className={`mx-2 w-[90%] gap-3 self-center py-3 md:gap-6 md:py-6 ${"!" + className}`}
        gridColumns={{ sm: 1, md: 2, lg: 3 }}
        gridRows={{ sm: 3, md: 3, lg: 3 }}
      >
        <FormInput
          editable={editable}
          {...register("address.country")}
          id="create-card-form-country"
          label="Country"
          state="grayscale"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.country?.message}
        />
        <FormInput
          editable={editable}
          {...register("address.state")}
          id="create-card-form-state"
          label="State"
          state="grayscale"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.state?.message}
        />
        <FormInput
          editable={editable}
          {...register("address.city")}
          id="registration-form-city"
          label="City"
          state="grayscale"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.city?.message}
        />
        <FormInput
          editable={editable}
          {...register("address.street")}
          id="create-card-form-street"
          label="Street"
          state="grayscale"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.street?.message}
        />
        <FormInput
          editable={editable}
          {...register("address.houseNumber")}
          id="create-card-form-house-number"
          label="House Number"
          type="number"
          disableUpDownArrows
          min={0}
          state="grayscale"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.houseNumber?.message}
        />
        <FormInput
          editable={editable}
          {...register("address.zip")}
          id="create-card-form-zip"
          label="Zip"
          type="number"
          disableUpDownArrows
          min={0}
          state="grayscale"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.zip?.message}
        />
      </Grid>
    </Flex>
  );
};

export default LocationSection;
