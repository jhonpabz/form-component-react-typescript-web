import { FieldValues } from "react-hook-form/dist/types/fields";
import { Control } from "react-hook-form/dist/types/form";

export interface DropdownInterface {
  name: any;
  control: any;
  defaultValue?: string;
  label: string;
  value?: string | null;
  errors: any;
  variant?: "standard" | "filled" | "outlined" | undefined;
  id?: string;
  labelId?: string;
  selectId?: string;
  options: {
    value: string;
    label: string;
  }[];
}
