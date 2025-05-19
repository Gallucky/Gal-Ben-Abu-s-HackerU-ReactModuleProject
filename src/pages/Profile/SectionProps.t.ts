import { UseFormRegister, FieldValues, FieldErrors } from "react-hook-form";

export type SectionProps<T extends FieldValues = FieldValues> = {
  backgroundColors: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
};
