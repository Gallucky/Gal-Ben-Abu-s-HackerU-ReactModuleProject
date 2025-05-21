import {
  UseFormRegister,
  FieldValues,
  FieldErrors,
  UseFormWatch,
} from "react-hook-form";

export type SectionProps<T extends FieldValues = FieldValues> = {
  backgroundColors: string;
  register: UseFormRegister<T>;
  errors: FieldErrors<T>;
  watch: UseFormWatch<T>;
  className?: string;
  sectionBorderClassName?: string;
  sectionTitleClassName?: string;
  editable?: boolean;
};
