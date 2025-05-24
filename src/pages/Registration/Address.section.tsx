import FormInput from "../../components/form/FormInput";
import Flex from "../../components/utils/Flex";
import FormAreaBorder from "../../components/utils/FormAreaBorder";
import FormAreaTitle from "../../components/utils/FormAreaTitle";
import { RegisterFormData } from "../../hooks/useAuth";
import { SectionProps } from "../../types/pages/SectionProps.t";
import Grid from "../../components/utils/Grid";

const AddressSection = (
  props: SectionProps<RegisterFormData> & {
    onAddressSave?: (
      value: string,
      field: "Country" | "State" | "City" | "Street" | "HouseNumber" | "Zip",
    ) => void;
  },
) => {
  const {
    register,
    errors,
    backgroundColors,
    className,
    sectionBorderClassName,
    sectionTitleClassName,
    editable,
  } = props;

  // What action to take when one of the following fields is saved:
  // Country, State, City, Street, HouseNumber, Zip
  // Do nothing if the onAddressSave is not defined.
  const onAddressSave = props.onAddressSave ?? (() => {});

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
          onSave={(val) => onAddressSave(val, "Country")}
          {...register("address.country")}
          id="registration-form-country"
          label="Country"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.country?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onAddressSave(val, "State")}
          {...register("address.state")}
          id="registration-form-state"
          label="State"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.state?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onAddressSave(val, "City")}
          {...register("address.city")}
          id="registration-form-city"
          label="City"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.city?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onAddressSave(val, "Street")}
          {...register("address.street")}
          id="registration-form-street"
          label="Street"
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.street?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onAddressSave(val, "HouseNumber")}
          {...register("address.houseNumber")}
          id="registration-form-house-number"
          label="House Number"
          type="number"
          disableUpDownArrows
          min={0}
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.houseNumber?.message}
        />
        <FormInput
          editable={editable}
          onSave={(val) => onAddressSave(val, "Zip")}
          {...register("address.zip")}
          id="registration-form-zip"
          label="Zip"
          type="number"
          disableUpDownArrows
          min={0}
          className="w-[90%] md:w-full"
          labelClassName={`${backgroundColors}`}
          errorMessage={errors.address?.zip?.message}
        />
      </Grid>
    </Flex>
  );
};

export default AddressSection;
